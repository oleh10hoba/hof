const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require ('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");


//SELECT o.id, o.status, o.total, o.created_at, o.mobile, u.first_name, u.last_name, p.name,p.price,p.quantity from `order` o inner join user u on o.user_id = u.id inner join orderitem oi on oi.order_id = o.id inner join product p on p.id = oi.Product_id where o.status = "wykonanie"

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database:'webapp'
})


app.post('/create', async(req, res) => {
    const name = (req.body.nameState).trim()
    const lastName = (req.body.lastNameState).trim()
    const login = (req.body.loginState).trim()
    const password = req.body.passwordState
    const email = req.body.emailState
    const mobile = (req.body.mobileState).trim()
    const address = req.body.addressState
    const house =  req.body.houseState
    const flat = req.body.flatState
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name.length < 2 || lastName.length < 2 || login.length < 3 || password.length < 6 || email.length < 3  || address.length < 3){
        return res.send ("Sprawdź długość wprowadzonych danych")
    }

    if(name.indexOf(' ') >= 0 || lastName.indexOf(' ') >= 0 || login.indexOf(' ') >= 0 || mobile.indexOf(' ') >= 0){
        return res.send ("Sprawdź spacji")
    }

    if(login.match(/^\d/)) {
        return res.send ("Początek loginu zawiera cyfry")
    }

    if((/\d/.test(name)) || (/\d/.test(lastName)) || (/\d/.test(address)) ){
        return res.send("Imie lub nazwisko, lub adres nie mogą zawierać cyfry")
    }

    if(mobile.length !== 9 ){
        return res.send("Wprowadzony numer telefonu nie jest poprawny")
    }

    if(!(re.test(String(email).toLowerCase()))){
        return  res.send("Wprowadzony email jest nie poprawny")
    }

    const finalAddress = addressChecker(address, house, flat)

    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(password, salt)


    db.query("SELECT * from user WHERE username = ? OR email = ? OR mobile = ? ",[login,email,mobile],
        (err,result) => {
            if(err){
               return res.send(err)
            }
            if(result.length!==0) {
                return res.send('Użytkownik już istnieje')
            }
            else{
                db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id, delivery_address) VALUES (?,?,?,?,?,?,?,?)",[name,lastName,login,newpassword,email,mobile,2, finalAddress],
                    (err,result) => {
                        if (err) {
                          return   res.send(err)
                        }
                        else {
                            return res.send('Success');
                        }
                    }
                )
            }
        })

})

app.post('/refreshCart', async(req, res) => {
    const userId = req.body.userId
    db.query('SELECT p.id, p.name, p.description, p.price, p.isavailable, p.image, p.User_id, p.category_id,p.isMetric from product p inner join cartitem c on p.id = c.Product_id where c.user_id = ?',[userId],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result);
            }
        }
    )
})

app.post('/addOrder', async(req, res) => {
    const userId = req.body.userId
    const total = req.body.total
    const address = req.body.address
    const mobile = req.body.mobile
    const shopId = req.body.shopId
    const selfpickup = req.body.selfpickup

                db.query('INSERT into `order` (status,total,address,mobile,created_at,isSelfPickup,shopId,user_id) values ("wykonanie",?,?,?,Now(),?,?,?)',[total,address,mobile,selfpickup,shopId,userId],
                    (err,result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            db.query('INSERT IGNORE INTO orderitem (product_id, quanitty, order_id) SELECT c.Product_id, COUNT(c.Product_id),o.id FROM cartitem c inner join `order` o on c.user_id = o.user_id WHERE c.user_id = (?) AND o.status= "wykonanie" AND o.created_at = (SELECT MAX(created_at) from `order`) GROUP BY Product_id ORDER BY COUNT(Product_id) DESC',[userId],(err,lastId) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                    else{
                                            db.query('delete from cartitem where user_id = ?',[userId])
                                    }
                                }
                            )

                        }
                    }
                )

})


app.post('/addCart', async(req, res) => {
    const userId = req.body.userId
    const productId = req.body.productId
    db.query('INSERT INTO cartitem (Product_id,user_id) values (?,?)',[productId,userId],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})

app.post('/removeCart', async(req, res) => {
    const userId = req.body.userId
    const productId = req.body.productId
    db.query('DELETE from cartitem where user_id = ? and Product_id = ?',[userId, productId],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        }
    )
})


app.post('/addproduct', async(req, res) => {
    const name = req.body.nameState
    const description = req.body.descState
    const price = req.body.priceState
    const isavailable = req.body.isavailableState
    const image = req.body.imageState
    const category_id = req.body.categoryidState
    const isMetric = req.body.isMetric
    const quantity = req.body.quantity
    db.query("insert into product(name,description,price,isavailable,image,User_id,category_id,isMetric, quantity) VALUES (?,?,?,?,?,10,?,?,?)",[name,description,price,isavailable,image,category_id,isMetric,quantity],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send('Produkt został dodany do bd');
            }
        }
    )
})


app.post('/addFavourites',async(req,res) => {
    const userId = req.body.userId
    const productId = req.body.productId
    db.query('SELECT * FROM favourite_list WHERE user_id = ? AND product_id = ?', [userId, productId],
        (err,result) => {
        if(err){
            console.log(err)
        }
        else {
            if(result[0] !== undefined){
                db.query('DELETE from favourite_list where user_id = ? AND product_id = ?',[userId, productId],
                    (err,result) => {
                        if(err){
                            console.log(err)
                        }
                        if(result) {
                            console.log("deleted")
                        }
                    }

                    )
            }
            else db.query('INSERT INTO favourite_list (product_id,user_id) values (?,?)',[productId,userId],
                (err,result) => {
                if(err){
                    console.log(err)
                }

                }
                )
        }
        })

})

app.post('/remproduct', async(req, res) => {
    const id = req.body.idState
    db.query("delete from `product` where `id` = ?",[id],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send('Produkt został usunięty z bd');
            }
        }
    )
})

const verifyJWT = (req,res,next) => {
    const token = req.headers["access-token"]

    if(!token){
        res.send("Cant receive login token")
    } else {
        jwt.verify(token, "DAWKODKWAPOczksokWPWKApodkwaWEKpakdoaw",(err,decoded) => {
            if(err){
                res.send("You are not logged in")
            }
            else {
                req.userId = decoded.id
                next()
            }
        })
    }


}

app.get("/isAuth",verifyJWT, (req,res)=>{
    res.send("Logged In")
})

app.post('/login',async(req,res)=> {
    try{
        const{login,password} = req.body
        if (login && password) {




            db.query('SELECT id, passwd, User_Type_id FROM user WHERE username = ?', [login, password], function(error, result) {
                if (result.length > 0) {
                    const validPassword =  bcrypt.compare(password, result[0].passwd);
                    if(validPassword){
                    const id = result[0].id

                    const token = jwt.sign({id},"DAWKODKWAPOczksokWPWKApodkwaWEKpakdoaw", {
                        expiresIn: 300
                    })
                    res.json({auth: true, token: token, id: result[0].id, userType: result[0].User_Type_id})
                    }
                    else res.send('Incorrect Username and/or Password!')

                } else {
                    res.send('Incorrect Username and/or Password!');
                }
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }

    }catch(err){console.log(err)}






})

app.post("/getHistory", (req, res) => {
    const{id} = req.body
    db.query("Select created_at, status, id from `order` where user_id = ?",[id] ,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/getProductsFromOrder", (req, res) => {
    const{id} = req.body
    db.query("select u.first_name,o.isSelfPickup, u.delivery_address, u.mobile ,o.id,o.status,o.total, p.description,p.price, p.name,c.quanitty from product p inner join orderitem c on c.Product_id = p.id  inner join `order` o on c.order_id = o.id inner join user u on o.user_id = u.id where c.order_id = ?",[id] ,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/closeOrder", (req, res) => {
    const{id} = req.body
    db.query("UPDATE `order` set status = 'wykonane' WHERE id = (?) ",[id] ,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Zamówienie zostało wykonane");
        }
    });
});


app.post("/getOrders", (req, res) => {
    const id = req.body.id
    db.query("SELECT * from `order` Where user_id = ? ",[id] ,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/getOrdersAll", (req, res) => {
    db.query("SELECT * from `order` " ,(err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get("/getproducts", (req, res) => {
    db.query("SELECT p.category_id, p.description, p.id, p.image, p.isavailable, p.isMetric, p.name, p.price, p.quantity, p.User_id,c.name as 'Category_Name' FROM `product` p INNER JOIN category c ON c.id = p.category_id  WHERE p.isavailable = 1", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/getshops", (req, res) => {
    db.query("SELECT * FROM shops;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/getfavorites", (req, res) => {
    const{id} = req.body
    db.query("SELECT p.category_id, p.description, p.id, p.image, p.isavailable, p.isMetric, p.name, p.price, p.quantity, p.User_id,c.name as 'Category_Name' FROM product p INNER JOIN favourite_list f ON p.id = f.product_id INNER JOIN category c ON c.id = p.category_id where f.User_id = ?;",[id], (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

const addressChecker = (address,house,flat) => {
    if(!(/^\d+$/.test(house))){
        return res.send("Nie podany poprawny numer domu")
    }

    if(flat) {
        if(!(/^\d+$/.test(flat))){
            return res.send("Nie podany poprawny numer mieszkania")
        }
    }

    var finalAddress = address + " " + house

    if(flat) {
        finalAddress = finalAddress + " p." + flat
    }
    return finalAddress
}

app.post("/changeaddress", (req, res) => {
    const address = req.body.addressState
    const house =  req.body.houseState
    const flat = req.body.flatState
    const id = req.body.idState

    const finalAddress = addressChecker(address, house, flat)



    db.query("UPDATE user SET `delivery_address` = ? WHERE id = ?",[finalAddress,id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Adres został zmieniony');
        }
    });
});

app.post("/getaccount", (req, res) => {
    const{id} = req.body
    db.query("select * from user where `id` = ?",[id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.listen(3001, () => {
    console.log('Port is running on port 3001');
});
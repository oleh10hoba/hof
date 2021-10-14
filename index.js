const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require ('cors');
const jwt = require('jsonwebtoken')


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database:'webapp'
})


app.post('/create', async(req, res) => {
    const name = req.body.nameState
    const lastName = req.body.lastNameState
    const login = req.body.loginState
    const password = req.body.passwordState
    const email = req.body.emailState
    const mobile = req.body.mobileState
    const address = req.body.addressState


    db.query("SELECT * from user WHERE username = ? OR email = ?",[login,email],
        (err,result) => {
            if(err){
                res.send(err)
            }
            if(result.length!==0) {
                return res.send('Użytkownik już istnieje')
            }
            else{
                db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id, delivery_address) VALUES (?,?,?,?,?,?,?,?)",[name,lastName,login,password,email,mobile,2, address],
                    (err,result) => {
                        if (err) {
                            res.send(err)
                        }
                        else {
                            res.send('Użytkownik został stworzony');
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
    db.query("SELECT * from `order` where user_id = ?",[userId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
            if(result[0] === undefined) {
                db.query('INSERT into `order` (status,total,address,mobile,created_at,isSelfPickup,shopId,user_id) values ("wykonanie",?,?,?,Now(),1,?,?)',[total,address,mobile,shopId,userId],
                    (err,result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            db.query('INSERT IGNORE INTO orderitem (product_id, quanitty, order_id)\n' +
                                'SELECT c.Product_id, COUNT(c.Product_id),o.id FROM cartitem c inner join `order` o on c.user_id = o.user_id WHERE c.user_id = ? GROUP BY Product_id ORDER BY COUNT(Product_id) DESC',[userId],(err,lastId) => {
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
            }
            else{console.log('Order already exist')
                db.query('DELETE oi\n' +
                    '      FROM orderitem oi\n' +
                    '      JOIN `order` o ON o.id = oi.order_id\n' +
                    '     WHERE o.user_id = ?',[userId])
                db.query('delete from `order` where user_id = ?',[userId])
                db.query('INSERT into `order` (status,total,address,mobile,created_at,isSelfPickup,shopId,user_id) values ("wykonanie",?,?,?,Now(),1,?,?)',[total,address,mobile,shopId,userId],
                    (err,result) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            db.query('INSERT IGNORE INTO orderitem (product_id, quanitty, order_id)\n' +
                                'SELECT c.Product_id, COUNT(c.Product_id),o.id FROM cartitem c inner join `order` o on c.user_id = o.user_id WHERE c.user_id = ? GROUP BY Product_id ORDER BY COUNT(Product_id) DESC',[userId],(err,lastId) => {
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
            }
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
            db.query('SELECT id FROM user WHERE username = ? AND passwd = ?', [login, password], function(error, result) {
                if (result.length > 0) {
                    const id = result[0].id
                    const token = jwt.sign({id},"DAWKODKWAPOczksokWPWKApodkwaWEKpakdoaw", {
                        expiresIn: 300
                    })
                    res.json({auth: true, token: token, id: result[0].id})
                    

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

app.get("/getproducts", (req, res) => {
    db.query("SELECT * FROM `product` WHERE `isavailable` = 1;", (err, result) => {
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
    db.query("SELECT * FROM product p INNER JOIN favourite_list f ON p.id = f.product_id where f.User_id = ?;",[id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
app.post("/changeaddress", (req, res) => {
    const address = req.body.addressState
    const id = req.body.idState
    // console.log("ID:", id, address);
    db.query("UPDATE user SET `delivery_address` = ? WHERE id = ?",[address,id], (err, result) => {
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
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
                    // res.send('Succ');
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
    db.query("SELECT * FROM product", (err, result) => {
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

app.get("/getaccount", (req, res) => {
    db.query("select * from user where `id` = 12", (err, result) => {
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
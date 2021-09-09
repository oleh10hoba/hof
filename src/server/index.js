const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require ('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database:'webapp'
})


app.post('/create', (req, res) => {
    const name = req.body.nameState
    const lastName = req.body.lastNameState
    const login = req.body.loginState
    const password = req.body.passwordState
    const email = req.body.emailState
    const mobile = req.body.mobileState
    const address = req.body.addressState

    db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id,delivery_address) VALUES (?,?,?,?,?,?,?,?)",[name,lastName,login,password,email,mobile,2,address],
        (err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send('Values inserted');
            }
        }
    );
})

app.post('/check', (req, res) => {
    const login = req.body.loginState
    const email = req.body.emailState
    db.query("SELECT * from user WHERE username = ? OR email = ?",[login,email],
        (err,result) => {
        if(err){
            console.log(err)
        }
        else {
            res.send(result);
        }
        })
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

app.get("/getfavorites", (req, res) => {
    db.query("SELECT * FROM product where `User_id` = 10", (err, result) => {
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
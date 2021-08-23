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
    db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id) VALUES (?,?,?,?,?,?,?)",[name,lastName,login,password,email,mobile,1],
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

app.get('/products', (req,res) => {
    db.query("SELECT * FROM product", (err,result) => {
        if (err) {
            console.log(err)
            console.log("suka")
        }
        else {
            res.send(result);
            console.log("JE")
        }
    });
});

app.listen(3001, () => {
    console.log('Port is running on port 3001');
});
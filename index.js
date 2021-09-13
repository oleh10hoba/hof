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


app.post('/create', async(req, res) => {
    const name = req.body.nameState
    const lastName = req.body.lastNameState
    const login = req.body.loginState
    const password = req.body.passwordState
    const email = req.body.emailState
    const mobile = req.body.mobileState

    db.query("SELECT * from user WHERE username = ? OR email = ?",[login,email],
        (err,result) => {
            if(err){
                res.send(err)
            }
            if(result.length!==0) {
                return res.send('Użytkownik już istnieje')
            }
            else{
                db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id) VALUES (?,?,?,?,?,?,?)",[name,lastName,login,password,email,mobile,2],
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
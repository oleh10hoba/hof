const {Router} = require('express')
const router = Router()


router.post('/create', (req, res) => {
    const name = req.body.nameState
    const lastName = req.body.lastNameState
    const login = req.body.loginState
    const password = req.body.passwordState
    const email = req.body.emailState
    const mobile = req.body.mobileState

    db.query("INSERT INTO user (first_name,last_name ,username,passwd,email,mobile,User_Type_id) VALUES (?,?,?,?,?,?,?)",[name,lastName,login,password,email,mobile,2],
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



module.exports = router
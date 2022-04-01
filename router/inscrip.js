const express =require('express')
var session =require('express-session')
const router = express.Router()
const bodyParser =require('body-parser')
const db =require('../BD/database')
let jsonParser = bodyParser.json();
const authcontrollers =require('../controller/Cont_inscrip')
let urlencodedParser = bodyParser.urlencoded({ extended: false });

// routes


router.get('/' ,(req ,res)=>{

    
  
    // res.send("voila la session ")
    res.render('../views/inscrip')
})

router.post("/",urlencodedParser, authcontrollers.register)

module.exports =router;
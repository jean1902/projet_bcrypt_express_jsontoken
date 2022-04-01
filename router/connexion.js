const express =require('express')
var session =require('express-session')
const router = express.Router()
const bodyParser =require('body-parser')
const db =require('../BD/database')
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

// routes


router.get('/connexion' ,(req ,res)=>{
    
    res.render('../views/connexion')
})

module.exports=router
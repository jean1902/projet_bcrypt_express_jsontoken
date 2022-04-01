const express =require('express')
var session =require('express-session')
const router = express.Router()
const bodyParser =require('body-parser')

const db =require('../BD/database')
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

let jwt =require('jsonwebtoken');
let bcrypt = require('bcryptjs');
// routes

let authcontrollers = class insert{

    static register =(req,res)=>{

      
        console.log("req.body",req.body);
          let {nom,email,password,passConfirm} = req.body
        //PassConfirm 
            // verifier si email a deja ete utiliser
        let req_verif_exist_email = ' SELECT email FROM user_session WHERE  email = ?'
        db.query( req_verif_exist_email ,[email], async (err,result) =>{

            if(err){
                console.log(error)
            }
            if(result.length >0){
                return res.render('inscrip',{
                    message: "email deja utilise"
                }) 
            }
           // -----------important ------//
            //verifier si les mot de pass sont les meme
            //  else if( password !== PassConfirm){
            //     return res.render('inscrip',{
            //         message: "pass non identique"
            //     }) 
            // }

                //---------insertion  propre-----------//

        // console.log("req.body",req.body);
        //     let { nom,  email, password} = req.body;
        //     console.log("donnee_du formulaire", req.body);
          
            let sql =
              "INSERT INTO `user_session` (`nom`,  `email`, `password`) VALUES (?,?,?)";
          
              db.query(sql,[nom, email,password],(err, result) => {
                console.log("bonjour ");
                if (err) {
                  console.log("ERREUR", err);
                  // res.send('bonjour')
                } else {
                  console.log("success", result);
                  res.redirect("/");
                }
              }
            ); 


                 //CRYPTE LES DONNEES avec cryptage

          
                 var hashedPassword = await bcrypt.hash(password ,8)
                 console.log(hashedPassword)
        })
       

    
       

     


}   }
module.exports=authcontrollers;
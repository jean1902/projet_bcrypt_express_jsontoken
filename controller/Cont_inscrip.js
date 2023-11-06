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
            let sql ="INSERT INTO `user_session` (`nom`,  `email`, `password`) VALUES (?,?,?)";
        
        let req_verif_exist_email = ' SELECT email FROM user_session WHERE  email = ?'
        
        db.query( req_verif_exist_email ,[email], async (err,result) =>{

            if(result ==''){

              //CRYPTE LES DONNEES avec cryptage avec bcrypt

                  var hashedPassword = await bcrypt.hash(password ,8)
                  console.log(hashedPassword)
 
                  let sql_hash ="INSERT INTO `user_session` set ? ";
              //password= hashedPassword
                  db.query(sql_hash,{nom,email,password:hashedPassword},(err, result) => {
                    console.log("bonjour ");
                    if (err) {
                      console.log("ERREUR hashed", err);
                      // res.send('bonjour')
                    } else {
                      console.log("success hashed", result);
                      res.redirect("/");
                    }
                  }
                ); 
            }
            else{
                console.log('entrer une autre adresse email')
            }
            // if(result.length >0){
            //     return res.render('inscrip',{
            //         message: "email deja utilise"
            //     }) 
            // }
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
          
           
            //   db.query(sql,[nom, email,password],(err, result) => {
            //     console.log("bonjour ");
            //     if (err) {
            //       console.log("ERREUR", err);
            //       // res.send('bonjour')
            //     } else {
            //       console.log("success", result);
            //       res.redirect("/");
            //     }
            //   }
            // ); 


               
   
          
                
        })
       

    
       

     


}   }
module.exports=authcontrollers;

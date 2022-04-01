let mysql = require('mysql');
var db =mysql.createConnection({
    host:'localhost' ,
    user :'root',
    password:'',
    database:"bd_session"
})

db.connect( function (err) {
    if (err) {
      console.log(err);
      res.render('une erreur est survenue');
    } else {
      console.log("Connected!");
     }
    }    
)
module.exports =db;

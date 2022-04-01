const express = require("express");
const session =require('express-session')
const MysqlStore = require('express-mysql-session') (session)
const app = express();

const Port = 1000;
const router =require('./router/inscrip')
const router_db =require('./BD/database')
const bodyParser =require('body-parser')
const router_session_result =require('./router/resultat')
const router_connexion =require('./router/connexion')
 

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/Public", express.static("Public"));
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false })); 
app.use("/", router_session_result);
app.use("/",router_connexion )
app.use(express.json())


// const store =new MysqlStore({})

app.use(session({
    secret:'key that will sign cookie',
    resave: false,
    saveUninitialized:false
}))


app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
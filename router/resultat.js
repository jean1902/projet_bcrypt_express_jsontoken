const express =require('express')
const router = express.Router()

router.get('/resultat' ,(req ,res)=>{

    res.render('../views/resultat')
  
})

module.exports=router;

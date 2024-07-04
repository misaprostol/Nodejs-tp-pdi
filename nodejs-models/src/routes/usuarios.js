const express = require('express');
const router = express.Router()

// rutas

router.get("/", (req, res) =>{
    res.send("Menú para usuarios")
   }
  )

router.get("/config", (req, res) =>{
    res.send("Menú de configuraciones para usuarios")
   }
  )
  
router.get("/ayudad", (req, res) =>{
    res.send("Menú de ayuda para usuarios")
   }
  )
module.exports = router
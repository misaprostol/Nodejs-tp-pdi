const express = require('express');
const router = express.Router()

// Importamos controlador
const guardadosController = require('../controllers/guardadosController')

// rutas

router.get("/:id", guardadosController.obtenerGuardadosPorId)

router.get("/ansiedad", (req, res) =>{
    res.send("Menú para meditaciones para la ansiedad")
   }
  )

router.get("/panico", (req, res) =>{
    res.send("Menú para meditaciones para el pánico")
   }
  )

router.get("/estres", (req, res) =>{
    res.send("Menú para meditaciones para el estrés")
   }
  )

router.get("/insomnio", (req, res) =>{
    res.send("Menú para meditaciones para el insomnio")
   }
  )
  
module.exports = router
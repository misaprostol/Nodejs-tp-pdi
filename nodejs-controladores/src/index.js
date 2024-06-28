const express = require('express');
const app = express();
const promiseQuery = require('../src/config/db.js')

app.listen(3000, () => {
 console.log("La app funciona")
})

// Referencia a las rutas

const usuarios = require('./routes/usuarios.js')
app.use("/usuarios", usuarios)

const meditaciones = require('./routes/meditaciones.js')
app.use("/meditaciones", meditaciones)



app.get("/", (req, res) =>{
 res.send("Este es el menú principal de Mediarte")
})
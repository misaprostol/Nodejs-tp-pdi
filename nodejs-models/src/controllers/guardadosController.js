const Guardado = require('../models/guardados.js');

// Controlador de guardados
const obtener = async (req, res) => {
    try {
      const id = req.params.id ;
      const guardados = await Guardado.findByPk(id)

      if (!guardados) {
        return res.status(404).json({ error: "Guardado no encontrado" });
      }
        
      return res.status(200).json({message: guardados}) 
    } catch (error) {
      return res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports = {
    obtener
}
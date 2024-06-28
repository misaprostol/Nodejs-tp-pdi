const promiseQuery = require('../config/db')

// Controlador de guardados

const obtenerGuardadosPorId = async (req, res) => {
  try {
    const query = "SELECT * FROM guardados where id = ?";

    const guardados =  await promiseQuery(query, [req.params.id])
    res.json(guardados)
  } catch (error) {
    throw err
  }
}

module.exports = {
  obtenerGuardadosPorId,
}
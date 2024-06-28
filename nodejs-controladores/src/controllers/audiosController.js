const promiseQuery = require('../config/db')

// Controlador de audios

const obtenerTodos = async (req, res) => {
  try {
    const query = "SELECT * FROM audios";

    const audios =  await promiseQuery(query)
    res.json(audios)
  } catch (error) {
    throw err
  }
}

const obtener = async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM audios WHERE id = ?"

    const audio = await promiseQuery(query, [id])
    res.json(audio) 
  } catch (error) {
    throw err
  }
}

const crear = async (req, res) => {
  try {
    const { nombre, tipo_meditacion, cant_reprod } = req.body
    const query = "INSERT INTO audios (nombre, tipo_meditacion, cant_reprod) VALUES (?, ?)"

    await promiseQuery(query, [nombre, tipo_meditacion, cant_reprod])
    res.json({message: "audio creado!!!"})
  } catch (error) {
    throw error
  }
}

const actualizar = async (req, res) => {
  try {
    const {nombre, tipo_meditacion, cant_reprod} = req.body
    const query = "UPDATE audios SET nombre = ?, contrasena = ? WHERE id = ?"

    await promiseQuery(query, [nombre, tipo_meditacion, cant_reprod, req.params.id])
    res.json({message: "audio actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const query = "DELETE FROM audios WHERE id = ?"

    await promiseQuery(query, [req.params.id])
    res.json({message: "audio borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerTodos,
  obtener,
  crear,
  actualizar,
  borrar
}
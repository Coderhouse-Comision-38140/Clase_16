/* Importamos nuestras dependencias y librerias */
const { options } = require("./options/mysql.js")
const knex = require("knex")(options)

/* Funcionalidades */

// Array de datos
const cars = [
    {name: "Audi", price: 1000 },
    {name: "Renault", price: 400 },
    {name: "Fiat", price: 700 },
    {name: "Hummer", price: 1000 },
    {name: "Toyota", price: 750 }
]

// Insertar datos
knex("cars").insert(cars)
    .then(() => console.log("Datos insertados OK"))
    .catch(() => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })
/* Importamos nuestras dependencias y librerias */
const { options } = require("./options/mysql.js")
const knex = require("knex")(options)

/* Creamos una nueva tabla con la funcion createTable() del esquena Knex.js y definimos el esquema para que contenga tres columnas: id, precios, nombre */

knex.schema.createTable("cars", table => {
    table.increments("id")
    table.string("name")
    table.integer("price")
})
    .then(() => console.log("Table creada con exito"))
    .catch((err) => { console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    })
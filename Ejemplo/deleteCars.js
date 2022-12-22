/* Importamos nuestras dependencias */
const { options } = require("./options/mysql.js")
const knex = require("knex")(options)

/* Funcionalidades */
knex.from("cars").del()
    .then(() => console.log("Todos los autos han sido eliminados"))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })
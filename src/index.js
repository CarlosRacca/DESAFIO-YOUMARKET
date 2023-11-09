// Importación de Express
const express = require('express')
const app = express()

// Se define el puerto
const port = 3000

app.use(express.json())

// Se habilita el archivo router.js, donde se definen las rutas
app.use('/', require('./router'))

// Se levanta el servidor
app.listen(port, () => {
    console.log('Server is running in port', port)
})

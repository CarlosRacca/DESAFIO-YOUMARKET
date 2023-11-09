const express = require('express')
const router = express.Router()

// En esta ruta hacemos el chequeo de los nucleótidos recibidos por body
router.get('/scan', (req, res) => {

    let {secuencia} = req.body

    // Se cuenta la cantidad de caracteres ingresados
    let cantidad = secuencia.length
    // Las secuencias son de N*N esto significa que todas las secuencias recibidas van a tener su respectiva raiz cuadrada
    // Se obtiene la raiz cuadrada
    let raizCuadrada = Math.sqrt(cantidad)
    let array = []

    // En este for, completo el array previamente definido para hacer el chequeo correspondiente de los caracteres de la diagonal principal
    for(let i = 1; i <= raizCuadrada; i++){

        let count = raizCuadrada - 1

        array.push(secuencia[count * i])
    }

    let mutante = false

    // En este for chequeo si en la diagonal principal hay al menos un nucleótido repetido en número par
    for(let i = 0; i < array.length; i++){
        let el = array[i]

        let count = 0

        array.forEach(comparado => {
            if(el === comparado){
                count++
            }
        })

        // Si el número es par, cambio la variable mutante a TRUE
        if(count % 2 === 0){
            mutante = true
        }
    }

    // Chequeo la variable y envío la respuesta
    if(mutante){
        res.send("Es mutante")
    }else{
        res.send("No es mutante")
    }
})


module.exports = router
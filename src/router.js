const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('azulita')
})

router.get('/scan', (req, res) => {

    let {secuencia} = req.body

    let cantidad = secuencia.length
    let raizCuadrada = Math.sqrt(cantidad)
    let array = []

    for(let i = 1; i <= raizCuadrada; i++){

        let count = raizCuadrada - 1

        array.push(secuencia[count * i])
    }

    let mutante = false

    for(let i = 0; i < array.length; i++){
        let el = array[i]

        let count = 0

        array.forEach(comparado => {
            if(el === comparado){
                count++
            }
        })

        if(count % 2 === 0){
            mutante = true
        }
    }

    if(mutante){
        res.send("Es mutante")
    }else{
        res.send("No es mutante")
    }
})


module.exports = router
const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./router'))

app.listen(3000, () => {
    // console.log('server is running in port', 3000)
})

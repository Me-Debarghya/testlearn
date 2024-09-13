
const express = require('express')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'database')))

app.get('/', (req, res) => {
    res.send('Hello World! from express test app for learnemy')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app
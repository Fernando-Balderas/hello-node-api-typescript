import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    return console.log(`Server listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/shorlak', (req, res) => {
    res.send('shorlak op gg')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

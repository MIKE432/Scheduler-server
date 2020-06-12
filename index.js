const
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 3000,
    products = require("./mockup-data")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    console.log(products)
    res.json(products)
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
const
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ info: "Node.js, Express, and Postgres"})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
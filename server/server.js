const express = require('express')
const app = express()
const port = process.env.PORT || 3500;

console.log(port);

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"] })
})

app.listen(port, () => {console.log("Server iniciado en el puerto " + port)})
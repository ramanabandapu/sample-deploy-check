const express = require("express");

const app = express();


app.use(express.json())


app.get("/", (req,res) => {
    res.send("Hello from Backend!")
})

app.listen(8000, () => {
    console.log("Listening to PORT 8000")
})



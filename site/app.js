const express = require("express");
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(3030, () => {
    console.log("servidor dtech funcionando ok")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))

});
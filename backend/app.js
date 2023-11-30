const express =  require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send("welcome to the mean adress book");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());

app.listen(PORT, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
})

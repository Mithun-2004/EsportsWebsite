//Make sure you install all necessary modules using vs code terminal, which are express, path, swig,body-parser, and mongoose.
//Also make sure that you are connected to Mongodb.

const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();


app.use("/static", express.static("static"));
app.use(express.urlencoded());

var cons = require('consolidate');


app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



const bodyparser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
};



app.get('/', (req, res) => {
    const params = {}
    res.status(200).render("index.html", params);
});





const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String
});

const feedback = mongoose.model('feedback', feedbackSchema);

app.post('/submit', (req, res) => {
    var myData = new feedback(req.body);
    myData.save().then(() => {
        res.render('index.html')
    }).catch(() => {
        res.status(400).send("item not saved to the databse")
    })
});





app.listen(process.env.port, () => {
    console.log(`app started successfully.`)
});

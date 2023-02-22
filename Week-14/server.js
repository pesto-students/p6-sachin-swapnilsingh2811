const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/practiceDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) console.log(error);
    else console.log("successfully connected");
})

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
routes(app);

app.listen(8080, () => {
    console.log("Server is running at PORT 8080");
})

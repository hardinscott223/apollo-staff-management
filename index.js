const express = require('express');
const mongoose = require('mongoose');

const app = express();

let mongoURL = "mongodb+srv://arkarphyo:test1234@cluster0.44naqvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURL).then(() =>{
    console.log('DB is connected');
    app.listen(port, ()=>{
        console.log("Server is connecting at port 3000");
    })
}).catch(e => {
    console.log(e);
})

const port = 3000;

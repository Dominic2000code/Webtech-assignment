const express = require('express')
const path  = require('path');
const app = express()

app.set('view engine',"ejs")

app.use('/', require('./routes/students'));
app.use(express.static(__dirname + '/public'));






const Port = 2000
app.listen(Port,function(){
    console.log(`Server is listening on port ${Port}`)
})




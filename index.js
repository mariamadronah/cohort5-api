const express = require('express');
const app = express();
const personroutes = require('./routes/person.route')

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

app.use ('/info',)

//spin up express server 
app.listen(4000, ()=>{
    console.log('server running');
})


//MVC(pattern )=>model,view,controller
//model-> data ,storage and structure
//view-> presentation of the data- requesting and displaying data
//controllers -> handle business logic 
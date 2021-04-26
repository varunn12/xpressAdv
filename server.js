const { response } = require('express');
const express=  require('express')
const path=require('path')

//Call the  function
const app=  express();

// To serve static files such as images, 
//CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

//  This  is a middleware. Everytime app.use--  it is a middle ware
app.use(express.static('static'))


//Define the port to  listen to
const port=3000

var arr=[3000,2000]

// listen to the port
var server= app.listen(port,()=>{
    console.log(`server is listening ${port}`)
    console.log('server  is lisetning  to '+port)
})

//Define the  route which takes a call back
app.get('/home',((req,res)=>{
    res.sendFile(path.join(__dirname,'./static/index.html'));
//res.send("This is my  home  :)"+arr)
})
)
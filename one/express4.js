const express= require('express')
const word= require('./module.js')
const app= express()
const PORT=8080
const path=require('path');
const middle2=function(req,res,next)
 {
    console.log("Welcome");
    next();
 }
app.get("/", function (req, res) { 
    const html = ` 
    <!DOCTYPE html> 
    <html> 
      <head> 
        <title>Home Page</title> 
      </head> 
      <body>
     
        <h1><font color ="pink"> World Best Travel Website!</font> </h1> 
        <table  align="center">
        <td>
        <th>
        <a href="/">Home_Page</a></th></td>&nbsp;&nbsp;
        <td>
        <th>
      
        <a href="/Travel_Destination">Travel_Destination</a></th></td>&nbsp;&nbsp;
        <td>
        <th>
        <a href="/Travel_Package">Travel_Package</a></th></td>&nbsp;&nbsp;
        <td>
        <th>
        <a href="/Contact_Us">Contact_Us</a></th></td>&nbsp;&nbsp;
        <td>
        <th>
        <a href="/travel_insurance">travel_insurance</a></th></td>&nbsp;&nbsp;
      
         </table>
      </body> 
    </html> 
  `; 

  res.send(html); 

});

app.get('/',(req,res)=>{
    res.send(word.Home_Page())
})
app.get('/Travel_Destination',(req,res)=>
{
 res.send(word.Travel_Destination())
})


app.get('/travel_package',middle2,(req,res)=>
{
    
    res.sendFile(path.join(__dirname,'/travelpackage.html'))
})

app.get('/travel_insurance',(req,res)=>
{
    
    res.sendFile(path.join(__dirname,'/travelinsurance.html'))
})
app.get('/contact_us',(req,res)=>
{
 res.send("Contact Number :6284589989 , Email = palaksingh2403@gmail.com");
})

app.listen(PORT,()=>{
    console.log('example app listening on port ${port}');
})





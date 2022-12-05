const { request, response } = require('express');
const express = require('express');
const apka = express();


apka.get('/',(request,response)=>{
    response.send("Dziala");
})

apka.listen(3001, ()=>{
    console.log("działa");
});
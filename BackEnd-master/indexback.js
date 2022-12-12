const{select_pedido} = require("./connection")
const{select_cliente} = require("./connection")
const express = require("express");

const app = express() ;



 app.get('/', function (req, res) {
    console.log('opok');

 const rows = select_cliente(req, res);
 console.log(rows);
 res.render('index',{rows});
 })



 app.listen(3000, function(){
    console.log('ta funcionando');
});
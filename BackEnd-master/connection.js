const oracledb = require('oracledb');
const { Sequelize } = require('sequelize');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function select_pedido () {
    let con;

    try{
        con = await oracledb.getConnection({
            user: "Lopo",
            password: "senha",
            connectionString: "localhost/XE"
        });
        const data = await con.execute(
            `select * from V_CONSULTA_PEDIDO` 
        );
        console.log('tocomsono');
        app.get('/', function (req, res) {

            res.send(data.rows)
          })
    } catch (err){
        console.log(err);
    }

}

const express = require("express");

const app = express() ;


select_p = select_pedido();



app.listen(3000, function(){
    console.log('ta funcionando');
});


module.exports = {select_pedido}
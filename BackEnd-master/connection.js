const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function express () {
    let con;

    try{
        con = await oracledb.getConnection({
            user: "lopo2"
            password: "senha"
            connectionString: ""
        });
        const data = await con.execute(
            `` 
        );
        console.log(data.rows);

    } catch (err){
        console.log(err);
    }
    
}

module.exports = sequelize
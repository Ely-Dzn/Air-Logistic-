const app = express()
const BackEndMaster = require('./connection')

BackEndMaster.authenticate()
.then(()=>{
  console.log('conectou ao banco');
})
.catch(err=>{
  console.log('houve um erro');
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function(){
    console.log('ta funcionando');
});

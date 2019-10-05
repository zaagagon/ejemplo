const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
//const url = 'mongodb://localhost/mibase'

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  
    if (err) {
    throw err;
    //return
    }
    else {console.log('Conectado exitosamente al servidor MONGO')}
  //...
})

//const db = client.db('kenel')
//const collection = db.collection('dogs')
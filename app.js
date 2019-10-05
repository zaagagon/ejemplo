const MongoClient = require ( ' mongodb ' ) . MongoClient ;   
const afirmar = requerir ( ' afirmar ' ) ;   
 
//  URL de conexión
const url = ' mongodb: // localhost: 27017 ' ;   
 
//  Nombre de la base de datos
const dbName = ' ejemplo ' ;   
 
//  Use el método de conexión para conectarse al servidor
MongoClient . connect ( url , function ( err , client ) {   
  valer . igual ( nulo ,  err ) ;
  consola . log ( " Conectado con éxito al servidor " ) ;
 
  const db = cliente . db ( dbName ) ;   
 
  cliente . cerrar ( ) ;
} ) ;
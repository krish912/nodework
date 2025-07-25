const {MongoClient} = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;
const url= 'mongodb://localhost:27017';
const connection= new MongoClient(url);
const databaseName="admin"
async function dbConnect()
{
    let result = await connection.connect(); //connection with mongodb
    let db= result.db(databaseName);   // data base connection
     return db;
    //  return db.collection("products")
}
 
module.exports=dbConnect;
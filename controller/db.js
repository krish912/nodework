const { MongoClient } = require("mongodb")
const url='mongodb+srv://codeboard09:<password>@petwardrobe.kt1perb.mongodb.net/?retryWrites=true&w=majority&appName=PetWardrobe'
const connection= new MongoClient(url)
const databaseName="sample_mflix"
async function dbConnect(){
    let result= await connection.connect();
    let db=result.db(databaseName);
    return db;
}

module.exports=dbConnect;
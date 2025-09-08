//i paused the database coonectivity for live 

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const dbName = 'local';
const Stu = require('../data/studentdata.json');
const findingRec = async (req,res)=>{
    //await client.connect();
    //console.log('Connected successfully to server');
    //const db = client.db(dbName);
    // console.log("db Connected successfully to server");
    // const collection = db.collection('studentData');
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
      try {
        // Send the student data directly from JSON
        res.send({
            status: 200,
            listofuser: Stu
        });
    } catch (e) {
        // Handle errors gracefully
        res.status(500).send({
            status: 500,
            message: e.message
        });
}
}
module.exports = {
    findingRec
}

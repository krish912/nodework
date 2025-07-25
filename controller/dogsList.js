var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = 'local';
const dogsData=require('../data/dogsData.json');
const fs=require('fs');
const { message } = require('statuses');
const dogList= async(req,res)=>{
    try{
        // await client.connect();
        // console.log("Api starting")
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // console.log("db Connected successfully to server");
        // const collection = db.collection('dogsData');
        // const findResult = await collection.find({}).toArray();
       
    // let requestdata=req.body;
    // console.log(req.body);
    //  dogsData.push(requestdata);
    // console.log("dogs data pushed");
    //   console("result is",findResult)
    
         fs.readFile('./data/dogsData.json','utf8',function (err,data){
             console.log("working 3 and data is ",data);
             if (err) throw err;
             console.log("saved");
             res.send({
                     status:200,
                     message: JSON.parse(data)
           });
        });

    }

    catch(e){
        res.send({
            status:404,
            message:e
        })
    }
}


const finddogList= async(req,res)=>{
    try{
        // await client.connect();
        // console.log("Api starting")
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // console.log("db Connected successfully to server");
        // const collection = db.collection('dogsData');
        // const findResult = await collection.find({}).toArray();
       
    // let requestdata=req.body;
    // console.log(req.body);
    //  dogsData.push(requestdata);
    // console.log("dogs data pushed");
    //   console("result is",findResult)
    
         fs.readFile('./data/dogsData.json','utf8',function (err,data){
             console.log("working 3 and data is ",data.length);
             let array1 = data.split(',');
            console.log(JSON.parse(array1));
             let datanew=JSON.parse(array1)
             console.log("working 3 and data is ",req.params.id);
             //let datanew=JSON.parse(JSON.stringify(data))
            // console.log("working 3 and data is ",typeof(datanew) + datanew);
             //data filter req.params.shopId
             if(datanew)
                 {
              const databyshop=datanew.filter(pet => pet.shopId == req.params.id);
            //data.find(pet => pet.shopId === req.params.id);
             if (err) throw err;
             console.log("saved");
                
             res.send({
                     status:200,
                     message: databyshop
           })}
        });

    }

    catch(e){
        res.send({
            status:404,
            message:e
        })
    }
}
const dogbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const petId = parseInt(id);
        
        // Assuming dogsData is an array containing pet objects
        const pet = dogsData.find(pet => pet.id === petId);
    
        if (pet) {
            // Pet found
            res.json({
                status: 200,
                message: pet
            });
        } else {
            // Pet not found
            res.status(404).json({ error: 'Pet not found' });
        }
    } catch (e) {
        // Error occurred
        console.error('Error fetching pet details:', e.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}



module.exports={dogList, dogbyid,finddogList}
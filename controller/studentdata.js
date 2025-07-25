const fs=require('fs');
const Student=require('../data/studentdata.json');
const { json } = require('express');
const studentdata= async (req,res)=>{
    try{

        // fs.readFile("../db/studentdata.json",function(err,data){
        //     if(err) throw err;
        //     console.log("data is ",data);
        //     const student=JSON.parse(data);
        //     res.send({
        //         status:200,
        //         message:student
        //     });
        //     console.log(student);//print student


        // });


        let requestdata=req.body;
        console.log("body is: ",req.body);
        Student.push(requestdata);
        console.log("saved");
        // res.send({
        //     status:"data saved succesfully",
        //     listofstudent:req.body
        // });
        fs.writeFile('./data/studentdata.json', Student , function (err){
            if(err) throw err;
            console.log("saved");
            res.send({
                status:"data saved succesfully",
                listofstudent:req.body
            });

        });
    }
    catch(err){
        res.send({
            status:300,
            message:"something went wrong on server"
        });
    }
}

module.exports={studentdata};
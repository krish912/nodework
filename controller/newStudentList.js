const userlist=require('../models/userlist')
var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'krish029',
  database : 'sys'
});
con.connect(function(err) {
    if (err) throw err;
    //var sql = "INSERT INTO stuentdata (id, name) VALUES ('1', 'krish')";
  
  });
const studentList=async(req,res)=>{
    try
    {
      
        
        
          con.query("select * from stuentdata", function (err, result, fields) {
            if (err) throw err;
            console.log("result of SQLdatabase is:",result);
            res.send({
              status:200,
              listofuser:result
          });
          });
        console.log(req.params.id);
        
   
}
catch(err){
    res.send({
        status:err,
        message:"something went wrong on server"
    });
}
}


const PoststudentList=async(req,res)=>{
    try
    {
      
        

          var sql = "INSERT INTO stuentdata (id,name,class) VALUES ("+req.body.id+","+ JSON.stringify(req.body.name)+","+ req.body.age +")";
            con.query(sql, function (err, result, fields) {
              if (err) throw err;
              console.log("result of SQLdatabase is:",result);
              res.send({
                status:200,
                listofuser:result
            });
            });
         
}
catch(err){
    res.send({
        status:err,
        message:"something went wrong on server on post"
    });
}
}


module.exports={studentList,PoststudentList};
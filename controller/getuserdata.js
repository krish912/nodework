const usrData=require('../data/userdata1.json')
const fs=require('fs');
const SearchuserData= async (req,res)=>{
    try{
    console.log("Api works bade se")
//console.log(req.body.email);
console.log(req.body);
// let result=usrData.map((item)=>{
    
//       if(item.email==req.body.email)
//        {
//         return true
//        }
// })
console.log("api callled");
let result=usrData.filter((item)=> item.email==req.body.email)
let result1=usrData.filter((item)=>item.password==req.body.password)
//let result=usrData.filter("krish")
console.log("result is ",result);
console.log("result1 is ",result1);
 if(result==NULL   )
 {
res.send({
    status:200,
    message:result
});
}
else
{
    res.send({
        status:404,
        message:"not successfull"
    }); 
}
 

// fs.readFileSync('./db/userdata1.json', function(err,data){
//     if(err) throw err;
//     console.log("data is ",data);
//     const getdata=JSON.parse(data);
//     res.send({
//         status:200,
//         message:usrData
//     });
//     console.log(usrData);//print student
// });

    }
    catch(err){

    }
}

module.exports={SearchuserData};
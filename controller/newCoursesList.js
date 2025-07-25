const fs=require('fs');
const Crs=require('../data/coursedata.json')
const coursesList=async(req,res)=>{
    try
    {
        let requestdata=req.body;
        console.log(req.body);
        Crs.push(requestdata);
        fs.writeFileSync('./data/coursedata.json', JSON.stringify(Crs), function (err) {
            if (err) throw err;
            console.log('Saved!');
            res.send({
                status:"data saved successfully",
                listofuser:req.body
            });
          }); 
   
}
catch(err){
    res.send({
        status:err,
        message:"something went wrong on server"
    });
}
}

module.exports={coursesList};
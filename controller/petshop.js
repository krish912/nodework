const fs=require('fs');
const petshopdata = require('../data/petshop.json');
const dogsData=require('../data/dogsData.json');
const addpetShop= async(req,res)=>{
    try
    {
        let newUser= { ...req.body, id: users.length + 1 };
        console.log(req.body);
        petshopdata.push(newUser);
        fs.writeFileSync('./data/petshop.json', JSON.stringify(petshopdata), function (err) {
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
        message:"something went wrong on addpetshop"
    });
}

}

const getpetshop= async(req,res)=>{
    try{
        fs.readFile('./data/petshop.json','utf8',function (err,data){
           
            if (err) throw err;
            console.log("saved");
            res.send({
                    status:200,
                    message: JSON.parse(data)
          });
       });

    }
    catch(err){
        res.send({
            status:err,
            message:"something went wrong on getpetshop"
        });

    }
}

const petShopById=async(req,res)=>{
    try{
        const { id } = req.params;
        const petShopId = parseInt(id);
        const shop = petshopdata.find(s => s.id === petShopId);

        if (shop) {
            // Pet found
            res.json({
                status: 200,
                message: shop
            });
        } else {
            // Pet not found
            res.status(404).json({ error: 'shop not found' });
        }
    
    }
    catch(err){

    }
}
module.exports={addpetShop,getpetshop,petShopById}
const express=require('express');
const app= express();
const cors=require('cors');
const myrouter=require('./router/my')
app.use(cors());
app.use(express.json());
app.use("/images", express.static('images'));
//app.use(express.static('public'));

app.use("/",myrouter);  
const PORT = process.env.PORT || 8000;
app.listen(PORT,(error)=>{
    if(!error)
        console.log("successfully launched on 8000 port");
    else                
        console.log("error occured");
});
module.exports=app;

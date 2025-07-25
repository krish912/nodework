
const fs=require('fs');
const Urs=require('../data/userdata1.json')
const nodemailer = require("nodemailer");
const pushusers=async(req,res)=>{
    try
    {
      const { email, password } = req.body;
  const userName= email.replace(/\d+/g, '');
  console.log("username after filtere number",userName);
  const substringToRemove = '@gmail.com';
  const resultString = userName.replace(substringToRemove, '');
 
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'arorakrish912@gmail.com',
          pass: 'loxwtgbiaxkzxcwl'
        }
      });
  
      var mailOptions = {
        from: 'arorakrish912@gmail.com',
        to: email,
        subject:'welcome to Adopet!',
        html: `<p>Hello ${resultString},</p>
               <p>We are delighted to welcome you to Adopet, your trusted platform for pet adoption. It is a pleasure to have you join our community.</p>
               <p>Explore our platform and find your new furry friend today!</p>
               
               <p>Should you have any questions or need assistance, please do not hesitate to contact our support team. We are here to help you every step of the way.</p>
  
               <p>Thank you for choosing Adopet. We look forward to helping you find your new furry friend.</p>
  
             <p>Best regards,<br>The Adopet Team</p>
  
  `
      };
      console.log("ok")
        transporter.sendMail(mailOptions, function(error, info){
          console.log("ok1")
        if (error) {
          console.log(error);
          alert("error in email")
        } else {
          alert("email send")
          console.log('Email sent after verification: ' + info.response);
        }
      });
    
        let requestdata=req.body;
        console.log(req.body);
        console.log("email is",email)
        
        Urs.push(requestdata);
        fs.writeFile('./data/userdata1.json', JSON.stringify(Urs), function (err) {
         
            if (err) throw err;
            console.log('Saved!');
            res.send({
                status:"data saved successfully in userdata1",
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


module.exports={pushusers};
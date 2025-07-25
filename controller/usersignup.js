
const fs=require('fs');
const Urs=require('../data/userdata1.json')
const nodemailer = require("nodemailer");
const pushusers=async(req,res)=>{
  try {
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
   
    
    // Search for user data by email and password
    //const userData = usrData.find((user) => user.email === email && user.password === password);

     
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent after verification: ' + info.response);
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
      });

      
      // User found, send success response
    //   res.send({
    //     status:200,
    //     success:true,
    //     message:"user found",
         
        
    // });
    
     
  } catch (err) {
    console.error('Error searching user data:', err);
    res.status(500).json({
      status: 500,
      message: 'Internal server error',
    });
  }
}


module.exports={pushusers};
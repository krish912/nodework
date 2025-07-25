const nodemailer = require("nodemailer");

const contactByUser = async (req, res) => {
    
        const { name, email, message } = req.body;
        console.log(name,email,message)
        console.log("body:",req.body)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'arorakrish912@gmail.com',
              pass: 'loxwtgbiaxkzxcwl'
            }
          });
       console.log("email in contact by user is",email)
          var mailOptions = {
            from: 'arorakrish912@gmail.com',
            to: 'arorakrish912@gmail.com',
            subject: `Contact Form Submission from ${name},email sent by ${email}`,
            text: message
          };
          var mailOptionsToUser = {
            from: 'arorakrish912@gmail.com',
            to: email,
            subject: "ADOPET",
            html:`<h2>Thank You for Your contacting us ${name}!</h2>
            <p>We appreciate you taking the time to share your thoughts with us.</p>
            <p>Your feedback helps us improve and serve you better.</p>
            <p>Have a wonderful day!</p>`
          };


       



          try {
            transporter.sendMail(mailOptionsToUser, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent after verification to User: ' + info.response);}
              });

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent after verification: ' + info.response);}
              });
        } catch (error) {
            res.status(500).send('Failed to send message');
        }

}

module.exports={contactByUser};
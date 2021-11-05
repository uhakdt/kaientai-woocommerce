var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL,
		pass: process.env.GMAILPASS
	}
});


const SendEmailToKaientai = (dataMain) => {
  const mailOptionsToTeam = {
    from: process.env.GMAIL,
    to: 'uhakdt@gmail.com, mierdluffy@gmail.com',
    subject: 'KLF New Order! 😜',
    text: `Order Details:
    ${dataMain}
    `
  };
  transporter.sendMail(mailOptionsToTeam, function(err, info) {
    if(err){
      console.log(err);
    } else {
      console.log('Email has been sent to Team!');
    }
  });
}

exports.SendEmailToKaientai = SendEmailToKaientai;

const nodemailer = require("nodemailer");

const createTrans = () => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9257cc519752ab",
          pass: "aa5e7f893183c8"
        }
      });
    return transport;
}


const sendMail = async (message) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: `${message.email}`, // sender address
        to: "dtech-c80eb5@inbox.mailtrap.io", // list of receivers
        subject:`Mensaje de ${message.email}: ${message.subject}`, // Subject line
        text:`${message.message}`, // html body
        
    })
    console.log("Message recived: %s", info.messageId);

    return
}

exports.sendMail =  (message) => sendMail(message)
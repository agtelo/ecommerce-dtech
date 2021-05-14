const nodemailer = require("nodemailer");


const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        
        auth: {
        user: "dtech.becommerce21@gmail.com",
        pass: "bsvulfaekgxgufqf"
    }
    });
    return transport;
}


const sendMail = async (user) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"DTECH 🚀" <dtech.becommerce21@gmail.com>', // sender address
        to: `${user.email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        //html: `Hola ${user.firstName} Bienevenido a DTECH`, // html body
        html : { path: 'views/templates/index.html' }
    })
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail =  (user) => sendMail(user)
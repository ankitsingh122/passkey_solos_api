import nodemailer from 'nodemailer'


const config = () => {
    return {
        host: process.env.SMTP_HOST || '',
        port: process.env.SMTP_PORT || '',
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USERNAME || '',
            pass: process.env.SMTP_PASSWORD || '',
        }
    }
}

export const sendEmail = async (from: any, subject: string, to: any, template: any) => {
    //@ts-ignore
    let transporter = nodemailer.createTransport(config());
    const response = await transporter.sendMail({
        from: { name: "Solos", address: from }, // sender address
        to, // list of receivers
        subject, // Subject line
        html: template, // html body
    })
    return response;
}
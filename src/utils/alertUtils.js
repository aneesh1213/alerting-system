import nodemailer from 'nodemailer';
import FailedRequest from '../models/FailedRequest.js';


const ALERT_THRESHOLD = parseInt(process.env.ALERT_THRESHOLD, 10) || 5;
const TIME_WINDOW = parseInt(process.env.TIME_WINDOW, 10);

export async function trackFailedMails(ip){
    const now = new Date();
    const windowStart = new Date(now - TIME_WINDOW*60000);

    const failedAttempts = await FailedRequest.find({
        ip, 
        timestamp:{
            $gte: windowStart
        }
    })

    return failedAttempts.length >= ALERT_THRESHOLD;
}


export function sendEmailAlert(ip){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Alert ! : Excessive failed login attempts from ${ip}`,
        text: `The ip address ${ip} has exceded failed request threshold`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log('error sending mail ', err);
        }
        else{
            console.log('mail sent ', info.response)
        }
    });
}
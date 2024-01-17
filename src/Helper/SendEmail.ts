import nodemailer from 'nodemailer'
import dotenv from 'dotenv'


dotenv.config();

const sendMail = (email:String,mailSubject:String,body:String) => {

    
        const mailData:any = {
            from : process.env.MYEMAIL,
            to : email,
            subject : mailSubject,
            text : body
        }

        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : process.env.MYEMAIL,
                pass : process.env.MYPASS||""
            }
        })


        transporter.sendMail(mailData,async(err,info)=>{
            if(err){
                console.log(err) ;
                return false ;
            }
            else{
                console.log("Mail sent")
                return true ;   
            }
        })

        return true ;
}


export {sendMail};
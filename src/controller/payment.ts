import  {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/users';
import { v4 as uuidv4 } from 'uuid';
import { sendMail } from '../Helper/SendEmail';


interface recipentdata{

    password:string;
    transfer_money:number;
    recipent_username:string;

}

const generateUniqueId = ()=>{
    const v4options = {
    random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
    ],
    };
    return  uuidv4(v4options); 
}


const payment = async (req:Request,res:Response)=>{

    const recipent:recipentdata = req.body;

    const user = await User.findById(req.id);
    if (!user) {
        res.status(400).send('Invalid user ID');
        return;
    }


    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        res.status(400).send('Invalid password');
        return;
    }

    
    const sender = user;
    const receiver = await User.findOne({ username: recipent.recipent_username });
    
    if (!sender || !receiver) {
        res.status(400).send('Invalid sender or receiver');
        return;
    }
    
    if (sender.wallet < recipent.transfer_money) {
        res.status(400).send('Insufficient balance');
        return;
    }

    try {
        sender.wallet -= recipent.transfer_money;
        receiver.wallet += recipent.transfer_money;
        
        const sendertransactiondata = {
            id: generateUniqueId(),
            amount: -recipent.transfer_money,
            timestamp: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
        };
        const receivertransactiondata = {
            id: generateUniqueId(),
            amount: recipent.transfer_money,
            timestamp: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
        };
    
        sender.transition.push(sendertransactiondata);
        receiver.transition.push(receivertransactiondata);
    
        
        
        await sender.save();
        await receiver.save();

        sendMail(sender.email,'debit',` your account is debited with Rs. ${recipent.transfer_money} amount on ${sendertransactiondata.timestamp}`);
        sendMail(receiver.email,'credit',` your account is credited with Rs. ${recipent.transfer_money} amount on ${receivertransactiondata.timestamp}`);
 
    
        console.log('payment done');
        
        res.send({
            message:"transition successful"
        });
        
    } catch (error) {
        res.send({
            message:"transition failed"
        })
    }
    
}

export {payment};
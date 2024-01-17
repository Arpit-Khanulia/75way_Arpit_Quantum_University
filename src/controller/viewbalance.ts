import  {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/users';


const viewbalance = async (req:Request,res:Response)=>{


    
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

    res.status(200).json({ balance: user.wallet });

};

    



export {viewbalance};
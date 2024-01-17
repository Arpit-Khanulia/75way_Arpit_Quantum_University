import  {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken'
import * as dotenv from 'dotenv';
import { User } from '../model/users';


dotenv.config();

const accessSecret: string = process.env.ACCESS_SECRET || '';


// login functionality

interface logindetails {
    
    username:string,
    email:string
    password:string,
    
}


const login = async (req: Request, res: Response) => {
    const { username, password }: logindetails = req.body;
    
    // Validate user input
    if (!username || !password) {
        res.status(400).send('Missing username or password');
        return;
    }

    // Find user in the database
    const user = await User.findOne({ username });
    if (!user) {
        res.status(400).send('User not found');
        return;
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        res.status(400).send('Invalid password');
        return;
    }


    const accessToken = sign({
        id:user._id
    },accessSecret,{expiresIn:'30m'});


    res.cookie('accessToken', accessToken, { httpOnly: true });

    // User is authenticated
    console.log('user logged in');
    
    res.status(200).json(user);
};


export {login};

import { Request,Response } from "express"
import { User } from '../model/users';



const lasthour = async (req:Request,res:Response)=>{

    try {

        const user = await User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {

            const timenow = new Date (new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})).getTime();

            const timethen:any = new Date(transaction.timestamp).getTime();

            const differ:any = timenow - timethen;

            return differ <= 60*60*1000;

        });
        res.send(lastDayTransactions);
    } catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }

}


const lastday = async (req:Request,res:Response)=>{
        try {

            const user = await User.findById(req.id);
            const lastDayTransactions = user?.transition.filter(transaction => {

                const timenow = new Date (new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})).getTime();
  
                const timethen:any = new Date(transaction.timestamp).getTime();

                const differ:any = timenow - timethen;

                return differ <= 24*60*60*1000;

            });
            res.send(lastDayTransactions);
        } catch (error) {
            res.status(500).send('Error retrieving last day transactions');
        }
}

const lastweek = async(req:Request,res:Response)=>{
    try {

        const user = await User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {

            const timenow = new Date (new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})).getTime();

            const timethen:any = new Date(transaction.timestamp).getTime();

            const differ:any = timenow - timethen;

            return differ <= 7*24*60*60*1000;

        });
        res.send(lastDayTransactions);
    } catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
}

const lastmonth = async(req:Request,res:Response)=>{
    try {

        const user = await User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {

            const timenow = new Date (new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})).getTime();

            const timethen:any = new Date(transaction.timestamp).getTime();

            const differ:any = timenow - timethen;

            return differ <= 30*24*60*60*1000;

        });
        res.send(lastDayTransactions);
    } catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
}
const lastyear = async(req:Request,res:Response)=>{
    try {

        const user = await User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {

            const timenow = new Date (new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})).getTime();

            const timethen:any = new Date(transaction.timestamp).getTime();

            const differ:any = timenow - timethen;

            return differ <= 360*24*60*60*1000;

        });
        res.send(lastDayTransactions);
    } catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
}







export {lasthour,lastday,lastweek,lastmonth,lastyear};
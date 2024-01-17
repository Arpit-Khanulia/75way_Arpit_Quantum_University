import express from 'express';
import {viewbalance } from '../controller/viewbalance';
import { register } from '../controller/register';
import { login } from '../controller/login';
import { payment } from '../controller/payment';
import { authenticator } from '../middleware/auth';

import { lastday,lasthour,lastmonth,lastweek,lastyear } from '../controller/filter';


const router = express.Router();


router
.post('/login',login)
.post('/register',register)
.post('/pay',authenticator,payment)
.post('/viewbalance',authenticator,viewbalance)
.get('/lasthour',authenticator,lasthour)
.get('/lastday',authenticator,lastday)
.get('/lastweek',authenticator,lastweek)
.get('/lastmonth',authenticator,lastmonth)
.get('/lastyear',authenticator,lastyear)



export {router}
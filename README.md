
# My-Wallet

## Description

The project is a wallet application that allows users to register, sign in, create a wallet with a default balance, transfer money to other users, receive money, view transaction history, and receive email notifications for transactions.

## Installation

clone the repo,  and install all dependancies

```
npm i

```

To run the Project , run these two commands in seprate terminals

```
npm run watch
```

```
npm run dev
```
### Dummy Users

```
user1

{
    "username": "rahul",
    "email": "firedr4gon7@gmail.com",
    "password": "rahulPass@123"
}


user2

{
    "username": "arpit_khanulia",
    "email": "arpitkhanulia7@gmail.com",
    "password": "arpitPass@123"
}

```

## Routes
- /login (POST)

dummydata
```
{
    "username": "arpit_khanulia",
    "email": "arpitkhanulia7@gmail.com",
    "password": "arpitPass@123"
}
```

<hr>
- /register (POST)

dummydata
```
{
    "username": "arpit_khanulia",
    "email": "arpitkhanulia7@gmail.com",
    "password": "arpitPass@123"
}
```
<hr>
- /pay (POST)

dummydata
note - user should be logged in as arpitkhanulia
```
{
    "password":"arpitPass@123",
    "transfer_money" :1,
    "recipent_username" :"rahul"
}
```
<hr>
- /viewbalance (POST)

dummydata

note - user should be logged in as arpitkhanulia
```
{
  "password":"arpitPass@123"
}
```
<hr>
- /lasthour (GET)

    get all transitions happened in the last one hour for the logged in user.
<hr>
- /lastday (GET)

    get all transitions happened in the last one day for the logged in user.
<hr>
- /lastweek (GET)

    get all transitions happened in the last one week for the logged in user.
<hr>
- /lastmonth (GET)

    get all transitions happened in the last one month for the logged in user.
<hr>
- /lastyear (GET)

    get all transitions happened in the last one year for the logged in user.
<hr>




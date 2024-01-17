import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        required: true
    },
    transition:{
        type: Array,
        required:true
    }

});



// model
const User = mongoose.model('User', userSchema);


export {User};



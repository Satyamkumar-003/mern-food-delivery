const mongoose = require('mongoose')
// destructuring
const {Schema} = mongoose;

// will be using the callback js
// defined various schema with their types adn required to take data from the user 
const  UserSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
// exporting  , collection will be created were the user is used
// model help us in inserting the data 
// /can use create update insert by mongoose 
module.exports =mongoose.model('user',UserSchema)


// now creating the routers 
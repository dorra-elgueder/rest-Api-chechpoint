const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const users = new mongoose.Schema({
name:string;
email:{
    type:string;;
    required:true,
    unique:true,
}
passwords:string,

});

module.export=mongoose.models("user", users);



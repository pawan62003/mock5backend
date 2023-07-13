const express = require('express');
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{required:true,type:String},
    password:{required:true,type:String}
},{
    versionKey:false
})

const UserModel = mongoose.model('user',UserSchema);

module.exports={
    UserModel
}


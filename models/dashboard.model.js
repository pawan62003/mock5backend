const express = require('express');
const mongoose = require('mongoose')

const DashboardSchema = mongoose.Schema({
    firstname:{required:true,type:String},
    lastname:{required:true,type:String},
    email:{required:true,type:String},
    department:{required:true,type:String},
    salery:{required:true,type:Number}
},{
    versionKey:false
})

const DashboardModel = mongoose.model('dashboard',DashboardSchema);

module.exports={
    DashboardModel
}


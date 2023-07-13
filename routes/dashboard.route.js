const express = require("express")
const DashboardRoute = express.Router();
const { DashboardModel} = require("../models/dashboard.model")

DashboardRoute.get("/" ,async(req,res)=>{
    try {
        const data = await DashboardModel.find()
        res.send(data)
    } catch (error) {
        res.send({"err":error})
    }
})

DashboardRoute.get("/:id" ,async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        const data = await DashboardModel.find({_id:id})
        res.send(data)
    } catch (error) {
        res.send({"err":error})
    }
})

DashboardRoute.post("/",async(req,res)=>{
    const {id} = req.params
    try {
        const data = new DashboardModel(req.body)
        await  data.save();
        res.send({"msg":"data is added in your database"})
    } catch (error) {
        res.send({"err":error})
    }
})

DashboardRoute.patch("/:id" ,async(req,res)=>{
    const {id} = req.params
    try {
        const afetrUpdate = await DashboardModel.findByIdAndUpdate({_id:id},req.body)
        res.send({"msg":"data is updated in db"})
    } catch (error) {
        res.send({"err":error})
    }
})

DashboardRoute.delete("/:id" ,async(req,res)=>{
    const {id} = req.params
    try {
        const afetrUpdate = await DashboardModel.findByIdAndDelete({_id:id})
        res.send({"msg":"data is deleted from database"})
    } catch (error) {
        res.send({"err":error})
    }
})

module.exports={
    DashboardRoute
}
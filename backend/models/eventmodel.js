import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        eventName:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true,
        },
        datee:{
            type:Date,
            required:true,
        },
        e_time:{
            type:String,
            required:true,
        },
        en_time:{
            type:String,
            required:true,
        },
        rules:{
            type:String,
            required:true,
        },
        contact:{
            type:Number,
            required:true,
        }
    }
);

export const events = mongoose.model('EMS',eventSchema);
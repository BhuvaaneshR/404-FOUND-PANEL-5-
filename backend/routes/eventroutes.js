import express from  'express';
import { events } from "../models/eventmodel.js";

const router  = express.Router();

router.post('/',async(req,res)=>{
    try {
        if(
            !req.body.eventName ||
            !req.body.desc ||
            !req.body.datee ||
            !req.body.e_time||
            !req.body.en_time ||
            !req.body.rules ||
            !req.body.contact 
        )
        {
            return res.status(400).send({ message: "Please fill all the fields" });
        }
        const eventparams = {
            eventName:req.body.eventName,
            desc:req.body.desc ,
            datee:req.body.datee ,
            e_time:req.body.e_time,
            en_time:req.body.en_time, 
            rules:req.body.rules ,
            contact:req.body.contact
        };
        const  event = await events.create(eventparams);
        return res.status(201).send(event);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

router.get("/" ,async(req,res)=>{
    try {
        const eventss = await  events.find({});

        return res.status(200).json(eventss);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

router.get("/:id" ,async(req,res)=>{
    try {

        const {id}=req.params;
        const evnt = await  events.findById(id);

        return res.status(200).json(evnt);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

router.put("/:id",async(req,res)=>{
    try {
        if(
            !req.body.eventName ||
            !req.body.desc ||
            !req.body.datee ||
            !req.body.e_time||
            !req.body.en_time ||
            !req.body.rules ||
            !req.body.contact 
        )
        {
            return res.status(400).send({ message: "Please fill all the fields" });
        }
        const { id } = req.params;
        const result =  await events.findByIdAndUpdate(id, req.body, { new: true });
        if(!result)
            return res.status(404).json({message:"Event not  found"});
        else
            return res.status(200).json(result);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const  { id } = req.params;
        const result =  await events.findByIdAndDelete(id);

        if(!result)
            return res.status(404).json({message:"Event not  found"});
        else
            return  res.status(200).json({message:"Event deleted"});



    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})


export default router;
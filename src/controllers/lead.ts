import {Request, Response} from "express";
import mongoose from "mongoose";
import {LeadModel} from "../models";

export async function getLeadsByCampaign(req: Request, res: Response){
    try{
        const {id} = req.params;
        const leads = await LeadModel.find({campaign: new mongoose.Types.ObjectId(id)});
        return res.status(200).json({leads});
    } catch (error) {
        console.error("Error fetching leads: ", error);
        return res.status(500).json({message: `Internal server error in fetching leads`});
    }
}

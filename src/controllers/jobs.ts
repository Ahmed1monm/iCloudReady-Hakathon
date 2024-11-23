import {CampaignModel, LeadModel} from "../models";

export async function leadCreatorJob () {
    const Campaigns = await CampaignModel.find();
    for (let Campaign of Campaigns) {
        await LeadModel.create({
            email: `lead-${Date.now()}@gmail.com`,
            name: `Lead ${Date.now()}`,
            phone: `+234${Date.now()}`,
            message: `I am interested in your product`,
            job: "Software Engineer",
            address: "Lagos, Nigeria",
            ageRange: "18-35",
            campaign: Campaign?._id || "3d3d3d3d3d3d3d3d3d3d3d3d"
        });
    }
}

export async function scoreLeadsJob () {
    const leads = await LeadModel.find();

    for(let lead of leads){
        // random score between 0 and 10
        const score = Math.floor(Math.random() * 11);
        if (!lead.score || lead.score === 0){
            lead.score = score;
            await lead.save();
        }
    }
}

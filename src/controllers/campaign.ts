import {Request, Response} from "express";

import {CampaignModel} from "../models";

async function createCampaign(req: Request, res: Response){
    try {
        const bodyData = req.body;
        const campaign = await CampaignModel.create(bodyData);
        return res.status(201).json(campaign);

    } catch (error) {
        console.error("Error creating campaign: ", error);
        return res.status(500).json({message: `Internal server error in create campaign`});
    }
}

async function getCampaigns(req: Request, res: Response){
    try {
        const bodyData = req.body;
        const campaign = await CampaignModel.find();
        return res.status(200).json(campaign);

    } catch (error) {
        console.error("Error fetching campaign: ", error);
        return res.status(500).json({message: `Internal server error in fetching campaigns`});
    }
}

async function getCampaign(req: Request, res: Response){
    try {
        const {id} = req.params;
        const campaign = await CampaignModel.findById(id);
        return res.status(200).json(campaign);

    } catch (error) {
        console.error("Error fetching campaign: ", error);
        return res.status(500).json({message: `Internal server error in fetching campaign`});
    }
}

async function initCampaigns(){
    try {
        const initCampaign = {
            "name": "Summer Sale Campaign",
            "startDate": "2024-11-25T00:00:00.000Z",
            "endDate": "2024-12-10T23:59:59.000Z",
            "budget": 5000,
            "channels": [
                {
                    "name": "Facebook Ads",
                    "account": [
                        {
                            "token": {
                                "access_token": "abc123xyz",
                                "token_type": "Bearer",
                                "refresh_token": "refresh123xyz",
                                "expires_in": 3600
                            },
                            "name": "Main Facebook Account",
                            "id": "fb_001",
                            "isDefault": true
                        }
                    ]
                },
                {
                    "name": "Google Ads",
                    "account": [
                        {
                            "token": {
                                "access_token": "google_access_456",
                                "token_type": "Bearer",
                                "refresh_token": "google_refresh_456",
                                "expires_in": 3600
                            },
                            "name": "Main Google Account",
                            "id": "google_002",
                            "isDefault": true
                        }
                    ]
                }
            ],
            "targetAudience": [
                {
                    "name": "Young Professionals",
                    "description": "Targeting professionals aged 25-35 in urban areas.",
                    "ageRange": "25-35",
                    "address": "Urban Areas",
                    "job": "Professional"
                },
                {
                    "name": "Retirees",
                    "description": "Targeting individuals aged 60+ in suburban and rural areas.",
                    "ageRange": "60+",
                    "address": "Suburban and Rural Areas",
                    "job": "Retired"
                }
            ]
        }

        const campaigns = await CampaignModel.find();
        if (campaigns.length === 0) {
            await CampaignModel.create(initCampaign);
            await CampaignModel.create({
                name: "Campaign 2",
                description: "This is campaign 2",
                startDate: new Date(),
                endDate: new Date(),
                budget: 2000,
                platform: "linkedin",
                additionalInputs: {
                    "companySize": ["small", "medium"],
                    "industry": ["technology", "finance"]
                }
            });
        }
    } catch (error) {
        console.error("Error initializing campaigns: ", error);
    }
}

export {
    createCampaign,
    getCampaigns,
    getCampaign,
    initCampaigns
}

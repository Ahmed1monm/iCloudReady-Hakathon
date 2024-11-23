import {Request, Response} from "express";

export async function fetchAnalytics(req: Request, res: Response){
    return res.status(200).json({
        // return fake data for campaign analytics and leads, put any data that makes sens till we replace with real data
        campaignAnalytics: {
            "campaigns": 10,
            "leads": 100,
            "clicks": 1000,
            "impressions": 10000,
            "conversions": 100
        },
        leadsAnalytics: {
            "leads": 100,
            "clicks": 1000,
            "impressions": 10000,
            "conversions": 100,
            "potentialRevenue": 100000,
            "connectedLeads": 50,
            "unconnectedLeads": 50,
            "connectedLeadsRevenue": 50000,
        }
    });
}

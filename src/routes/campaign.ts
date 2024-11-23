import {Router} from "express";

import {createCampaign, getCampaigns, getCampaign, getLeadsByCampaign} from "../controllers";

const campaignRouter = Router();

campaignRouter.route("/").post(createCampaign).get(getCampaigns);
campaignRouter.route("/:id").get(getCampaign);
campaignRouter.route("/:id/leads").get(getLeadsByCampaign);

export default campaignRouter;

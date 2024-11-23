import {Router} from "express";

import {fetchAnalytics} from "../controllers";

const dashboardRouter = Router();
dashboardRouter.route("/").get(fetchAnalytics);

export default dashboardRouter;

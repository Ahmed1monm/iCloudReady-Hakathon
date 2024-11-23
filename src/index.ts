import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import nodeCron from "node-cron";
import cors from "cors";

import CreateConnection from "./models";
import {mongoURI, PORT} from "./config";
import v1Router from './routes';
import {leadCreatorJob, scoreLeadsJob} from "./controllers/jobs";
import {initCampaigns} from "./controllers/campaign";

const marketing = express();
dotenv.config();

// middlewares
marketing.use(cors());
marketing.use(express.json());
marketing.use(helmet());
marketing.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
marketing.use(morgan("common"));
marketing.use(bodyParser.json({limit: "30mb"}));
marketing.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
marketing.use("/assets", express.static(path.join(__dirname, "/assets")));

marketing.use("/api/v1", v1Router);

initCampaigns().then(() => {
    console.log("Campaigns initialized");
});

// cron job, crates lead every 20 seconds
nodeCron.schedule("*/20 * * * * *", leadCreatorJob);
// cron job, scores leads every 30 seconds
nodeCron.schedule("*/30 * * * * *", scoreLeadsJob);

marketing.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    CreateConnection(mongoURI).then(() => {
        console.log("Connected to database");
    });
});

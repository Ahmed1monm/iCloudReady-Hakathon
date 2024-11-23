import {Router} from "express";

const additionalInputRouter = Router();

additionalInputRouter.get("/", (req, res) => {
    return res.status(200).json({
        message: "Additional input route", additional_input: {
            "tiktok": ["add video", "add audio", "add text"],
            "twitter": ["interests"],
            "linkedin": ["company size", "industry", "job title"],
        }
    });
});

export default additionalInputRouter;

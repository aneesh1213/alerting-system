import express from "express";
import FailedRequest from "../models/FailedRequest.js";

import { sendEmailAlert, trackFailedMails } from "../utils/alertUtils.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { headers, ip, body } = req;

    // validating tokens and authorization

    if(!headers.authorization || headers.authorization != 'valid_token'){
        const reason = 'Invalid or missing authorization token ';

        await FailedRequest.create({
            ip, 
            timestamp: new Date(),
            reason
        });

        // tracking failed requests

        const totalthreshold = await trackFailedMails(ip);
        if(totalthreshold){
            sendEmailAlert(ip);
        }

        return res.status(401).json({error: reason});
    }

    // else it was a valid request

    return res.status(200).json({message: 'Success'});

});

export default router;

import express from "express";
import FailedRequest from "../models/FailedRequest.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const metrics = await FailedRequest.find().sort({timestamp : -1 });
    res.status(200).json(metrics);
}) 

export default router;
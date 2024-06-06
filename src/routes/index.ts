import { Router } from "express";
import { GenResponse } from "../controllers/GenResponse.controller";


const router = Router();

router.post("/generate-response", GenResponse);

export default router;
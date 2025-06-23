import { Router } from "express";
import { chatWith8n8 } from "../controller/chatbot.controller";

const chatbotRoute = Router();

chatbotRoute.post('/', chatWith8n8);

export default chatbotRoute;
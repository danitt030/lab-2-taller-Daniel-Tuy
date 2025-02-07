import { Router } from "express";
import { saveAppointment, cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.delete("/cancelAppointment/:aid", cancelAppointment);

export default router;
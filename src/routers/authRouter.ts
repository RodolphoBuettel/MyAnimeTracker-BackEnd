import { SignIn, SignUp } from "../controllers/authController";
import { Router } from "express";
import { ValidateSignUpBody } from "../middlewares/modelsValidations";

const authRouter = Router();

authRouter
    .post("/sign-up", ValidateSignUpBody, SignUp)
    .post("/sign-in", ValidateSignUpBody, SignIn);

export default authRouter;
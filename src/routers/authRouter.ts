import { SignIn, SignUp } from "../controllers/authController";
import { Router } from "express";
import { ValidateSignInBody, ValidateSignUpBody } from "../middlewares/modelsValidations";

const authRouter = Router();

authRouter
    .post("/sign-up", ValidateSignUpBody, SignUp)
    .post("/sign-in", ValidateSignInBody, SignIn);

export default authRouter;
import { signInSchema, signUpSchema } from "../models/authModels";
import { NextFunction, Request, Response} from "express";


export function ValidateSignUpBody(req: Request, res: Response, next: NextFunction){
    const user = req.body;
    const { error } = signUpSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
};

export function ValidateSignInBody(req: Request, res: Response, next: NextFunction){
    const user = req.body;
    const { error } = signInSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    next();
};
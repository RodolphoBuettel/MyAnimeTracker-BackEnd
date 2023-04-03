import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { authenticationSerivce, signUpParams } from "../services/authenticationSerivce";

export async function SignUp(req: Request, res: Response) {
    const { name, email, password } = req.body as signUpParams;

    const passwordHashed = bcrypt.hashSync(password, 10);
    try {
        const result = await authenticationSerivce.signUp({ name, email, passwordHashed }, res);
        res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(401);
    }
};

export async function SignIn(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const user = await authenticationSerivce.getUserOrFail(email);

        await authenticationSerivce.validatePasswordOrFail(password, user.password);

        const token = await authenticationSerivce.createSession(user.id);
        res.status(200).send(token);
    } catch (err) {
        return res.sendStatus(401);
    }
}

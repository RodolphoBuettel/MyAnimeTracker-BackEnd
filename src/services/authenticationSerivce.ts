import { authenticationRepository } from "../repository/authenticationRepository";
import { Response } from "express";
import bcrypt from "bcrypt";
import { NotFoundError, invalidCredentialsError } from "../erros/index";
import jwt from "jsonwebtoken";

async function signUp(params: { name: string; email: string; passwordHashed: string; }, res: Response) {
    const {name, email, passwordHashed} = params;

    const verifyEmail = await authenticationRepository.findByEmail(email);
    if(verifyEmail){
        return NotFoundError();
    }

    try{
        const result = await authenticationRepository.createAccount(name, email, passwordHashed);
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
    }
}

export type signUpParams = {
  name: string,
  email: string,
  password: string
}

async function getUserOrFail(email: string) {
    const user = await authenticationRepository.findByEmail(email);
    if (!user) throw invalidCredentialsError();
  
    return user;
};

async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
};

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    await authenticationRepository.create(token, userId);
  
    return token;
  }

export const authenticationSerivce = {
    signUp,
    getUserOrFail,
    validatePasswordOrFail,
    createSession
};
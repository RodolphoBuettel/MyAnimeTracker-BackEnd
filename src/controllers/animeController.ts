import { animeService } from "../services/animeService";
import { AuthenticatedRequest } from "../middlewares/authenticationMiddleware";
import { Response } from "express";


export async function postAnime(req:AuthenticatedRequest, res: Response) {
    const {id} = req.body;
    const {userId} = req;
    
    try{
        await animeService.postAnime(id, userId);
        res.sendStatus(200);
    }catch(err){
        return res.sendStatus(404);
    };
};

export async function deleteAnime(req:AuthenticatedRequest, res: Response) {
    const {id} = req.body;
    const {userId} = req;

    try{
        await animeService.deleteAnime(id, userId);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
    };
};

export async function getAnimes(req:AuthenticatedRequest, res: Response) {
    const {userId} = req;

    try{
        const result = await animeService.getAnimes(userId);
        res.status(200).send(result);
    }catch(err){
        console.log(err);
    };
};

export async function findAnimeById(req: AuthenticatedRequest, res: Response){
    const {id} = req.params;

    try{
        const result = await animeService.findAnimeById(Number(id));
        res.status(200).send(result);
    }catch(err){

    }
}
import { NotFoundError } from "../erros/index";
import { animeRepository } from "../repository/animeRepository";


async function postAnime(id: number, userId: number) {
    
    const userExiste = await animeRepository.findUserById(userId);
    if(!userExiste) throw NotFoundError();

    const animeId = id;
    if(!animeId) throw NotFoundError();

    try{
        const result = await animeRepository.postAnime(id, userId);
        return result;
    }catch(err){
        console.log(err);
    };
};

async function deleteAnime(id:number, userId: number) {

    const userExiste = await animeRepository.findUserById(userId);
    if(!userExiste) throw NotFoundError();

    const animeId = id;
    if(!animeId) throw NotFoundError();

    try{
        const result = await animeRepository.deleteAnime(id);
        return result;
    }catch(err){
        console.log(err);
    };
};

async function getAnimes(userId:number) {
    const userExiste = await animeRepository.findUserById(userId);
    if(!userExiste) throw NotFoundError();

    try{
        const result  = await animeRepository.getAnimes(userId);
        return result;
    }catch(err){
        console.log(err);
    }
}

async function findAnimeById(id:number) {
    try{
        const result = await animeRepository.findAnimeById(id);
        return result;
    }catch(err){  
        console.log(err);
    }
}

export const animeService = {
    postAnime,
    deleteAnime,
    getAnimes,
    findAnimeById
};
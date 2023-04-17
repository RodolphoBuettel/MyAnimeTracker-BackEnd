import { NotFoundError } from "../erros/index";
import { animeRepository } from "../repository/animeRepository";


async function postAnime(id: number, animeName:string, userId: number) {

    const userExiste = await animeRepository.findUserById(userId);
    if (!userExiste) throw NotFoundError();

    const animeId = id;
    if (!animeId) throw NotFoundError();

    try {
        const result = await animeRepository.postAnime(id,animeName, userId);
        return result;
    } catch (err) {
        console.log(err);
    };
};

async function deleteAnime(id: number, userId: number) {

    const userExiste = await animeRepository.findUserById(userId);
    if (!userExiste) throw NotFoundError();

    const animeId = id;
    if (!animeId) throw NotFoundError();

    try {
        const result = await animeRepository.deleteAnime(id);
        return result;
    } catch (err) {
        console.log(err);
    };
};

async function getAnimes(userId: number, page: number, pageSize: number) {
    const userExiste = await animeRepository.findUserById(userId);
    if (!userExiste) throw NotFoundError();
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    
    try {
        const result = await animeRepository.getAnimes(userId, skip, take);
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function getAnimeByTerm(userId: number, searchTerm: string) {
    const userExiste = await animeRepository.findUserById(userId);
    if (!userExiste) throw NotFoundError();
    try{
        const result = await animeRepository.getAnimeByTerm(userId, searchTerm);
        return result;
    }catch(err){
        console.log(err);
    }
}

async function findAnimeById(id: number) {
    try {
        const result = await animeRepository.findAnimeById(id);
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function addEpByAnimeId(id: number, num: number){
    try{
        const result = await animeRepository.addEpById(id, num);
        return result;
    }catch(err){
        console.log(err);
    };
};

export const animeService = {
    postAnime,
    deleteAnime,
    getAnimes,
    findAnimeById,
    addEpByAnimeId,
    getAnimeByTerm
};
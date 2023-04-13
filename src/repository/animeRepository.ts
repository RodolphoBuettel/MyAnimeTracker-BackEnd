import prisma from "../config/database";

async function postAnime(id: number, userId: number) {
    return prisma.myAnimes.create({
        data: {
            userId: userId,
            animeId: id,
            createdAt: new Date(),
            upadatedAt: new Date(),
        },
    });
};

async function deleteAnime(id: number) {
    return prisma.myAnimes.delete({
        where: {
            animeId: id,
        }
    })
}

async function findUserById(userId: number) {
    return prisma.user.findFirst({
        where: {
            id: userId
        },
    });
};

async function getAnimes(userId: number, skip: number, take: number) {
    return prisma.myAnimes.findMany({
        where: {
            userId: userId
        },
        skip: skip,
        take: take
    });
};

async function findAnimeById(id: number) {
    return prisma.myAnimes.findFirst({
        where: {
            animeId: id
        },
    })
};

async function addEpById(id: number, num: number) {
    return prisma.myAnimes.update({
        where: { animeId: id },
        data: { episodesCount: num }
    });
};

export const animeRepository = {
    postAnime,
    findUserById,
    deleteAnime,
    getAnimes,
    findAnimeById,
    addEpById
};
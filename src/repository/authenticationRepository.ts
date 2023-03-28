import prisma from "../config/database";

async function findByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email: email
        }
    })
};

async function createAccount(name: string, email: string, passwordHashed: string) {
    return prisma.user.create({
        data: {
            name,
            email,
            password: passwordHashed,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
}

async function create(token: string, userId: number) {
    return prisma.session.create({
      data: {
        token,
        userId: userId,
        createdAt: new Date(),
        upadatedAt: new Date(),
      }
    });
  }

export const authenticationRepository = {
    findByEmail,
    createAccount,
    create
}
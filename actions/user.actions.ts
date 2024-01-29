import { PrismaClient } from "@/prisma/generated/mongodb_client";

export const getUserByEmail = async (email:string) => {
    const prisma = new PrismaClient();
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            include: {
                movies: {
                    include: {
                        genres: {
                            select: { genre: { select: { name: true, id: true } } },
                        }
                    }
                }
            }
        });
        return user;
    } catch (error) {
        return error;
    }
};

export const createUser = async (name: string, email:string) => {
    const prisma = new PrismaClient();
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        return newUser;
    } catch (error) {
        return error;
    }
};

export const setUser = async (name: string, email:string) => {
    const user = await getUserByEmail(email);
    if(!user){
        const newUser = await createUser(name, email);
        return newUser;
    }
    if(user) {
        return user;
    }   
};


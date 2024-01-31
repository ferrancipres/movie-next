import { PrismaClient } from "@/prisma/generated/mongodb_client";
const prisma = new PrismaClient();

// Get user by email
export const getUserByEmail = async (email:string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email},
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
        console.error(error);
    }
};

// Create user
export const createUser = async (name: string, email:string) => {
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        return newUser;
    } catch (error) {
        console.error(error);
    }
};

// Get session user
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


"use server";

import { PrismaClient } from "@/prisma/generated/mongodb_client";

const prisma = new PrismaClient();

export const getMovieByUser = async (email:string) => {
    const user = await prisma.user.findUnique({
        where: { email: email },
        include: {
            movies: {
                select: { name: true, poster_image: true, score: true }
            }
        }
    });
    return user;
}

export const createMovie = async (data: any, userId: string) => {
    console.log("data", data);
    console.log("userId", userId);
    const { name, poster_image, score, genres } = data;

    try {
        const movie = await prisma.movies.create({
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: {
                        genre: {
                            connectOrCreate: {
                                where: { name: genres },
                                create: { name: genres },
                            },
                        },
                    },
                },
                User: { connect: { id: userId } },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } },
                },
            },
        });
        console.log(movie);
        return movie;
    } catch (error) {
        return "Can't create movie";
}
};
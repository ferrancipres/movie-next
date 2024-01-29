"use server";

import { PrismaClient } from "@/prisma/generated/mongodb_client";

const prisma = new PrismaClient();

export const getMovieByUser = async (email:string) => {
    const user = await prisma.user.findUnique({
        where: { email: email },
        include: {
            movies: {
                select: { name: true, poster_image: true, score: true, id: true }
            }
        }
    });
    return user;
}

export const deleteMovie = async (id: string) => {

    const deletedMovie = await prisma.movies.delete({
        where: { id: id }
    });
    return deletedMovie || "Can't delete movie";
}

// export const updateMovie = async (data: any, id: string) => {
//     const { name, poster_image, score, genres } = data;

//     try {
//         const updatedMovie = await prisma.movies.update({
//             where: { id: id },
//             data: {
//                 name,
//                 poster_image,
//                 score,
//                 genres: {
//                     create: {
//                         genre: {
//                             connectOrCreate: {
//                                 where: { name: genres },
//                                 create: { name: genres },
//                             },
//                         },
//                     },
//                 },
//             },
//             include: {
//                 genres: {
//                     select: { genre: { select: { name: true, id: true } } },
//                 },
//             },
//         });
//         return updatedMovie;
//     } catch (error) {
//         return "Can't update movie";
//     }
// }

export const createMovie = async (data: any, userId: string) => {
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
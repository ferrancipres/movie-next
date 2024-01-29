import { MovieTMB } from "../models";

export const getData = (): Promise<MovieTMB[]> => {
    const tmb_url = `https://api.themoviedb.org/3/discover/movie`;
    return fetch(tmb_url, {
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2FhMjExZDZiYzZhNDliZjc2ZTQwMmQyMjBjY2Q5OCIsInN1YiI6IjY1NGM5NWM0ZDQ2NTM3MDBmZTM0NGExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o0B18r9aPqwWZbDBCX-Yb7KaFTvrsee4NITpaMf2XUg",
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(response => response.json())
        .then(data => data.results)
}   


import { movieTMB } from "@/model/movie.model";
const baseURL: string = "https://api.themoviedb.org/3/movie/";

// get discover movies
export const getDiscoverMovies = async (): Promise<movieTMB[]> => {
    try {
        const url = `${baseURL}now_playing?language=en-US&page=1`;
        return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMB_API_KEY}`	
            },
        })
            .then(res => res.json())
            .then(data => data.results)
    } catch (error) {
        console.error(error);
        return [];
    }
};

// get popular movies
export const getPopularMovies = async (): Promise<movieTMB[]> => {
    try {
        const url = `${baseURL}popular?language=en-US&page=2`;
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMB_API_KEY}`	
        },
    })
        .then(res => res.json())
        .then(data => data.results)
    } catch (error) {
        console.error(error);
        return [];
    }  
};  

// get unreleased movies
export const getUnreleasedMovies = async (): Promise<movieTMB[]> => {
    try {
        const url = `${baseURL}now_playing?language=en-US&page=3`;
        return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMB_API_KEY}`	
            },
        })
            .then(res => res.json())
            .then(data => data.results)  
    } catch (error) {
        console.error(error);
        return [];
    }
};

//get movie by id
export const getMovie = async (id: number) => {
    try {
        const url = `${baseURL}${id}?language=en-US`;
        return fetch(url, {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMB_API_KEY}`	
          },
      })
          .then(res => res.json())
          .then(data => data.results)  
    } catch (error) {
      console.error(error);  
    } 
};   
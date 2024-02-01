"use client";
import "./movie.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  genres: { name: string }[];
  vote_average: number;
  original_language: string;
}

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(true);

  try {
    useEffect(() => {
      setIsLoading(true);
      const tmdb_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
      fetch(tmdb_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMB_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setMovie(data);
        });
    }, [movieId]);
  } catch (error) {
    console.error("Error:", error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return null;
  }

  const imageURL = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <section className="image__container">
      <Image
        src={imageURL}
        alt={movie.title}
        className="image__background"
        height={1000}
        width={1000}
        priority
      />

      <main className="description__container">
        <div>
          <img src={imageURL} alt={movie.title} />
        </div>
        <div className="text__container">
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Score:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Language:</strong> {movie.original_language}
          </p>
        </div>
        <br />
      </main>
    </section>
  );
};

export default MovieDetails;

import React from "react";
import Card from "@/components/card-movie/Card";
import { getPopularMovies } from "@/service/movie.service";

async function Popular() {
  const moviesTMB = await getPopularMovies();
  return (
    <>
      {moviesTMB.map((movie) => (
        <Card key={movie.id} data={movie} />
      ))}
    </>
  );
}

export default Popular;

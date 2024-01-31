import React from "react";
import Card from "@/components/card-movie/Card";
import { getUnreleasedMovies } from "@/service/movie.service";

async function Unreleased() {
  const moviesTMB = await getUnreleasedMovies();
  return (
    <>
      {moviesTMB.map((movie) => (
        <Card key={movie.id} data={movie} />
      ))}
    </>
  );
}

export default Unreleased;

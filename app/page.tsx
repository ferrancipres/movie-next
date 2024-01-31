import React from "react";
import Card from "@/components/card-movie/Card";
import { getDiscoverMovies } from "@/service/movie.service";

async function App() {
  const moviesTMB = await getDiscoverMovies();
  return (
    <>
      {moviesTMB.map((movie) => (
        <Card key={movie.id} data={movie} />
      ))}
    </>
  );
}

export default App;

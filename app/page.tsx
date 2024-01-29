import React from "react";
import { getData } from "./services";
import Card from "@/components/Card/Card";

async function getMovies() {
  return await getData();
}

async function App() {
  const moviesTMB = await getMovies();
  return (
    <>
      {moviesTMB.map((movie) => (
        <Card key={movie.id} data={movie} />
      ))}
    </>
  );
}

export default App;

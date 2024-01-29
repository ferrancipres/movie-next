import { MovieTMB } from "@/app/models";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "../Delete Button/DeleteButton";

interface Props {
  data: MovieTMB;
}

export interface PropsforProfile {
  data: DataBaseMovie;
}

export interface DataBaseMovie {
  id: string;
  name: string;
  score: number;
  poster_image: string;
  userId: string;
  genre: any;
}

export function Card({ data }: Props) {
  return (
    <div className="Card">
      <Link href={`/${data.id}`}>
        {/* <Image
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          width={250}
          height={300}
          alt={data.title}
        /> */}
        <p>{data.title}</p>
      </Link>
      {/* <p>Created: {data.release_date}</p> */}

      {/* <p>Popularity: {data.popularity}</p>
      <p>Any: {data.adult}</p>
      <p>Any: {data.backdrop_path}</p>
      <p>Any: {data.genre_ids}</p>
      <p>Any: {data.id}</p>
      <p>Any: {data.original_language}</p>
      <p>Any: {data.original_title}</p>
      <p>Any: {data.overview}</p>
      <p>Any: {data.poster_path}</p>
      <p>Any: {data.vote_average}</p>
      <p>Any: {data.vote_count}</p>
      <p>Description: {data.overview}</p> */}
    </div>
  );
}

export function CardForProfile({ data }: PropsforProfile) {
  return (
    <div className="Card">
      {/* <Link href={`/${data.id}`}> */}
      {/* <Image
        src={`${data.poster_image}`}
        width={250}
        height={300}
        alt={data.name}
      /> */}
      <p>{data.name}</p>
      <DeleteButton id={data.id} />
      {/* </Link> */}
      {/* <p>Created: {data.release_date}</p> */}
      {/* <p>Popularity: {data.popularity}</p>
      <p>Any: {data.adult}</p>
      <p>Any: {data.backdrop_path}</p>
      <p>Any: {data.genre_ids}</p>
      <p>Any: {data.id}</p>
      <p>Any: {data.original_language}</p>
      <p>Any: {data.original_title}</p>
      <p>Any: {data.overview}</p>
      <p>Any: {data.poster_path}</p>
      <p>Any: {data.vote_average}</p>
      <p>Any: {data.vote_count}</p>
      <p>Description: {data.overview}</p> */}
    </div>
  );
}

export default Card;

import "./Card.css";
import { movieTMB } from "@/model/movie.model";
import Image from "next/image";
import Link from "next/link";

interface PropsforMovieTMB {
  data: movieTMB;
}

export function Card({ data }: PropsforMovieTMB) {
  return (
    <div className="card">
      <Link href={`/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          width={250}
          height={300}
          alt={data.title}
        />
        <p className="card_title">{data.title}</p>
      </Link>
    </div>
  );
}

export default Card;

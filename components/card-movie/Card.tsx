import "./Card.css";
import Image from "next/image";
import Link from "next/link";
import { movieTMB } from "@/model/movie.model";

export type PropsforMovieTMB = {
  data: movieTMB;
};

const Card = ({ data }: PropsforMovieTMB) => {
  return (
    <div className="card">
      <Link href={`/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          width={250}
          height={300}
          alt={data.title}
        />
        <p className="card__title">{data.title}</p>
      </Link>
    </div>
  );
};

export default Card;

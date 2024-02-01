"use client";
import "./CardForProfile.css";
import Image from "next/image";
import DeleteButton from "../btn-delete-movie/DeleteButton";
import UpdateButton from "../btn-update-movie/UpdateButton";
import { useState } from "react";
import { UpdateMovieModal } from "../btn-update-modal/UpdateMovieModal";

export interface PropsforProfile {
  data: DataBaseMovie;
  user?: any;
}

export interface DataBaseMovie {
  id: string;
  name: string;
  score: number;
  poster_image: string;
  userId: string;
  genre: string;
}

export function CardForProfile({ data, user }: PropsforProfile) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="card__profile__container">
        <p>{data.name}</p>{" "}
        <Image
          src={data.poster_image}
          width={300}
          height={350}
          alt={data.name}
        />
        <div className="icons__container">
          <DeleteButton id={data.id} />
          <button type="button" onClick={handleOpenModal}>
            <UpdateButton id={data.id} data={data} />
          </button>
          <UpdateMovieModal
            user={user}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            id={data.id}
          />
        </div>
      </div>
    </div>
  );
}

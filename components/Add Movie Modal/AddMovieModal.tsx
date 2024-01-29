"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "../Modal/Modal";
import "./AddMovieModal.css";
import { createMovie } from "@/actions/movie.actions";
import { useRouter } from "next/navigation";

type AddMovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: { id: string };
};

type FormValues = {
  name: string;
  genres: string[];
  score: string;
  poster_image: string;
};

export const AddMovieModal: React.FC<AddMovieModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const router = useRouter();

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const userId = user.user.id;
    if (userId) await createMovie(data, userId);
    router.refresh();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <main className="modal-wrapper">
        <article className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <p className="form-text">Name</p>
            <input
              type="text"
              placeholder="Example123"
              {...register("name", { required: true, max: 30, min: 1 })}
            />
            <p className="form-text">Genre</p>
            <input
              type="text"
              placeholder="Action"
              {...register("genres", { required: true, max: 30 })}
            />
            <p className="form-text">Score</p>
            <input
              type="string"
              placeholder="0 to 10"
              {...register("score", { required: true, max: 10, min: 0 })}
            />
            <p className="form-text">Image</p>
            <input
              type="text"
              placeholder="imageUrl"
              {...register("poster_image", { required: false })}
            />

            <input type="submit" value="Add Movie" className="add-movie-btn" />
          </form>
        </article>
      </main>
    </Modal>
  );
};

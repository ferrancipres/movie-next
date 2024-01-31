"use client";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { updateMovie } from "@/lib/movie.actions";
import { useRouter } from "next/navigation";

type AddMovieModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: {
    user: any;
    id: string;
  };
};

type FormValues = {
  name: string;
  genres: string[];
  score: string;
  poster_image: string;
};

export type FormProps = {
  name: string;
  genres: string[];
  score: string;
  poster_image: string;
  id?: string;
};

export const UpdateMovieModal: React.FC<AddMovieModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: FormProps) => {
    const userId = user.user.id;
    console.log();
    if (userId) await updateMovie(data, userId);
    router.refresh();
    handleCloseModal();
    reset();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <main className="modal-wrapper">
        <article className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <p className="form-text">Movie name:</p>
            <input
              type="text"
              placeholder="Example123"
              {...register("name", { required: true, max: 30, min: 1 })}
            />
            {errors.name && (
              <p className="error">
                Movie name is required and must be between 1 and 30 characters.
              </p>
            )}

            <p className="form-text">Genre:</p>
            <input
              type="test"
              placeholder="Action"
              {...register("genres", { required: true, max: 30 })}
            />
            {errors.genres && (
              <p className="error">
                Genre is required and must be less than 30 characters.
              </p>
            )}

            <p className="form-text">Score</p>
            <input
              type="number"
              placeholder="0 to 10"
              {...register("score", { required: true, max: 10, min: 0 })}
            />
            {errors.score && (
              <p className="error">
                Score is required and must be between 0 and 10.
              </p>
            )}

            <p className="form-text">Image</p>
            <input
              type="text"
              placeholder="imageUrl"
              {...register("poster_image", { required: false })}
            />

            <input type="submit" value="Submit" />
          </form>
        </article>
      </main>
    </Modal>
  );
};

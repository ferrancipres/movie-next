"use client";
import "./ModalButton.css";
import React, { useState } from "react";
import { AddMovieModal } from "../btn-add-movie/AddMovieModal";

const ModalButton = (user: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="btn__add__movie"
      >
        Add Movie
      </button>
      <AddMovieModal
        user={user}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ModalButton;

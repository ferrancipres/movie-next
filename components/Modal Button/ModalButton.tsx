"use client";
import React, { useState } from "react";
import { AddMovieModal } from "../Add Movie Modal/AddMovieModal";

function ModalButton(user: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="btn-container">
      <button onClick={handleOpenModal} className="add-movie-btn">
        Add Movie
      </button>
      <AddMovieModal
        user={user}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ModalButton;

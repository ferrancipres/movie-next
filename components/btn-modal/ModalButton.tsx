"use client";
import React, { useState } from "react";
import { AddMovieModal } from "../btn-add-movie/AddMovieModal";
import "./ModalButton.css";

export function ModalButton(user: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="btn-container">
      <button type="button" onClick={handleOpenModal} className="btn-add-movie">
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

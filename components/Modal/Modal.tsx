"use client";

import React from "react";
import "./Modal.css";
import { useState, useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn,
  onClose,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
      {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
          X
        </button>
      )}
      {children}
    </dialog>
  );
};

"use client";
import "./Modal.css";
import React, { useState, useEffect, useRef, FC } from "react";
import { MdOutlineClose } from "react-icons/md";

export type modalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const Modal: FC<modalProps> = ({
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
    <dialog
      ref={modalRef}
      className="modal__container"
      onKeyDown={handleKeyDown}
    >
      {hasCloseBtn && (
        <button type="button" className="btn__close" onClick={handleCloseModal}>
          <MdOutlineClose />
        </button>
      )}
      <h3 className="btn__description">Add your favourite movie: </h3>
      {children}
    </dialog>
  );
};

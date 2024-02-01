"use client";
import { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteMovie } from "@/lib/movie.actions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export type deleteProps = {
  id: string;
};

const handleDelete = async (id: string, router: AppRouterInstance) => {
  const res = await deleteMovie(id);
  if (typeof res === "string") return "Can't delete movie";
  if (typeof res !== "string") router.refresh();
};

const DeleteButton: FC<deleteProps> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => handleDelete(id, router);
  return (
    <button type="button" className="delete__btn" onClick={handleClick}>
      <FaRegTrashAlt color="red" fontSize="1.8em" />
    </button>
  );
};

export default DeleteButton;

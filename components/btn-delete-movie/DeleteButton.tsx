"use client";
import { deleteMovie } from "@/lib/movie.actions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  id: string;
};

const handleDelete = async (id: string, router: AppRouterInstance) => {
  const res = await deleteMovie(id);
  if (typeof res === "string") return "Can't delete movie";
  if (typeof res !== "string") router.refresh();
};

const DeleteButton: FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => handleDelete(id, router);
  return (
    <button type="button" className="delete__btn" onClick={handleClick}>
      <FaRegTrashAlt color="red" fontSize="1.8em" />
    </button>
  );
};

export default DeleteButton;

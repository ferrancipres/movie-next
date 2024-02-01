"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { updateMovie } from "@/lib/movie.actions";
import { FaEdit } from "react-icons/fa";

type Props = {
  id: string;
  data: any;
};

const handleUpdate = async (
  id: string,
  data: any,
  router: AppRouterInstance
) => {
  const res = await updateMovie(data);
  if (typeof res === "string") return "Can't update movie";
  if (typeof res !== "string") router.refresh();
};

const UpdateButton: FC<Props> = ({ id, data }) => {
  const router = useRouter();
  const handleClick = () => handleUpdate(id, data, router);
  return (
    <button className="delete__btn" onClick={handleClick}>
      <FaEdit fontSize="1.8em" />
    </button>
  );
};

export default UpdateButton;

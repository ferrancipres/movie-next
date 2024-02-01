"use client";
import { useEffect } from "react";

export type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Ups, Something went wrong</h2>
      <button type="button" onClick={() => reset()}>
        Try again.
      </button>
    </div>
  );
};

export default Error;

"use client"; // Error components must be Client Components

import { useEffect } from "react";

// https://nextjs.org/docs/app/building-your-application/routing/error-handling
export default function Error({
  error /*, reset,*/,
}: {
  error: Error /*, reset: () => void;*/;
}) {
  return (
    <div>
      <h2>Something went wrong upon login!</h2>
      <p>{`${error}`}</p>
    </div>
  );
}

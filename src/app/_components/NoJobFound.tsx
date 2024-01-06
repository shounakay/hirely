import React from "react";
import notFound from "../../../public/no-results.png";
import Image from "next/image";

export const NoJobFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="h-64 w-64">
        <Image src={notFound} alt="not-found-img" />
      </div>
      <div>
        <p className="text-xl text-neutral-400">
          Sorry, no jobs found per your search 😔
        </p>
      </div>
    </div>
  );
};

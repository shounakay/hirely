import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  name: string;
  avatarImg: StaticImageData;
  profession: string;
  quote: string;
};

export const TestimonialCard = ({
  avatarImg,
  name,
  profession,
  quote,
}: Props) => {
  return (
    <div className="flex w-72 flex-col justify-center gap-8 rounded-md border-2 border-neutral-500 bg-sky-200 px-6 py-4 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14">
          <Image src={avatarImg} alt="profile pic" className="rounded-[36px]" />
        </div>
        <div className=" flex flex-col gap-1">
          <p className="text-xs">{name}</p>
          <p className="text-xs">{profession}</p>
        </div>
      </div>
      <span className="inline-block text-3xl font-extrabold text-sky-800">
        "
      </span>
      <p className="text-sm">{quote}</p>
    </div>
  );
};

import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  cardInfo: string;
  cardImage: StaticImageData;
};

export const CategoryCard = ({ cardInfo, cardImage }: Props) => {
  return (
    <div className="flex max-h-min w-[340px] flex-col gap-6 rounded-md border-2 bg-slate-100 bg-transparent p-6 shadow-2xl">
      <Image src={cardImage} alt="category-image" />
      <h3 className=" text-center text-teal-800">{cardInfo}</h3>
    </div>
  );
};

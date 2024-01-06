import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  cardInfo: string;
  cardImage: StaticImageData;
};

export const CategoryCard = ({ cardInfo, cardImage }: Props) => {
  return (
    <div className=" bg-tarawera-600 flex w-[340px] flex-col gap-6 rounded-md  border-neutral-400 p-6 shadow-2xl">
      <Image src={cardImage} alt="category-image" />
      <h3 className="text-center text-neutral-50">{cardInfo}</h3>
    </div>
  );
};

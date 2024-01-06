import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export type Props = {
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
    <section className=" flex w-full flex-col items-center justify-center gap-8 px-6 py-4">
      <div className="h-24 w-24">
        <Image src={avatarImg} alt="profile pic" className="rounded-full" />
      </div>
      <div className="text-3xl font-extrabold text-sky-800">
        <BiSolidQuoteAltLeft />
      </div>
      <div className="px-6">
        <p>{quote}</p>
      </div>
      <div className=" flex flex-col gap-1">
        <p className="text-xs">{name}</p>
        <p className="text-xs">{profession}</p>
      </div>
      {/* <div className="flex items-center gap-4">
        <div className="h-14 w-14">
          <Image src={avatarImg} alt="profile pic" className="rounded-[36px]" />
        </div>
        <div className=" flex flex-col gap-1">
          <p className="text-xs">{name}</p>
          <p className="text-xs">{profession}</p>
        </div>
      </div>
      <span className="inline-block text-3xl font-extrabold text-sky-800">
        <BiSolidQuoteAltLeft value={{ color: "red", fontSize: "24px" }} />
      </span>
      <p className="text-sm">{quote}</p> */}
    </section>
  );
};

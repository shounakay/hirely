import React from "react";
import showcase from "../../../public/hirely-home-1.png";
import Image from "next/image";
import { courgette, montserrat } from "../(hirely)/layout";
import Link from "next/link";

export const HomeMetaInfo = () => {
  return (
    <section className=" bg-tarawera-950 flex h-[850px] w-full items-center justify-evenly py-6">
      <div className="xss:max-lg:px-12 flex flex-col gap-6 text-slate-600 lg:basis-[35%]">
        <h6 className={`xss:max-lg:text-[60px] text-3xl text-stone-50 `}>
          Discover the perfect match for your{" "}
          <span className=" text-tarawera-600 font-medium">
            career aspirations
          </span>{" "}
          with confidence as we connect you with companies that align with your{" "}
          <span className="text-downy-500 font-medium">skills and values</span>
        </h6>
        <div className="xss:max-lg:self-center">
          <Link href="/jobs">
            <button className="rounded-2xl bg-teal-600 px-4 py-2 text-xl font-medium text-neutral-100 transition-all hover:bg-teal-500">
              Explore Jobs{" "}
            </button>
          </Link>
        </div>
      </div>
      <aside className="xss:hidden basis-[35%] sm:self-center lg:block">
        <Image src={showcase} alt="showcase" width={500} height={500} />
      </aside>
    </section>
  );
};

import Link from "next/link";
import React from "react";

export const JobRow = ({
  name,
  salary,
  type,
  createdAt,
  jobDescription,
  domain,
  Company,
  id,
}: any) => {
  return (
    <Link href={`/jobs/${id}`}>
      <section className="hover:bg-congress-blue-200 bg-spring-rain-300 border-genoa-500 flex h-auto w-full flex-col justify-between gap-4 rounded-lg border-b-4 px-6 pb-6 pt-4 hover:cursor-pointer">
        <div className="flex basis-1/2 justify-between text-base text-neutral-500">
          <h4 className=" font-semibold">{name}</h4>
          <h2>{salary}</h2>
        </div>
        <p className="text-neutral-500">{jobDescription}</p>
        <div className="flex justify-between text-base text-neutral-500">
          <button className=" rounded-lg border-2 border-neutral-400 px-2 py-[2px] text-amber-600">
            {type}
          </button>
          <h2 className="font-medium">{Company.name}</h2>
        </div>
      </section>
    </Link>
  );
};

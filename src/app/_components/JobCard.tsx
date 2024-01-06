import { Company, Job } from "@prisma/client";
import React from "react";
import { getLogo } from "../utils/helper";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Link from "next/link";

const COLOR_LIST: {
  [x: string]: string;
} = {
  "Full Time": "bg-downy-200 text-downy-500 border-downy-500",
  "Part Time": "bg-calypso-100 text-calypso-600 border-calypso-600",
  Contract: "bg-astral-400 text-astral-600 border-astral-600",
};
export const JobCard = ({ job }: { job: Job & { company: Company } }) => {
  const logo = getLogo(job.company.name);
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="border-gallery-600 flex w-[300px] cursor-pointer flex-col gap-4 rounded-md border-[1px] p-3">
        <div className="flex items-center justify-between">
          <Image src={logo} width={50} height={20} alt="company" />
          <div
            className={`${
              COLOR_LIST[job.type]
            } rounded-lg border-[1px] px-2 py-1`}
          >
            {job.type}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium text-neutral-800">{job.name}</h4>
          <ul className="flex items-center gap-1">
            <li>{job?.company?.name}</li>
            <GoDotFill size={10} />
            <li>{job?.company?.location}</li>
          </ul>
        </div>
        <div className="text-downy-700 flex items-center gap-2">
          <FaIndianRupeeSign />
          <h4 className=" font-mono">{job.salary}</h4>
        </div>
      </div>
    </Link>
  );
};

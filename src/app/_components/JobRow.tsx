import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";

export const JobRow = ({
  name,
  salary,
  type,
  createdAt,
  jobDescription,
  domain,
  company,
  id,
}: any) => {
  return (
    <Link href={`/jobs/${id}`} key={id}>
      <section className="bg-tarawera-600 mb-6 flex h-auto w-full flex-col justify-between gap-4 rounded-lg px-6 pb-6 pt-4 hover:cursor-pointer">
        <div className="flex basis-1/2 justify-between text-base text-neutral-100">
          <h4 className="border-chrome-white-400 border-b-2 font-semibold">
            {name}
          </h4>
          <h2 className=" text-chrome-white-200 font-semibold">
            {company.name}
          </h2>
        </div>
        <p className="line-clamp-3 overflow-hidden px-4 text-neutral-300">
          {jobDescription}
        </p>
        <div className="flex justify-between text-base text-neutral-500">
          <div className="flex gap-4">
            <button className=" border-chrome-white-400 rounded-lg border-2 px-2 py-[2px] text-neutral-100">
              {type}
            </button>
            <button className=" border-chrome-white-400 rounded-lg border-2 px-2 py-[2px] text-neutral-100">
              {company.location}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <FaIndianRupeeSign />
            <h2 className="font-mono text-lg">{salary}</h2>
          </div>
        </div>
      </section>
    </Link>
  );
};

import { api } from "@/trpc/server";
import Image from "next/image";
import check from "../../../../../public/check.png";
import { GoDotFill } from "react-icons/go";
import health from "../../../../../public/healthcare-color.png";
import vacation from "../../../../../public/vacations.png";
import team from "../../../../../public/team-building.png";
import skill from "../../../../../public/skill.png";
import officeHome from "../../../../../public/home-office.png";
import { getLogo } from "@/app/utils/helper";
import { SimilarJobs } from "@/app/_components/SimilarJobs";
import { Company, Job as TJob } from "@prisma/client";

const COLOR_LIST = [
  {
    bg: "bg-calypso-300",
    text: "text-calypso-500",
  },
  {
    bg: "bg-amber-300",
    text: "text-amber-500",
  },
];

const Job = async ({ params }: { params: { id: string } }) => {
  const job = await api.jobs.getJobById.query(params.id);
  const similarJobs = await api.jobs.getSimilarJobs.query(
    job?.skills as string[],
  );
  const filteredSimilarJobs = similarJobs.filter(
    (item) => item.name !== job?.name,
  );
  console.log("similarJobs", similarJobs);
  const companyName = job?.company?.name;
  const logo = getLogo(companyName as string);

  const img = (
    <Image
      src={check}
      alt="check"
      // width={}
      // height={20}
      // layout="fill"
      // objectFit="contain"
    />
  );
  return (
    <section className="bg-astral-200 flex min-h-full w-full flex-col gap-14 px-36 py-24">
      <article className="border-l-gallery-300 bg-chrome-white-100  flex w-[800px] items-center justify-between self-center rounded-sm border-0 px-6 py-4">
        <div className="flex gap-4">
          <div className="h-14 w-14">
            <Image src={logo} alt="company-logo" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{job?.name}</h3>
            <ul className=" flex items-center gap-1">
              <GoDotFill size={10} />
              <li>{job?.company?.name}</li>
              <GoDotFill size={10} />
              <li>{job?.company?.location}</li>
              <GoDotFill size={10} />
              <li>{job?.type}</li>
            </ul>
          </div>
        </div>
        <button className="bg-astral-800 h-12 rounded-md px-2 py-1 text-neutral-100">
          Apply Now
        </button>
      </article>
      <section className="flex w-full flex-wrap justify-between gap-12">
        <article className="flex basis-[60%] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Description</h4>
            <p className="text-justify text-lg text-neutral-700">
              {job?.company?.about}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Responsibilites</h4>
            <div className="flex flex-col gap-2">
              {job?.jobDescription.map((jd) => {
                return (
                  <div key={jd} className="flex items-center gap-3">
                    <div className="">{img}</div>
                    <div>{jd}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">Nice To Haves</h4>
            <div className="flex flex-col gap-2">
              {job?.niceToHave.map((extraQual) => {
                return (
                  <div key={extraQual} className="flex items-center gap-3">
                    <div className="">{img}</div>
                    <div>{extraQual}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
        <article className="flex basis-[30%] flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h4 className="text-2xl font-semibold text-neutral-800">
              About this role
            </h4>
            <div className="flex gap-4 text-neutral-800">
              <h3 className=" min-w-32 font-medium">Job posted on</h3>
              <h4 className="text-neutral-600">
                {job?.createdAt.toDateString()}
              </h4>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <h3 className="min-w-32 font-medium">Job Type</h3>
              <h4 className="text-neutral-600">{job?.type}</h4>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <h3 className="min-w-32 font-medium">Job Level</h3>
              <h4 className="text-neutral-600">{job?.level}</h4>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <h3 className="min-w-32 font-medium">Location</h3>
              <h4 className="text-neutral-600">{job?.company?.location}</h4>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <h3 className="min-w-32 font-medium">Salary</h3>
              <h4 className="font-mono text-base text-neutral-600">
                {job?.salary}
              </h4>
            </div>
          </section>
          <div className="border-[1px] border-neutral-400"></div>
          <section className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold text-neutral-800">
              Categories
            </h4>
            <div className="flex gap-4">
              {job?.domain.map((domain: string, index) => {
                return (
                  <div
                    className={` ${COLOR_LIST[index]?.bg} ${COLOR_LIST[index]?.text} text-medium rounded-2xl px-2 py-1`}
                  >
                    {domain}
                  </div>
                );
              })}
            </div>
          </section>
          <div className="border-[1px] border-neutral-400"></div>
          <section className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold text-neutral-800">
              Required Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {job?.skills.map((skill) => {
                return (
                  <div className="text text-medium rounded-md bg-crail-300 px-2 py-1 text-crail-600">
                    {skill}
                  </div>
                );
              })}
            </div>
          </section>
        </article>
      </section>
      <section className="flex flex-col gap-6 py-4">
        <div className="border-[1px] border-neutral-500" />
        <div className="flex flex-col gap-1">
          <h6 className="mt-4 text-2xl font-semibold text-neutral-800">
            Perks and Benefits
          </h6>
          <h4 className="text-base text-neutral-500">
            The jobs comes with several perks and benefits
          </h4>
        </div>
        <div className="flex w-full flex-wrap items-center gap-8">
          <div className="flex basis-1/4 flex-col gap-3">
            <Image src={health} alt="health" className="" />
            <h4 className="text-xl font-medium text-neutral-800">HealthCare</h4>
            <p className="font-normal text-neutral-700">
              We beleive in thriving communities and that starts with our team
              being happy and healthy.
            </p>
          </div>
          <div className="flex basis-1/4 flex-col gap-3">
            <Image src={vacation} alt="vacation" className="" />
            <h4 className="text-xl font-medium text-neutral-800">
              Unlimited Vacations
            </h4>
            <p className="font-normal text-neutral-700">
              We beleive you should have a flexible schedule that makes space
              for family, welness and fun 😄
            </p>
          </div>
          <div className="flex basis-1/4 flex-col gap-3">
            <Image src={team} alt="team" className="" />
            <h4 className="text-xl font-medium text-neutral-800">
              Team Summit
            </h4>
            <p className="font-normal text-neutral-700">
              Every six months we have a full teams summit where we have fun,
              reflect and plan for the upcoming quarter.
            </p>
          </div>
          <div className="flex basis-1/4 flex-col gap-3">
            <Image src={skill} alt="skill" className="" />
            <h4 className="text-xl font-medium text-neutral-800">
              Skill Development
            </h4>
            <p className="font-normal text-neutral-700">
              We beleive in always learning and leveling up our skills, whether
              it is a conference or a online course.
            </p>
          </div>
          <div className="flex basis-1/4 flex-col gap-3">
            <Image src={officeHome} alt="skill" className="" />
            <h4 className="text-xl font-medium text-neutral-800">
              Remote Work
            </h4>
            <p className="font-normal text-neutral-700">
              You know how you perform your best work. Work from home, coffee,
              shop or anywhere when you feel like it.
            </p>
          </div>
        </div>
      </section>
      {filteredSimilarJobs?.length && (
        <SimilarJobs
          similarJobs={filteredSimilarJobs as (TJob & { company: Company })[]}
        />
      )}
    </section>
  );
};

export default Job;

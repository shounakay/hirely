import { Company, Job } from "@prisma/client";
import React from "react";
import { JobCard } from "./JobCard";

export const SimilarJobs = ({
  similarJobs,
}: {
  similarJobs: (Job & { company: Company })[];
}) => {
  return (
    <section className="flex flex-col gap-5 py-8">
      <div className="border-[1px] border-neutral-600" />
      <h6 className="mt-5 text-2xl font-semibold text-neutral-800">
        Similar Jobs
      </h6>
      <article className="flex flex-wrap gap-5">
        {similarJobs.map((simJob) => {
          return <JobCard job={simJob} />;
        })}
      </article>
    </section>
  );
};

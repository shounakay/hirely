import { api } from "@/trpc/server";
import React from "react";
import { JobRow } from "../../_components/JobRow";

const AllJobsPage = async () => {
  const allJobs = await api.getAllJobs.query();
  console.log("all Jobs", allJobs);
  return (
    <section className="flex min-h-full flex-col items-center gap-8 bg-stone-300 px-4 py-14">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search for skills, role, etc"
          name="jobSearch"
          className="w-72 rounded-lg border-2 px-1 py-1"
        />
        <button className=" rounded-md bg-sky-700 px-6 py-1 text-sm text-stone-100 hover:bg-sky-300">
          Search
        </button>
      </div>
      <article className="mx-auto w-[800px]">
        {allJobs.map((job) => (
          <JobRow {...job} />
        ))}
      </article>
    </section>
  );
};

export default AllJobsPage;

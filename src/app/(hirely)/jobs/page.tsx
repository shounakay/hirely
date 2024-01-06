import { api } from "@/trpc/server";
import React from "react";
import { JobRow } from "../../_components/JobRow";
import { getServerAuthSession } from "@/server/auth";
import { JobSearch } from "@/app/_components/JobSearch";

const AllJobsPage = async () => {
  const session = await getServerAuthSession();
  console.log("session in jobs page", session);
  // const allJobs = await api.jobs.getAllJobs.query();
  return (
    <section className="bg-foam-100 flex min-h-full flex-col items-center gap-8 px-4 py-14">
      <div>
        <h4 className="text-2xl font-semibold text-neutral-700">
          Find your{" "}
          <span className=" border-b-4 border-spring-rain-500 bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent">
            dream job
          </span>
        </h4>
      </div>
      <JobSearch />
    </section>
  );
};

export default AllJobsPage;

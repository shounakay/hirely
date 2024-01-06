"use client";

import { api } from "@/trpc/react";
import { useMemo, useState } from "react";
import { JobRow } from "./JobRow";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoJobFound } from "./NoJobFound";
import { RxCrossCircled } from "react-icons/rx";
import { Pagination } from "./Pagination";

const searchFormSchema = z.object({
  search: z.string(),
});

type TSearchSchema = z.infer<typeof searchFormSchema>;

export const JobSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const { register, handleSubmit } = useForm<TSearchSchema>({
    resolver: zodResolver(searchFormSchema),
  });
  //   const {
  //     data: allData,
  //     isError: isAllError,
  //     isLoading: isAllLoading,
  //     isFetching: isAllFetching,
  //     status: allStatus,
  //   } = api.jobs.getAllJobs.useQuery();

  function handlePageChange(prev: boolean = false) {
    console.log("handlePageChange");
    if (prev) {
      setPageNum((prev) => prev - 1);
    } else {
      setPageNum((prev) => prev + 1);
    }
  }

  //   const { data, isError, isLoading, isFetching, status } =
  //     api.jobs.searchByKeyword.useQuery(searchText, { enabled: !!searchText });

  const { data, isFetching, isSuccess, isError, status } =
    api.jobs.getPaginatedJobs.useQuery({
      pageNum,
      pageSize: 10,
      keyword: searchText,
    });

  console.log("hey you", {
    data,
    isFetching,
    isSuccess,
    status,
  });

  const onSubmit = (data: TSearchSchema) => {
    const inputText = data.search;
    setSearchText(inputText);
  };

  //   const { jobsData, isJobsLoading, isJobsError, isJobsStatus } = useMemo(() => {
  //     return {
  //       jobsData: data ?? allData,
  //       isJobsLoading: isAllFetching || isFetching,
  //       isJobsError: isAllError || isError,
  //       isJobsStatus: allStatus === "success" && status === "success",
  //     };
  //   }, [
  //     allData,
  //     isAllLoading,
  //     isAllFetching,
  //     allStatus,
  //     isAllError,
  //     data,
  //     isError,
  //     isLoading,
  //     isFetching,
  //     status,
  //   ]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex gap-4">
        <input
          {...register("search")}
          type="text"
          placeholder="Search for skills, role, etc"
          className="focus:outline-pattens-blue-500 h-12 w-96 min-w-0 rounded-lg border-2 px-2 py-1"
        />
        <button
          onClick={() => setSearchText("")}
          className={`absolute left-[360px] top-[16px] cursor-pointer `}
        >
          <RxCrossCircled />
        </button>
        <button
          type="submit"
          className=" bg-foam-500 rounded-md px-6 py-1 text-lg text-stone-900 hover:bg-sky-300"
        >
          Search
        </button>
      </form>
      <div className="-mt-4 text-left">
        <p className="text-sm text-neutral-500">
          Popular: UX Designer/ Full Stack Engineer/ Front End Engineer / Sales
          Executive
        </p>
      </div>
      <article className="mx-auto min-h-[600px] w-[800px]">
        {!isSuccess && isFetching && !isError ? (
          <div className="loader relative h-40 w-40">
            <div className="absolute inset-0 animate-spin bg-gradient-to-tl from-teal-500 via-teal-500 to-teal-500"></div>
          </div>
        ) : isSuccess && !data?.jobs?.length ? (
          <NoJobFound />
        ) : (
          data?.jobs.map((job: any) => <JobRow {...job} key={job.id} />)
        )}
      </article>
      <Pagination
        pageNum={pageNum}
        pageSize={10}
        setPageNum={setPageNum}
        totalSize={data?.totalCount}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

// /* HTML: <div class="loader"></div> */
// .loader {
//     width: 40px;
//     aspect-ratio: 1;
//     color: #f03355;
//     position: relative;
//     background: radial-gradient(10px,currentColor 94%,#0000);
//   }
//   .loader:before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     border-radius: 50%;
//     background:
//       radial-gradient(9px at bottom right,#0000 94%,currentColor) top    left,
//       radial-gradient(9px at bottom left ,#0000 94%,currentColor) top    right,
//       radial-gradient(9px at top    right,#0000 94%,currentColor) bottom left,
//       radial-gradient(9px at top    left ,#0000 94%,currentColor) bottom right;
//     background-size: 20px 20px;
//     background-repeat: no-repeat;
//     animation: l18 1.5s infinite cubic-bezier(0.3,1,0,1);
//   }
//   @keyframes l18 {
//      33%  {inset:-10px;transform: rotate(0deg)}
//      66%  {inset:-10px;transform: rotate(90deg)}
//      100% {inset:0    ;transform: rotate(90deg)}
//   }

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { number, z } from "zod";

export const jobsRouter = createTRPCRouter({
  getAllJobs: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.db.job.findMany({ include: { company: true } });
    return jobs;
  }),
  getJobById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const job = await ctx.db.job.findUnique({
        where: {
          id: input,
        },
        include: {
          company: true,
        },
      });
      return job;
    }),
  getPaginatedJobs: publicProcedure
    .input(
      z.object({
        pageNum: z.number(),
        pageSize: z.number(),
        keyword: z.string(),
      }),
    )
    .query(async (opts) => {
      const {
        ctx: { db },
        input: { pageNum, pageSize, keyword },
      } = opts;
      const [jobs, totalCount] = await Promise.all([
        // Get paginated jobs
        db.job.findMany({
          skip: (pageNum - 1) * pageSize,
          take: pageSize,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            company: true,
          },
          ...(keyword && {
            where: {
              OR: [
                { name: { contains: keyword, mode: "insensitive" } },
                { salary: { contains: keyword, mode: "insensitive" } },
                { type: { contains: keyword, mode: "insensitive" } },
                { domain: { has: keyword } }, // Search within the domain array
                // Add more conditions for other columns as needed
              ],
            },
          }),
        }),
        // Get the total count of jobs
        db.job.count(),
      ]);
      return { jobs, totalCount };
    }),
  postJob: publicProcedure
    .input(
      z.object({
        name: z.string(),
        salary: z.string(),
        type: z.string(),
        jobDescription: z.string(),
        domain: z.string(),
      }),
    )
    .mutation(async (opts) => {
      console.log("opts mutation", opts);
    }),
  getSimilarJobs: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ ctx, input }) => {
      const skillArray = [...input];
      const similarJobs = await ctx.db.job.findMany({
        where: {
          skills: {
            hasSome: skillArray,
          },
        },
        include: {
          company: true,
        },
      });
      return similarJobs;
    }),
  searchByKeyword: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input: keyword }) => {
      const { db } = ctx;
      const matchingJobs = await db.job.findMany({
        where: {
          OR: [
            { name: { contains: keyword, mode: "insensitive" } },
            { salary: { contains: keyword, mode: "insensitive" } },
            { type: { contains: keyword, mode: "insensitive" } },
            // { jobDescription: { contains: keyword, mode: "insensitive" } },
            { domain: { has: keyword } }, // Search within the domain array
            // Add more conditions for other columns as needed
          ],
        },
      });
      return matchingJobs;
    }),
});

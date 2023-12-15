import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const jobsRouter = createTRPCRouter({
  getAllJobs: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.db.job.findMany({ include: { Company: true } });
    console.log("server jobs", jobs);
    return jobs;
  }),
  getJobById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const job = await ctx.db.job.findUnique({
        where: {
          id: input,
        },
      });
      return job;
    }),
});

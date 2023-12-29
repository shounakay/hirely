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
          ID: input,
        },
      });
      return job;
    }),
    postJob: publicProcedure.input(z.object({name: z.string(), salary: z.string(), type: z.string(), jobDescription: z.string(), domain: z.string()})).mutation(async (opts) => {
      console.log('opts mutation', opts);

    })
});

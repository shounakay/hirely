import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
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

// export type definition of API
export type AppRouter = typeof appRouter;

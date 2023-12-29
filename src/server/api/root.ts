import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { jobsRouter } from "./routers/jobs";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  jobs: jobsRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

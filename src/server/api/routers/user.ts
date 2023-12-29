import { signUpFormSchema } from "@/app/utils/types";
import { createTRPCRouter, publicProcedure } from "../trpc";
import * as encrypt from "bcrypt";

export const userRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(signUpFormSchema)
    .mutation(async (opts) => {
      const {
        input,
        ctx: { db },
      } = opts;
      const { email, password } = input;
      const hashedPassword = await encrypt.hash(password, 10);
      const result = await db.user.create({
        data: { email, password: hashedPassword },
      });
      return result;
    }),
});

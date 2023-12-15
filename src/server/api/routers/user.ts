import { createTRPCRouter, publicProcedure } from "../trpc";
import { signUpFormSchema } from "../../../app/_components/form/SignupForm";
import * as encrypt from "bcrypt";

export const userRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(signUpFormSchema)
    .mutation(async (opts) => {
      const {
        input,
        ctx: { db },
      } = opts;
      const result = signUpFormSchema.safeParse(input);
      const { email, password } = input;
      const hashedPassword = await encrypt.hash(password, 10);
      const user = await db.user.create({
        data: { email, password: hashedPassword },
      });
      return user;
    }),
});

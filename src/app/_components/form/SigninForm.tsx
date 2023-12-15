"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInFormSchema = z.object({
  username: z.string().min(12),
  password: z.string(),
});

type TSignInFormSchema = z.infer<typeof signInFormSchema>;

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });
  const onSubmit = (data: TSignInFormSchema) => {
    console.log("data", data);
  };
  return (
    <section className="flex h-72 min-h-fit basis-2/5 justify-center self-center rounded-md bg-stone-100 py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex basis-3/4 flex-col items-start gap-1 px-4 py-4"
      >
        {/* <div className="flex"> */}
        <label className=" text-left text-base">Email</label>
        <input
          {...register("username")}
          className="w-56 min-w-0 rounded-md px-1 py-1"
          type="text"
          placeholder=""
        />
        {errors.username && (
          <span className="text-sm text-red-400">
            {errors.username.message}
          </span>
        )}
        {/* </div> */}
        <label className="text-base">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-56 min-w-0 rounded-md px-1 py-1"
        />
        {errors.password && (
          <span className=" text-sm text-red-400">Password is missing</span>
        )}
        {errors.password && (
          <div className=" text-xs text-red-400">{errors.password.message}</div>
        )}
        {/* <button type="submit">asas</button> */}
        <button
          type="submit"
          // disabled={isSubmitting}
          className="bg-monte-carlo-500 hover:bg-monte-carlo-400 ml-14 mt-4 rounded-md border-2 border-neutral-800 px-6 py-1 text-stone-100 hover:border-neutral-200 hover:text-stone-900"
        >
          Submit
        </button>
        <p className="mt-4">
          Not yet registered ?{" "}
          <Link className="text-monte-carlo-500 " href="/singup">
            Sign Up
          </Link>{" "}
          from here.
        </p>
      </form>
    </section>
  );
};

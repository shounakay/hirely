"use client";

import { TSignUpFormSchema, signUpFormSchema } from "@/app/utils/types";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export const SignupForm = () => {
  const { mutate, error, isError } = api.user.registerUser.useMutation();
  const {
    register,
    getValues,
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: TSignUpFormSchema) => {
    const result = mutate(data);
    console.log("result", result);
    reset();
    router.push("/api/auth/signin");
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-80 w-56">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label className="text-base">Email</label>
        <input
          {...register("email")}
          className="rounded-md px-1 py-1"
          type="email"
          placeholder="johndoe@gmail.com"
        />
        {errors.email && (
          <span className=" text-xs text-red-400">
            {`${errors.email.message}`}
          </span>
        )}
        <label className="text-base">Password</label>
        <input
          {...register("password")}
          type="password"
          className=" rounded-md px-1 py-1"
        />
        {errors.password && (
          <div className=" text-xs text-red-400">{errors.password.message}</div>
        )}
        <label className="text-base">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          className=" rounded-md px-1 py-1"
        />
        {errors.confirmPassword && (
          <span className=" text-xs text-red-400">
            {errors.confirmPassword.message}
          </span>
        )}
        {/* <button type="submit">asas</button> */}
        <button
          type="submit"
          // disabled={isSubmitting}
          className="w-full rounded-md border-2 border-neutral-800 bg-monte-carlo-500 px-2 py-1 text-stone-100 hover:border-neutral-200 hover:bg-monte-carlo-400 hover:text-stone-900"
        >
          Submit
        </button>
      </form>
      <p className="mt-4">
        Already signed up ? Please{" "}
        <Link href="/signin" className="text-monte-carlo-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

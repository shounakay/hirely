"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z.string().email("Please enter a valid Email"),
    password: z.string().min(10, "Has to be atleast 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword !== data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const SignupForm = async () => {
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

  const onSubmit = async (data: any) => {
    // data.preventDefault();
    console.log("data", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  console.log("erros", errors);

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
          className="bg-monte-carlo-500 hover:bg-monte-carlo-400 w-full rounded-md border-2 border-neutral-800 px-2 py-1 text-stone-100 hover:border-neutral-200 hover:text-stone-900"
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

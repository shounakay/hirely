"use client";

import { TSignInFormSchema, signInFormSchema } from "@/app/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Link from "next/link";
import { FC, useMemo } from "react";
import { LiteralUnion, useForm } from "react-hook-form";
import { DiGithubBadge } from "react-icons/di";

export const SigninForm: FC<{
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}> = ({ providers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });
  const onSubmit = async (data: TSignInFormSchema) => {
    console.log("data", data);
    const sign = await signIn("credentials", {
      email: data.username,
      password: data.password,
      // redirect: true,
      callbackUrl: "/",
    });
    console.log("signin form submmit", sign);
  };
  const providersList = useMemo(
    () => Object.entries(providers as {}),
    [providers],
  );
  return (
    <section className="bg-gallery-100 flex h-auto basis-[30%] items-center justify-center self-center rounded-md py-4">
      <div className="basis-3/4 space-y-1 px-3">
        {providersList.map((provider) => {
          if (provider[0] !== "credentials") {
            return (
              <div className="px-8 py-4" key={provider[0]}>
                <button
                  onClick={() =>
                    signIn((provider[1] as any).id, { callbackUrl: "/" })
                  }
                  className="flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-lg font-medium text-neutral-100  transition-all hover:bg-neutral-600"
                >
                  <span>
                    <DiGithubBadge size={35} />
                  </span>
                  {`Sign in with ${(provider[1] as any).name}`}
                </button>
              </div>
            );
          }
          return (
            <form
              onSubmit={handleSubmit(onSubmit)}
              key={provider[0]}
              className="flex flex-col items-start gap-1 px-8 py-4"
            >
              <label className=" text-base">Email</label>
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
              <label className="text-base">Password</label>
              <input
                {...register("password")}
                type="password"
                className="w-56 min-w-0 rounded-md px-1 py-1"
              />
              {errors.password && (
                <span className=" text-sm text-red-400">
                  Password is missing
                </span>
              )}
              {errors.password && (
                <div className=" text-xs text-red-400">
                  {errors.password.message}
                </div>
              )}
              <button
                type="submit"
                // disabled={isSubmitting}
                className="mt-4 rounded-md border-2 border-neutral-800 bg-monte-carlo-500 px-6 py-1 text-xl font-medium text-neutral-100 hover:border-neutral-200 hover:bg-monte-carlo-400 hover:text-neutral-900"
              >
                {`Sign in with ${(provider[1] as any).type}`}
              </button>
              <p className="mt-4">
                Not yet registered ?{" "}
                <Link className="text-monte-carlo-500 " href="/signup">
                  Sign Up
                </Link>{" "}
                from here.
              </p>
            </form>
          );
        })}
      </div>
    </section>
  );
};

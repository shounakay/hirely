import Image from "next/image";
import Link from "next/link";
import hirelyLogo from "../../../public/hirely-main.png";
import { MdCopyright } from "react-icons/md";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <footer className="mt-auto flex w-full flex-col items-center justify-center gap-7 bg-neutral-800 p-14 px-12 py-8">
        <div className="flex basis-1/4 flex-col gap-1">
          <Image
            src={hirelyLogo}
            alt="hirely"
            width={50}
            height={50}
            className="self-center"
          />
          <h4 className="self-center font-mono text-lg font-semibold text-neutral-200">
            Hirely
          </h4>
          <p className="w-96 text-justify font-sans text-base font-medium text-neutral-400">
            Great platform for job seeker that is passionate about start ups.
            Find your dream job with ease.
          </p>
        </div>
        <div className="flex h-auto w-[700px] flex-row flex-wrap justify-around px-4">
          <Link
            href="/"
            className="hover:text-tarawera-600 hover:border-tarawera-600 border-b-[1px] border-neutral-200 text-neutral-200 transition-all"
          >
            Home
          </Link>
          <Link
            className="hover:text-tarawera-600 hover:border-tarawera-600 border-b-[1px] border-neutral-200 text-neutral-200 transition-all"
            href="/jobs"
          >
            All Jobs
          </Link>
          <Link
            className="hover:text-tarawera-600 hover:border-tarawera-600 border-b-[1px] border-neutral-200 text-neutral-200 transition-all"
            href="/auth/signin"
          >
            Sign In
          </Link>
          <Link
            className="hover:text-tarawera-600 hover:border-tarawera-600 border-b-[1px] border-neutral-200 text-neutral-200 transition-all"
            href="/auth/signup"
          >
            Sign Up
          </Link>
        </div>
        <div className="w-[800px] border-[1px] border-neutral-400" />
        <h4 className="flex items-center gap-1 font-mono text-base font-light text-neutral-400">
          2024
          <span>
            <MdCopyright />
          </span>
          Shounak Chavan
        </h4>
      </footer>
    </>
  );
};

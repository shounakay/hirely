import Link from "next/link";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <footer className="mt-auto flex w-full items-center justify-between bg-slate-700 p-14 px-12 py-6">
        <Link href="/">Hirely</Link>
        <div className="flex h-auto w-32 flex-wrap justify-between px-4">
          <Link href="/jobs">Jobs</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/jobs">Jobs</Link>
        </div>
      </footer>
    </>
  );
};

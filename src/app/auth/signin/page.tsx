import { SigninForm } from "@/app/_components/form/SigninForm";
import { getProviders } from "next-auth/react";

const SigninPage = async () => {
  const providers = await getProviders();
  return (
    <main className="flex min-h-full flex-col justify-center gap-14">
      <section className="self-center px-14 text-center font-mono text-[40px] text-neutral-200">
        <div>
          <h4>
            Unlock{" "}
            <span className=" from-tarawera-300 to-calypso-400 inline-block bg-gradient-to-r bg-clip-text text-transparent">
              personalized recommendations
            </span>{" "}
            and effortlessly track your job applications by signing in.
          </h4>
        </div>
      </section>
      <article className="flex min-h-full w-full justify-center">
        <SigninForm providers={providers} />
      </article>
    </main>
  );
};

export default SigninPage;

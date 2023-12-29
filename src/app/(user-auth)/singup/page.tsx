import { SignupForm } from "@/app/_components/form/SignupForm";

const SigninPage = () => {
  return (
    <main className="h-full">
      <section className="relative h-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-96 w-2/5 rounded-md bg-slate-100">
          <SignupForm />
        </div>
      </section>
    </main>
  );
};

export default SigninPage;

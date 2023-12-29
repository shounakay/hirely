import { SigninForm } from "@/app/_components/form/SigninForm";
import { getProviders } from "next-auth/react";

const SigninPage = async () => {
  const providers = await getProviders();
  return (
    <main className="align-center flex min-h-full justify-center">
      {/* <article className=""> */}
      <SigninForm providers={providers} />
      {/* </article> */}
    </main>
  );
};

export default SigninPage;

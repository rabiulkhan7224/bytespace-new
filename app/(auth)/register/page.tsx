import type { Metadata } from "next";
import { AuthShell } from "@/components/sections/auth/AuthShell";
import { RegisterVisual } from "@/components/sections/auth/RegisterVisual";
import { RegisterForm } from "@/components/sections/auth/RegisterForm";
import { REGISTER } from "@/content/auth";

export const metadata: Metadata = {
  title: "Create your account — ByteSpace",
  description: "Sign up for ByteSpace and start learning or creating.",
};

export default function RegisterPage() {
  return (
    <div className="">
      <AuthShell
        heading={REGISTER.left.heading}
        body={REGISTER.left.body}
        visual={<RegisterVisual />}
      >
        <RegisterForm />
      </AuthShell>
    </div>
  );
}

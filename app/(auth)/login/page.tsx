import type { Metadata } from "next";
import { AuthShell } from "@/components/sections/auth/AuthShell";
import { AuthVisual } from "@/components/sections/auth/AuthVisual";
import { LoginForm } from "@/components/sections/auth/LoginForm";
import { LOGIN } from "@/content/auth";

export const metadata: Metadata = {
  title: "Sign in — ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      heading={LOGIN.left.heading}
      body={LOGIN.left.body}
      visual={<AuthVisual />}
    >
      <LoginForm />
    </AuthShell>
  );
}

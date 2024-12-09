import { SignIn } from "@clerk/clerk-react";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex item-center justify-center h-[calc(100vh)] ">
      <SignIn signUpUrl="/register" />
    </div>
  );
}

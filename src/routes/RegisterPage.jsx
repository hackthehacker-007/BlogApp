import { SignUp } from "@clerk/clerk-react";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex item-center justify-center h-[calc(100vh)] ">
      <SignUp signUpUrl="/register" />
    </div>
  );
}

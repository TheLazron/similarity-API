"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignOutButtonProps {}

const SignOutButton = ({}: SignOutButtonProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please  try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignOutButton;

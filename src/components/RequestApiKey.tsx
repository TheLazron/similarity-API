"use client";

import { FormEvent, useState } from "react";
import { toastComponent } from "./ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import { Key } from "lucide-react";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Input from "./ui/Input";
import CopyButton from "./CopyButton";

const RequestApiKey = (): JSX.Element => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generateApiKey = await createApiKey();
      setApiKey(generateApiKey);
    } catch (err) {
      if (err instanceof Error) {
        toastComponent({
          title: "Error",
          message: err.message,
          type: "error",
        });
        return;
      }
      toastComponent({
        title: "Error",
        message: "Error generating api key",
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <LargeHeading className="text-center">
          Request your API Key
        </LargeHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-start"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;

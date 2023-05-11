"use client";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { toastComponent } from "./ui/Toast";
import Button from "./ui/Button";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton = ({
  valueToCopy,
  className,
  ...props
}: CopyButtonProps): JSX.Element => {
  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toastComponent({
          title: "Copied",
          message: "API key copied to clipboard",
          type: "success",
        });
      }}
      variant="ghost"
      className={cn("", className)}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;

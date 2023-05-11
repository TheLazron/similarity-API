import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { size } from "lodash";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva(
  "max-width-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

// const Paragraph = ({}: ParagraphProps): JSX.Element => {
//   return <p>Hello</p>;
// };

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { className, size, children, ...props }: ParagraphProps,
    ref
  ): JSX.Element => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size }), className)}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;

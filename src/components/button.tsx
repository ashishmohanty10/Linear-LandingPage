import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

interface ButtonProps extends VariantProps<typeof buttonClass> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClass = cva(
  "rounded-full inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary",
        secondary: "",
        tertiary: "",
      },
      size: {
        small: "text-xs px-3  h-7",
        medium: "text-sm px-4 h-8",
        large: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const Button = ({
  children,
  href,
  className,
  variant,
  size,
}: ButtonProps) => {
  return (
    <Link href={href} className={cn(buttonClass({ variant, size }), className)}>
      {children}
    </Link>
  );
};

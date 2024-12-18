import { cn } from "@/utils/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`max-w-[120rem] mx-auto`, className)}>{children}</div>
  );
};

import { cn } from "@/utils";

export function TransparentTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-[200px]/none hidden lg:block font-bold opacity-[0.02]", className)}
      {...props}
    />
  );
}

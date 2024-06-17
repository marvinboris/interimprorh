import { cn } from "@/utils";

export function SectionTitle({
    className,
    big,
    ...props
}: React.ComponentProps<"h3"> & { big?: boolean }) {
    return (
        <h3
            className={cn(
                "font-bold *:text-primary text-center lg:text-left",
                big
                    ? "text-5xl/tight lg:text-[90px]/tight"
                    : "text-4xl/tight lg:text-6xl/tight",
                className
            )}
            {...props}
        />
    );
}

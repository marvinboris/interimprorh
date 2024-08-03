import React from "react";
import { cn } from "../../utils";
import { Transition } from "./transition";

export function Loading({
    relative,
    show = true,
    className,
    ...props
}: { relative?: boolean; show?: boolean } & React.ComponentProps<"div">) {
    return (
        <Transition show={show}>
            <div
                {...props}
                className={cn(
                    relative ? "relative" : "absolute inset-0",
                    "z-10 flex items-center justify-center",
                    className
                )}
            >
                <div className="w-20 md:w-24 h-20 md:h-24 rounded-full border-4 md:border-[7px] border-primary border-t-primary/20 animate-spin" />
            </div>
        </Transition>
    );
}

import { cn } from "@/utils";
import React from "react";

export function FormSteps({
    options,
    active,
}: {
    options: React.ReactNode[];
    active: number;
}) {
    return options.map((option, index) => (
        <React.Fragment key={"step-step-" + index}>
            {active !== index + 1 ? (
                <div className="absolute opacity-0 inset-0 -z-10">{option}</div>
            ) : (
                option
            )}
        </React.Fragment>
    ));
}

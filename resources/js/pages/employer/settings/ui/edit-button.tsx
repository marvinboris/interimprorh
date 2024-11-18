import { Edit2 } from "iconsax-react";
import React from "react";

export default function EditButton(props: React.ComponentProps<"button">) {
    return (
        <button
            {...props}
            type="button"
            className="size-9 bg-primary text-white rounded-lg inline-flex justify-center items-center"
        >
            <Edit2 className="size-4" />
        </button>
    );
}

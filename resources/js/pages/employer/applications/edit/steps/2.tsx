import { TextArea } from "@/components";
import { useJob } from "../context";

export function Step2() {
    const { application } = useJob();

    return (
        <div className="col-span-6 lg:w-2/3">
            <TextArea
                name="description"
                label="Job description"
                defaultValue={application?.description}
            />
        </div>
    );
}

import { TeamMember } from "@types";
import Facebook from "./icons/facebook";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";
import { Transition } from "@/components";
import { cn } from "@/utils";
import { useWindowSize } from "@/hooks";

export default function Block({
    job,
    name,
    photo,
    facebook = "//facebook.com",
    linkedin = "//linkedin.com",
    twitter = "//twitter.com",
    index,
}: TeamMember & { index: number }) {
    const { width } = useWindowSize();

    const active = (width && width < 1024) || index === 1;

    return (
        <div
            className={cn(
                "border-4 rounded-[32px] bg-white flex flex-col items-center text-center relative px-10 pt-8 pb-16",
                active ? "border-transparent" : "border-primary/10"
            )}
        >
            <img
                src={photo}
                alt={name}
                className={cn(
                    "border-8 border-stone-100 rounded-full object-cover",
                    active ? "size-44" : "size-32"
                )}
            />

            <div className="mt-9 text-xl font-bold">{name}</div>

            <div className="mt-5">{job}</div>

            <Transition show={active}>
                <div className="lg:absolute bottom-0 translate-y-1/2 rounded-full inline-flex p-5 gap-5 *:bg-primary *:rounded-full *:size-11 *:*:size-6 *:flex *:items-center *:justify-center text-white bg-stone-100">
                    <a target="_blank" href={facebook}>
                        <Facebook />
                    </a>
                    <a target="_blank" href={linkedin}>
                        <Linkedin />
                    </a>
                    <a target="_blank" href={twitter}>
                        <Twitter />
                    </a>
                </div>
            </Transition>
        </div>
    );
}

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
    facebook,
    linkedin,
    twitter,
    index,
}: TeamMember & { index: number }) {
    const { width } = useWindowSize();

    return (
        <div className="group my-6 hover:my-0 border-4 rounded-[32px] transition-all duration-100 bg-white flex flex-col items-center text-center relative px-10 pt-8 pb-16 hover:border-transparent border-primary/10">
            <img
                src={photo}
                alt={name}
                className="border-8 border-stone-100 rounded-full object-cover group-hover:size-44 size-32 transition-all duration-100"
            />

            <div className="mt-9 text-xl font-bold">{name}</div>

            <div className="mt-5">{job}</div>

            <div className="scale-0 group-hover:scale-100 opacity-0 transition-all duration-100 group-hover:opacity-100 lg:absolute bottom-0 translate-y-1/2 rounded-full inline-flex p-5 gap-5 *:bg-primary *:rounded-full *:size-11 *:*:size-6 *:flex *:items-center *:justify-center text-white bg-stone-100">
                <a target="_blank" href={facebook || "//facebook.com"}>
                    <Facebook />
                </a>
                <a target="_blank" href={linkedin || "//linkedin.com"}>
                    <Linkedin />
                </a>
                <a target="_blank" href={twitter || "//twitter.com"}>
                    <Twitter />
                </a>
            </div>
        </div>
    );
}

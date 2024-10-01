import { Dislike, Like } from "iconsax-react";
import React from "react";
import { cn } from "@/utils";
import { useTranslation } from "react-i18next";
import { Message, Request } from "@types";
import { Alert, Loading, Transition } from "@/components";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";

export default function Edit({
    request,
    setRequests,
    show,
    setShow,
}: {
    request: Request | undefined;
    setRequests: React.Dispatch<React.SetStateAction<Request[] | undefined>>;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { t } = useTranslation();

    const { token } = useAppSelector(selectAuth);

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();

    if (!request || !token) return null;

    const { _job: selected, _applicant: user } = request;

    if (!selected || !user) return null;

    const handle = async (status: number) => {
        setLoading(true);
        setMessage(undefined);
        try {
            const res = await fetch("/api/employer/requests/" + request.id, {
                method: "PUT",
                body: JSON.stringify({ status }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            });
            const data = await res.json();
            setRequests((prev) =>
                prev?.map((r, i) => (r.id === request.id ? data : r))
            );

            setMessage(
                res.ok
                    ? {
                          content: "Request answered successfully",
                          type: "success",
                      }
                    : {
                          content: "Request answering failed",
                          type: "danger",
                      }
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const onDecline = () => {
        handle(1);
    };

    const onAccept = () => {
        handle(2);
    };

    return (
        <Transition show={show && Boolean(selected)}>
            <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
                <div
                    className="inset-0 absolute -z-10"
                    onClick={() => setShow(false)}
                />

                <Loading show={loading} />

                <div className="lg:border border-neutral-200 bg-white lg:rounded-3xl fixed lg:static inset-0 overflow-auto top-[90px] w-full max-w-5xl">
                    <Alert
                        className="md:col-span-2 xl:col-span-3"
                        color={message?.type}
                    >
                        {message?.content}
                    </Alert>

                    <div className="grid grid-cols-2 divide-x *:divide-y *:divide-neutral-200 *:*:p-4 *:*:text-white *:text-center *:p-6 *:*:rounded-md *:*:inline-flex *:*:items-center *:*:gap-2">
                        <div>
                            <button onClick={onDecline} className="bg-dislike">
                                <Dislike className="size-5" />
                                {"Decline"}
                            </button>
                        </div>

                        <div>
                            <button onClick={onAccept} className="bg-like">
                                <Like className="size-5" />
                                {"Accept"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

const Li = ({
    children,
    green,
}: {
    children?: React.ReactNode;
    green?: boolean;
}) => {
    return (
        <div className="flex gap-2.5 text-sm md:w-1/2">
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className={cn(
                    "flex-none",
                    green ? "text-like" : "text-zinc-800"
                )}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="11"
                    cy="11"
                    r="11"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
                <path
                    d="M14.5 8.59375L9.6875 13.4062L7.5 11.2188"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div>{children}</div>
        </div>
    );
};

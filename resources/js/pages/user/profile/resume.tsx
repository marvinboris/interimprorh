import { useMessageContext } from "@/contexts";
import { selectAuth, userEdit, userResumeEdit } from "@/features";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { isApplicant } from "@/utils";
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Body from "./ui/body";
import Header from "./ui/header";
import { Status } from "@/enums";
import { Section, Loading, Alert, Input, Button } from "@/components";
import { Transition } from "@headlessui/react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export function PageUserProfileResume() {
    const { data, message, status } = useAppSelector(selectAuth);
    if (!isApplicant(data)) return null;

    const { setMessage } = useMessageContext();

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const loading = status === Status.LOADING;

    const [file, setFile] = React.useState<File | string | undefined | null>(
        data.resume
    );
    const [numPages, setNumPages] = React.useState<number | null>(null);

    // Function to handle file upload
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            alert("Please upload a valid PDF file");
        }
    };

    // Function called when a PDF document is loaded successfully
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();

        if (!file)
            return setMessage({
                type: "danger",
                content: "Missing information",
            });
        else {
            form.append("resume", file);
            dispatch(userResumeEdit(form));
        }
    };

    React.useEffect(() => {
        setMessage({
            content: "Resume successfully updated",
            type: "success",
        });
    }, [data.resume]);

    return (
        <div className="divide-y divide-neutral-200">
            <Header />

            <div>
                <Section className="relative">
                    <Transition show={loading}>
                        <div className="absolute inset-0 z-10">
                            <Loading />
                        </div>
                    </Transition>

                    <form
                        onSubmit={onSubmit}
                        encType="multipart/form-data"
                        className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6 py-6"
                    >
                        <Alert
                            color={message?.type}
                            className="md:col-span-2 xl:col-span-3"
                        >
                            {message?.content}
                        </Alert>

                        <div>
                            <Input
                                type="file"
                                name="resume"
                                label={t("My resume")}
                                accept="application/pdf"
                                onChange={handleFileChange}
                            />

                            <Button type="submit" className="mt-7">
                                {t("Save")}
                            </Button>
                        </div>

                        <div className="xl:col-span-2">
                            {file && (
                                <Document
                                    file={file}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    {Array.from(
                                        new Array(numPages),
                                        (el, index) => (
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                                renderTextLayer={false}
                                            />
                                        )
                                    )}
                                </Document>
                            )}
                        </div>
                    </form>
                </Section>
            </div>
        </div>
    );
}

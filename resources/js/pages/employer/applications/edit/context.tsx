import { useGet, useQuery } from "@/hooks";
import { Job } from "@types";
import React from "react";
import { useParams } from "react-router-dom";

const Context = React.createContext<{
    application: Job | undefined;
    setApplication: React.Dispatch<React.SetStateAction<Job | undefined>>;
}>({
    application: undefined,
    setApplication: console.log,
});

export const useJob = () => React.useContext(Context);

export function JobProvider(props: React.PropsWithChildren) {
    const { id } = useParams();

    const { data } = useGet<Job>("/employer/jobs/" + id);

    const [application, setApplication] = React.useState<Job>();

    React.useEffect(() => {
        setApplication(data);
    }, [id, data]);

    return (
        <Context.Provider value={{ application, setApplication }}>
            {props.children}
        </Context.Provider>
    );
}

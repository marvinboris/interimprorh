import axios from "axios";
import React from "react";

export function useGet<T>(url: string) {
    const [data, setData] = React.useState<T>();
    const [error, setError] = React.useState<Error>();
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const handle = async () => {
            setLoading(true);

            try {
                const res = await axios.get<T>(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });
                setData(res.data);
            } catch (error) {
                console.log(error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        handle();
    }, []);

    return { isLoading, error, data };
}

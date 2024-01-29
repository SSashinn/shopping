import { useState, useEffect } from "react";

export default function useItems(link) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(link, {mode: "cors"})
            .then((res) => {
                if (res.status >= 400) 
                    throw new Error("Server Error");
                const json = res.json();
                console.log(json)
                return json;
            })
            .then((res) => setData(res))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    },[link]); 

    return { data, error, loading };
}
import { useCallback, useEffect, useState } from "react";
import { Meal } from "@/src/models/meal";

export const useAddAction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const addAction = useCallback((id: string) => {
        setIsLoading(true);
        return fetch(`/api/meals/add/${id}`, { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    setHasError(true);
                    return false;
                }

                return true;
            })
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false))
    }, [])

    return { addAction, isLoading, hasError }
}

import { useCallback, useState } from "react";

export const useAddAction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const addAction = useCallback(async (id: string) => {
        let result = true
        setIsLoading(true);

        if (id === '2') {
            result = false;
            setHasError(true)
        }

        setIsLoading(false);

        return result
    }, [])

    return { addAction, isLoading, hasError }
}

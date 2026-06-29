import { useCallback, useState } from "react";

export const useCartSummary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const fetchCartSummary = useCallback(() => {
        setIsLoading(true);

        return fetch(`/api/cart/summary`)
            .then(response => response.json())
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false));
    }, []);

    const clearCartSummary = useCallback(() => {
        setIsLoading(true);

        return fetch(`/api/cart/clear`)
            .then(response => response.json())
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return { fetchCartSummary, clearCartSummary, isLoading, hasError };
};

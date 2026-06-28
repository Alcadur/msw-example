import { useEffect, useState } from "react";
import { Meal } from "@/src/models/meal";

export const useMeals = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/meals').then(res => res.json()).then((res) => {
            setMeals(res);
        })
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false))
    }, [])

    return { meals, isLoading, hasError }
}

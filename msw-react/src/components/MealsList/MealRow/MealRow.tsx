"use client";

import { Meal } from "@/src/models/meal";
import styles from "./MealRow.module.css";
import clsx from "clsx";
import { useState } from "react";
import { useAddAction } from "@/src/components/MealsList/MealRow/useMealAddAction";
import { emitEvent } from "@alcadur/react-events-hook";
import { EVENTS } from "@/src/models/events";

type MealRowProps = {
    meal: Meal
}

export const MealRow = ({ meal }: MealRowProps) => {
    const [wasAdded, setWasAdded] = useState(false);
    const { addAction, hasError, isLoading } = useAddAction();

    const handleAddToCart = async () => {
        const wasAddedSuccessful = await addAction(meal.id);

        if (wasAddedSuccessful) {
            setWasAdded(true);
            emitEvent(EVENTS.AddMeal, meal);
        }
    };

    const canAddToCart = !wasAdded && !hasError && !isLoading;

    return <div className={clsx(styles.row, "bordered-element", {
        [styles.added]: wasAdded,
        [styles.error]: hasError,
    })}>
        <div className={styles.imageContainer}>
            <img src={meal.imageUrl} className={styles.image} alt={meal.name} />
        </div>
        <div className={styles.info}>
            <h4>{meal.name}</h4>
            <p>{meal.description}</p>
            <h5>${meal.price}</h5>
            {canAddToCart && (
                <button onClick={handleAddToCart}
                        disabled={hasError}
                        className={clsx(styles.button, "bordered-element")}>
                    Add to Cart
                </button>
            )}
            {hasError && (
                <p className={clsx(styles.error, "bordered-element")}>
                    Can't add meal to cart!
                </p>
            )}
            {isLoading && (
                <p className={clsx(styles.loading, "bordered-element")}>
                    Adding ⌛...
                </p>
            )}
        </div>
    </div>;
};

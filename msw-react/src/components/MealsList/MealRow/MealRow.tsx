import { Meal } from "@/src/models/meal";
import styles from "./MealRow.module.css";
import clsx from "clsx";
import { CSSProperties } from "react";

type MealRowProps = {
    meal: Meal
}

export const MealRow = ({ meal }: MealRowProps) => {
    return <div className={clsx(styles.row, "bordered-element")}
                style={{ "--element-color": "#c0d696" } as CSSProperties}>
        <div className={styles.imageContainer}>
            <img src={meal.imageUrl} className={styles.image} alt={meal.name} />
        </div>
        <div className={styles.info}>
            <h4>{meal.name}</h4>
            <p>{meal.description}</p>
            <h5>${meal.price}</h5>
            <button className={clsx(styles.button, 'bordered-element')} style={{
                "--element-color": "#8bac5d"
            } as CSSProperties}>Add to Cart</button>
        </div>
    </div>;
};

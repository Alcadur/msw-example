import { MealRow } from "@/src/components/MealsList/MealRow/MealRow";
import styles from "./MealsList.module.css"
import clsx from "clsx";
import { mealsMocked } from "@/src/mocks/mealsMocked";

type MealsListProps = {
    classList?: string
}

export const MealsList = ({ classList }: MealsListProps) => {
    return <div className={clsx(styles.list, classList)}>
        {mealsMocked.map(meal => <MealRow key={meal.id} meal={meal} />)}
        </div>
}

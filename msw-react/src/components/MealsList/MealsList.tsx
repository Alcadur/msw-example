import { useMeals } from "@/src/components/MealsList/useMeals";
import { MealRow } from "@/src/components/MealsList/MealRow/MealRow";
import styles from "./MealsList.module.css"
import clsx from "clsx";

type MealsListProps = {
    classList?: string
}

export const MealsList = ({ classList }: MealsListProps) => {
    const { meals, isLoading, hasError } = useMeals()

    return <div className={clsx(styles.list, classList)}>
        {meals.map(meal => <MealRow key={meal.id} meal={meal} />)}
        </div>
}

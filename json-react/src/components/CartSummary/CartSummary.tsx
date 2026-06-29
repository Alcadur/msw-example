import styles from './CartSummary.module.css'
import clsx from "clsx";
import { CSSProperties, useState } from "react";
import { emitEvent, useEvents } from "@alcadur/react-events-hook";
import { EVENTS } from "@/src/models/events";
import { Meal } from "@/src/models/meal";
import { CartSummaryModel } from "@/src/models/cartSummary";
import { emptySummaryMocked, summaryMocked } from "@/src/mocks/summaryMocked";


export const CartSummary = () => {
    const [summary, setSummary] = useState<CartSummaryModel>({ totalItems: 0, totalPrice: 0 })

    const isLoading = false

    const handleCartUpdate = async (meal: Meal) => {
        setSummary(summaryMocked)
    }

    const handleClearSummary = async () => {
        emitEvent(EVENTS.CancelOrder);
        setSummary(emptySummaryMocked)
    }

    useEvents({
        [EVENTS.AddMeal]: handleCartUpdate
    })

    return (
        <footer className={clsx(styles.cartSummary, 'bordered-element')} style={{ '--element-color': '#f8d7de' } as CSSProperties}>
            <h3>Cart Summary</h3>
            <p>Total Items: {summary.totalItems}</p>
            <h2>Total Price: ${summary.totalPrice.toFixed(2)}</h2>
            <div className={styles.actions}>
                <button className="bordered-element" onClick={handleClearSummary}>Clear</button>
                <button className="bordered-element">Pay 💸</button>
            </div>
        </footer>
    )
}

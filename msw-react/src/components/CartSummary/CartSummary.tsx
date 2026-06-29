import styles from './CartSummary.module.css'
import clsx from "clsx";
import { CSSProperties, useState } from "react";
import { emitEvent, useEvents } from "@alcadur/react-events-hook";
import { EVENTS } from "@/src/models/events";
import { useCartSummary } from "@/src/components/CartSummary/useCartSummary";
import { Meal } from "@/src/models/meal";
import { CartSummaryModel } from "@/src/models/cartSummary";

export const CartSummary = () => {
    const [summary, setSummary] = useState<CartSummaryModel>({ totalItems: 0, totalPrice: 0 })
    const { fetchCartSummary, clearCartSummary, isLoading } = useCartSummary();

    const handleCartUpdate = async (meal: Meal) => {
        const fetchedSummary = await fetchCartSummary()
        setSummary(fetchedSummary)
    }

    const handleClearSummary = async () => {
        const fetchedSummary = await clearCartSummary()
        emitEvent(EVENTS.CancelOrder);
        setSummary(fetchedSummary)
    }

    useEvents({
        [EVENTS.AddMeal]: handleCartUpdate
    })

    return (
        <footer className={clsx(styles.cartSummary, 'bordered-element')} style={{ '--element-color': '#f8d7de' } as CSSProperties}>
            <h3>Cart Summary</h3>
            <p>Total Items: {isLoading ? "..." : summary.totalItems}</p>
            <h2>Total Price: ${isLoading ? "..." : summary.totalPrice.toFixed(2)}</h2>
            <div className={styles.actions}>
                <button className="bordered-element" onClick={handleClearSummary}>Clear</button>
                <button className="bordered-element">Pay 💸</button>
            </div>
        </footer>
    )
}

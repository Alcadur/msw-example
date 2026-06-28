import styles from './CartSummary.module.css'
import clsx from "clsx";
import { CSSProperties } from "react";

export const CartSummary = () => {
    return (
        <footer className={clsx(styles.cartSummary, 'bordered-element')} style={{ '--element-color': '#f8d7de' } as CSSProperties}>
            <h3>Cart Summary</h3>
            <p>Total Items: 0</p>
            <h2>Total Price: $0.00</h2>
            <div className={styles.actions}>
                <button className="bordered-element">Clear</button>
                <button className="bordered-element">Pay 💸</button>
            </div>
        </footer>
    )
}

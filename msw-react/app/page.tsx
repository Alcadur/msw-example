'use client';

import { MealsList } from "@/src/components/MealsList/MealsList";
import styles from './page.module.css';
import Image from "next/image";
import { CartSummary } from "@/src/components/CartSummary/CartSummary";

export default function Home() {
  return (
      <section className={styles.section}>
          <header className={styles.header}>
              <Image src="/icon.png" width={50} height={50} alt="icon" />
              <div>
                  <h5>Restaurant</h5>
                  <h1>Olive</h1>
              </div>
          </header>
          <MealsList classList={styles.itemsList}/>
          <CartSummary />
      </section>
  );
}

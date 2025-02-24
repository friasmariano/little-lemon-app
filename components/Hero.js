import styles from '@/styles/hero.module.css';

export default function Hero({ children }) {
    return (
        <section className={styles.container}>
            { children }
        </section>
    );
}
import styles from '@/styles/specials.module.css';

export default function Specials({ children }) {
    return (
        <section className={styles.container}>
            { children}
        </section>
    );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import styles from  '@/styles/page.module.css'
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero>
        <div className={styles.section}>
          <h1 className={styles.title}>Little Lemon</h1>
          <h2 className={styles.subtitle}>Chicago</h2>
          <p className={styles.description}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className={buttonStyles.default} style={{ marginTop: '40px'}}>Order Now</button>
        </div>
        <div className={styles.section}>
          <Image 
            src="/restauranfood.jpg"
            alt="food"
            width={300}
            height={300}
            style={{ borderRadius: '16px', marginLeft: '40px', width: '250px'}}
          />
        </div>
      </Hero>
    </main>
  );
}

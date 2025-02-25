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
          <h1 className={`${styles.title} ${'markazi-text'}`}
              style={{ fontSize: '3.5rem', marginTop: '-20px', padding: '0'}}>Little Lemon</h1>

          <h2 className={`${'markazi-text'}`}
              style={ {fontSize: '2.5rem', marginTop: '-30px', padding: '0'}}>Chicago</h2>

          <p className={styles.description} style={{width: '40vw', marginTop: '20px'}}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className={buttonStyles.default} 
                  style={{ marginTop: '40px',
                           boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)',
                  }}>Reserve a Table</button>
        </div>
        <div className={styles.section}>
          <Image 
            src="/restauranfood.jpg"
            alt="food"
            width={300}
            height={300}
            style={{ width: '250px', 
                     borderRadius: '16px', 
                     marginLeft: '40px', 
                     marginBottom: '-50px',
                     boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)'
                  }}
          />
        </div>
      </Hero>
    </main>
  );
}

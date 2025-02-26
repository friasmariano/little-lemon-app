import Hero from "@/components/Hero";
import styles from  '@/styles/page.module.css'
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';
import Specials from "@/components/Specials";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero>
        <div className={styles.section}>
          <h1 className={`${styles.title} ${'markazi-text'}`}
              style={{ fontSize: '3.5rem', marginTop: '-20px', padding: '0'}}>Little Lemon</h1>

          <h2 className={`${'markazi-text'} ${styles.subtitle}`}
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
                     boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
                     zIndex: '3'
                  }}
          />
        </div>
      </Hero>

      <Specials header={{ title: 'This is week specials!', actionButtonText: 'Online Menu'}}>
        <Card
          image = {{ src: '/Greek_salad.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
          header = {{ title: 'Greek Salad', details: '$ 12.99'}}
          description = { 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
          callToAction = {{ text: 'Order a Delivery' }}
        />

        <Card
          image = {{ src: '/Brushetta.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
          header = {{ title: 'Brushetta', details: '$ 5.99'}}
          description = { 'Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt, topped with fresh, diced tomatoes.'}
          callToAction = {{ text: 'Order a Delivery' }}
        />

        <Card
          image = {{ src: '/Lemon_dessert.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
          header = {{ title: 'Lemon Dessert', details: '$ 5.00'}}
          description = { 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
          callToAction = {{ text: 'Order a Delivery' }}
        />
      </Specials>

    </main>
  );
}

import Hero from "@/components/Hero";
import styles from  '@/styles/page.module.css'
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';
import Specials from "@/components/Specials";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

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

      <section className={`${'light-grey-bg'}`}
               style={{ height: '500px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexDirection: 'column' }}>
        
        <h3 className={`${'markazi-text'}`}
            style={{ fontSize: '2.1rem',
                     fontWeight: '600'}}>Testimonials</h3>

        <div style={{ marginTop: '45px' }}>
          <div style={{ width: '200px',
                        backgroundColor: 'white',
                        height: '170px',
                        borderRadius: '16px',
                        padding: '22px',
                        display: 'flex',
                        flexDirection: 'column'}}>
            <div style={{ fontWeight: '600' }}>
              <FontAwesomeIcon icon={ faStar } style={{ color: 'gold' }}/>
              <FontAwesomeIcon icon={ faStar } style={{ color: 'gold' }}/>
              <FontAwesomeIcon icon={ faStar } style={{ color: 'gold' }}/>
              <FontAwesomeIcon icon={ faStar } style={{ color: 'gold' }}/>
              <FontAwesomeIcon icon={ faStarHalf } style={{ color: 'gold' }}/>
            </div>
            <div style={{ display: 'flex', margin: '8px 0px 0px 0px' }}>
              <div style={{ backgroundColor: 'grey',
                            width: '75px',
                            height: '65px',
                            borderRadius: '10px' }}>

              </div>
              <div style={{ display: 'flex',
                            flexDirection: 'column',
                            padding: '8px 0px 0px 10px',
                            fontWeight: '600'
               }}>
                <h4 style={{fontSize: '1rem'}}>Lorem</h4>
                <h4 style={{fontSize: '1rem'}}>User</h4>
              </div>
            </div>
            <h5 style={{ fontSize: '0.9rem',
                         marginTop: '5px'
             }}>Review Data</h5>
          </div>
        </div>

      </section>

    </main>
  );
}

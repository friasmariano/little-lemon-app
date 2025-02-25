import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import styles from  '@/styles/page.module.css'
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';
import Specials from "@/components/Specials";
import specialsStyles from '@/styles/specials.module.css';
import { Card } from "@chakra-ui/react"
import { redirect } from "next/dist/server/api-utils";

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

      <Specials>
        <section className={specialsStyles.section}>
          <div className={specialsStyles.subsection}>
            <h1 className={`${'markazi-text'}`}
                style={{ fontSize: '2.5rem',
                        padding: '0px'
                }}>This is week specials!
            </h1>
          </div>
          <div className={specialsStyles.subsection}
               style={{ paddingLeft: '50px' }}>
            <button className={buttonStyles.default}>Online Menu</button>
          </div>
        </section>

        <section className={specialsStyles.section}>
          <div>
            <div style={{ width: '220px',
                          height: '370px',
                          borderRadius: '16px',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)'}}
                  className="light-grey-bg">
              <Image
                src="/Greek_salad.jpg"
                width={220}
                height={220}
                alt="Greek Salad"
                style={{ borderRadius: '16px'}}
              />

              <div style={{ display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '15px',
                            gap: '20px'
              }}>
                <h4 style={{ color: 'black', fontWeight: '600', fontSize: '1.1rem' }}>Greek Salad</h4>
                <h4 style={{ fontWeight: '600', fontSize: '1.1rem' }}>$ 12.99</h4>
              </div>

              <div style={{ display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            width: '100%'}}>
                <p style={{ fontSize: '0.9rem', paddingLeft: '10px', 
                            paddingRight: '10px', paddingTop: '20px', 
                            textAlign: 'left'}}>
                  Fresh cucumbers, tomatoes, red onions, feta cheese, olives, 
                  and our house dressing. Served with...
                </p>
              </div>

              <div style={{ display: 'flex',
                            color: 'black',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginTop: '20px',
                            marginLeft: '10px'}}>
                Order a Delivery
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ padding: '4px'}}
                  />
              </div>
            </div>
          </div>
        </section>
      </Specials>

    </main>
  );
}

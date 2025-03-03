
export default function Testimonials({ children }) {
    return(
        <section className={`${'light-grey-bg'}`}
                   style={{ height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column' }}>

            <h3 className={`${'markazi-text'}`}
                style={{ fontSize: '2.1rem',
                         fontWeight: '600'}}>Testimonials</h3>

            <div style={{ display: 'flex',
                          gap: '15px',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '45px' }}>

              { children }
            </div>
        </section>
    );
}
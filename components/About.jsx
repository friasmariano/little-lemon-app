import Image from "next/image";

export default function About() {
    return(
        <section style={{ display: 'flex',
                                backgroundColor: 'white',
                                minHeight: '550px',
                                justifyContent: 'center',
                                padding: '100px 50px 130px 50px',
                                gap: '10vw',
                                marginLeft: '20px',
                                flexWrap: 'wrap'}}>
                  <div style={{ display: 'flex',
                                flexDirection: 'column',
                                margin: 'auto',
                                maxWidth: '39vw',
                                boxSizing: 'border-box'}}>
                    <div className={`${'markazi-text'}`}
                          style={{ fontSize: '3rem',
                                   fontWeight: '650',
                                   margin: '0',
                                   padding: '0' }}>
                          Little Lemon
                    </div>
                    <div className={`${'markazi-text'}`}
                          style={{ fontSize: '2rem',
                          fontWeight: '650',
                          margin: '-18px 0 0 0',
                          padding: '0',
                          opacity: '0.7'
                         }}>
                          Chicago
                    </div>
                    <p style={{ margin: '18px 0px 0px 0px',
                                textAlign: 'justify'
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div style={{ display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                maxWidth: '39vw',
                                boxSixing: 'border-box',
                                margin: 'auto' }}>
                         <Image
                            src='/Mario_and_Adrian_b.jpg'
                            width={268}
                            height={500}
                            alt="Mario_and_Adrian"
                            style={{ borderRadius: '16px',
                                     height: '175px',
                                     boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.3)'
                             }}
                         />

                          <Image
                            src='/Mario_and_Adrian_a.jpg'
                            width={268}
                            height={500}
                            alt="Mario_and_Adrian"
                            style={{ borderRadius: '16px',
                                     height: '175px',
                                     marginTop: '-50px',
                                     transform: 'translate(80px)',
                                     boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.3)'
                             }}
                         />
                  </div>
              </section>

    );
}
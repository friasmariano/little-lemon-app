import cardS from '../styles/card.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import boxStyles from '../styles/box.module.css'

export default function Card({image, header, description, callToAction}) {
    return(
        <section className={`${cardS.container} ${boxStyles.box}`}>
            <div style={{ width: '250px',
                            height: '420px',
                            borderRadius: '16px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)'}}
                    className="light-grey-bg">

                <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    style={{ borderRadius: '16px', width: '269px', height: '179px'}}
                />

                <div style={{ display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '20px',
                              gap: '20px'}}>
                    <h4 style={{ color: 'black', fontWeight: '600', fontSize: '1.2rem' }}>
                     {header.title}
                    </h4>
                    <h4 style={{ fontWeight: '600', fontSize: '1.2rem' }}
                        className="secondary">
                            {header.details}
                        </h4>
                    </div>

                    <div style={{ display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%'}}>
                    <p style={{ fontSize: '0.9rem', paddingLeft: '20px',
                                paddingRight: '20px', paddingTop: '20px',
                                textAlign: 'left'}}>
                        {description}
                    </p>
                </div>

                <div style={{ display: 'flex',
                            color: 'black',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginTop: '15px',
                            marginLeft: '10px'}}>
                    {callToAction.text}
                <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ padding: '6px', marginLeft: '5px'}}
                    />
                </div>
            </div>
        </section>
    )
}
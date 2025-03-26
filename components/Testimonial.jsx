'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { useEffect, useState } from "react"
import boxStyles from "../styles/box.module.css"

export default function Testimonial({ rating, avatar, comment, user }) {
    const [stars, setStars] = useState([{}]);

    useEffect(() => {
        let tempArray = [];
        let r = rating;
        let limit = Math.round(rating);
        for (let i = 1; i <= limit; i++) {
            let star;

            if (i == limit){
                star = {
                    id: i,
                    value: r
                }
            } else {
                star = {
                    id: i,
                    value: 1
                }
            }

            tempArray.push(star);

            r--;
        }

        setStars(tempArray);
    }, [rating])

    return(
        <div style={{ width: '216px',
                      backgroundColor: 'white',
                      height: '248px',
                      borderRadius: '16px',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '1px 2px 20px rgba(0, 0, 0, 0.3)'}}
              className={boxStyles.box}>

            <div style={{ fontWeight: '600' }}>
                {stars.map((star, index) => {
                    return (
                        <FontAwesomeIcon
                            key={star.id + index}
                            icon={star.value === 1 ? faStar : faStarHalf}
                            style={{ color: 'gold' }} />
                    );
                })}
            </div>
            <div style={{ display: 'flex', margin: '8px 0px 0px 0px' }}>
                <Image
                    src={avatar}
                    width={75}
                    height={65}
                    alt="Woman_1"
                    style={{ borderRadius: '10px' }}
                />
                <div style={{ display: 'flex',
                            flexDirection: 'column',
                            padding: '8px 0px 0px 10px',
                            fontWeight: '600',
                            alignItems: 'center',
                            width: '100%'
                }}>
                    <h4 style={{fontSize: '1rem'}}>{user.name}</h4>
                    <h4 style={{fontSize: '1rem'}}>{user.lastname}</h4>
                </div>
            </div>
            <h5 style={{ fontSize: '0.9rem',
                            marginTop: '12px'
                }}>
                    { comment }
            </h5>
        </div>
    );
}

import buttonStyles from '../styles/button.module.css'

export default function BookingForm() {

    return(
        <form style={{ display: 'flex',
                       maxWidth: '200px',
                       gap: '20px',
                       justifyContent: 'center',
                       margin: '50px auto auto auto',
                       flexDirection: 'column' }}>

            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center'}}>
                <label htmlFor="res-date" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Choose Date</label>
                <input type="date" />
            </div>

            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center'}}>
                <label htmlFor="rest-time" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Choose time</label>
                <select id="rest-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>

            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center'}}>
                <label htmlFor="guest" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Number of Guests</label>
                <input type="number" placeholder="1" min={1} max={10} id="guest" />
            </div>

            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center'}}>
            <label htmlFor="ocassion" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Ocassion</label>
                <select id="ocassion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          margin: '30px 0px 50px 0px' }}>
                <input className={buttonStyles.default}
                   type="submit" value="Make reservation" />
            </div>

        </form>
    )
}
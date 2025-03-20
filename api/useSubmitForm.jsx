import { useDispatch } from 'react-redux'
import { update } from '../lib/features/table-reservation/store/reservation-slice'

export const useSubmitForm = (data) => {
    const dispatch = useDispatch();

    dispatch(update({
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        date: data.date,
        time: data.time,
        guest: data.guests,
        ocassion: data.ocassion,
        creditCard: data.card
    }))
};
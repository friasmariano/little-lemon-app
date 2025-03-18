import { useDispatch } from 'react-redux'
import { update } from '../lib/features/table-reservation/store/reservation-slice'

export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitForm = function(data) {
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
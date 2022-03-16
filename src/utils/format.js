import dayjs from '../utils/dayjs-fr'

function frDate(date) {
    return dayjs(date).format('Do MMMM YYYY')
}

export default {
    frDate,
}

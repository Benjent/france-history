import dayjs from '../utils/dayjs-fr'

const getManipulableDate = (date) => {
    if (!date) {
        return dayjs()
    }

    if (typeof date === 'object') {
        return date
    }

    if (typeof date === 'number') {
        return dayjs().year(date).month('0').date('1')
    }

    if (typeof date === 'string') {
        const [year, month, day] = date.split('-')
        return dayjs().year(Number.parseInt(year)).month(month || 0).date(day || 1)
    }

    throw new Error('Unmanipulable date.')
}

const getFourDigitYear = (year) => {
    if (year < 10 && !year.toString().startsWith('000')) {
        return  `000${year}`
    }

    if (year < 100 && !year.toString().startsWith('00')) {
        return  `00${year}`
    }

    if (year < 1000 && !year.toString().startsWith('0')) {
        return `0${year}`
    }

    return year
}

export default {
    getFourDigitYear,
    getManipulableDate,
}

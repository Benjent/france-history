function getFormattedDate(date) {
    const year = date.getFullYear()
    let month = date.getMonth()
    const day = date.getDate()

    month++ // Month is zero-indexed

    month = month.toString()

    if (month.length === 1) {
        month = `0${month}`
    }

    return `${year}-${month}-${day}`
}

export default {
    getFormattedDate,
}

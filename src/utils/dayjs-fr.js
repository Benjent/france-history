import dayjs from 'dayjs'
const advancedFormat = require('dayjs/plugin/advancedFormat')
require('dayjs/locale/fr')

dayjs.extend(advancedFormat)
dayjs.locale('fr')

export default dayjs

import dayjs from 'dayjs'
const advancedFormat = require('dayjs/plugin/advancedFormat')
const minMax = require('dayjs/plugin/minMax')
require('dayjs/locale/fr')

dayjs.extend(advancedFormat)
dayjs.extend(minMax)
dayjs.locale('fr')

export default dayjs

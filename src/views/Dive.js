import React from 'react'
import classNames from 'classnames'

import dayjs from '../utils/dayjs-fr'
import dateUtils from '../utils/date'

import annexations from '../db/annexations'
import battles from '../db/battles'
import eras from '../db/eras'
import events from '../db/events'
import governances from '../db/governances'
import regimes from '../db/regimes'
import wars from '../db/wars'

import './Dive.scss'

function Dive() {
    const dateMin = dateUtils.getManipulableDate('0001-01-01')
    const dateMax = dayjs()

    const axisDates = []

    const generateAxisDates = () => {
        for (let i = dateMin.year(); i < dateMax.year(); i++) {
            axisDates.push(i)
        }
    }

    generateAxisDates()

    const getVerticalPosition = (date) => {
        return Math.max(dayjs.min(dateUtils.getManipulableDate(date), dateMax).diff(dateMin, 'days'), 0) // TODO strange that we have year one at -30px
    }

    const style = {
        height: getVerticalPosition() + 'px',
    }

    const getAxisStyle = (year) => {
        const date = dayjs().year(year).month('0').date('1')
        const top = getVerticalPosition(date)

        const style = {
            position: 'absolute',
            top: `${top}px`,
        }

        return style
    }

    const getEventStyle = (event) => {
        const top = getVerticalPosition(event.start)

        const style = {
            position: 'absolute',
            top: `${top}px`,
            height: `${getVerticalPosition(event.end) - top}px`,
        }

        return style
    }

    const goToNextEra = () => {
        const eras = [...document.querySelectorAll(`div[id^=era]`)]
        const nextEra = eras.find((node) => {
            return node.getBoundingClientRect().top > 0
        })

        if (nextEra) {
            nextEra.scrollIntoView()
        } else {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }

    const goToPreviousEra = () => {
        const eras = [...document.querySelectorAll(`div[id^=era]`)]
        const previousEra = eras.reverse().find((node) => {
            return node.getBoundingClientRect().top < 0
        })

        if (previousEra) {
            previousEra.scrollIntoView()
        }
    }

    return (
        <div
            className="Dive"
            style={style}
            >
            <aside className="Dive__aside">
                <div className="Dive__aside__column">
                    {eras.map((e, i) =>
                        <div
                            id={`era${i}`}
                            className={classNames({
                                'Dive__aside__bar': true,
                                [`Dive__aside__bar--${e.color}`]: e.color,
                            })}
                            style={getEventStyle(e)}
                            key={`era${e.start}`}
                            >
                            <div className="Dive__aside__column__content">{e.content}</div>
                        </div>
                    )}
                </div>
                <div className="Dive__aside__column">
                    {regimes.map((r) =>
                        <div
                            className={classNames({
                                'Dive__aside__bar': true,
                                [`Dive__aside__bar--${r.color}`]: r.color,
                            })}
                            style={getEventStyle(r)}
                            key={`regime${r.start}`}
                            >
                            <div className={classNames({
                                'Dive__aside__column__content': true,
                                [`Dive__aside__column__content--2`]: true,
                            })}>{r.content}</div>
                        </div>
                    )}
                </div>
                <div className="Dive__aside__column">
                    {governances.map((g, i) =>
                        <div
                            className={classNames({
                                'Dive__aside__bar': true,
                                [`Dive__aside__bar--${g.color}`]: g.color,
                            })}
                            style={getEventStyle(g)}
                            key={`governance${g.start}_${i}`}
                            >
                            <div className={classNames({
                                'Dive__aside__column__content': true,
                                [`Dive__aside__column__content--3`]: true,
                            })}>
                                <span>{g.content}</span>
                                {g.figure && (
                                    <img
                                        src={require(`../assets/images/${g.figure}`)}
                                        alt={g.content}
                                        className="Dive__aside__column__image Dive__aside__column__content"
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="Dive__aside__column">
                    {wars.map((w, i) =>
                        <div
                            className={classNames({
                                'Dive__aside__bar': true,
                                [`Dive__aside__bar--${w.color}`]: w.color,
                            })}
                            style={getEventStyle(w)}
                            key={`war${w.start}_${i}`}
                            >
                            <div className={classNames({
                                'Dive__aside__column__content': true,
                                [`Dive__aside__column__content--4`]: true,
                            })}>{w.content}</div>
                        </div>
                    )}
                </div>
                <div className="Dive__aside__column">
                    {battles.map((b, i) =>
                        <div
                            className={classNames({
                                'Dive__aside__bar': true,
                                [`Dive__aside__bar--${b.color}`]: b.color,
                            })}
                            style={getEventStyle(b)}
                            key={`battle${b.start}_${i}`}
                            >
                            <div className={classNames({
                                'Dive__aside__column__content': true,
                                [`Dive__aside__column__content--5`]: true,
                            })}>{b.content}</div>
                        </div>
                    )}
                </div>
            </aside>
            <div className="Dive__axis">
                {axisDates.map((d) =>
                    <div
                        style={getAxisStyle(d)}
                        >
                        - {d}
                    </div>
                )}
            </div>
            <main>
                {[...annexations, ...events].map((e) =>
                    <div
                        className="Dive__event"
                        style={getEventStyle(e)}
                        key={`event${e.start}`}
                        >
                        <div>{e.content}</div>
                        {/* <div className="period">{formatUtils.frDate(e.start)} - {formatUtils.frDate(e.end)}</div> */}
                    </div>
                )}
                <button className="Dive__buttonPrevious" onClick={goToPreviousEra}>Aller à l'ère prédécente</button>
                <button className="Dive__buttonNext" onClick={goToNextEra}>Aller à la prochaine ère</button>
            </main>
        </div>
    )
}

export default Dive

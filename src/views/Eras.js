import React from 'react'
import eras from '../db/eras'
import formatUtils from '../utils/format'
import '../styles/modules/slate.scss'
import './Eras.scss'

function Eras() {
    const setTimeline = () => {
        // TODO look for redux
    }

    return (
        <div className="Eras">
            {eras.map(e =>
                <div
                    className="Eras__era slate slate--cta"
                    key={`era${e.start}`}
                    onClick={setTimeline}>
                    <div>{e.content}</div>
                    <div className="period">{formatUtils.frDate(e.start)} - {formatUtils.frDate(e.end)}</div>
                </div>
            )}
        </div>
    )
}

export default Eras

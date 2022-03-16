import { useEffect, useState } from 'react';
import { useDebounce } from 'use-lodash-debounce'
import * as d3 from 'd3';

import annexations from '../db/annexations';
import eras from '../db/eras';
import events from '../db/events';
import governances from '../db/governances'
import movements from '../db/movements';
import regimes from '../db/regimes';
import wars from '../db/wars'

import dayjs from '../utils/dayjs-fr'
import translate from '../utils/translate'
import { useD3 } from '../hooks/useD3'

import Checkbox from '../components/ui/Checkbox';
import Input from '../components/ui/Input';

import './Timeline.scss'
import '../styles/modules/bar.scss'
import '../styles/libs/d3.scss'

function Timeline() {
    const minYear = '0481'
    const maxYear = dayjs().format('YYYY')
    const svgWidth = 100000

    const [start, setStart] = useState(minYear)
    const [end, setEnd] = useState(maxYear)
    const [timelines, setTimelines] = useState({
        eras: {
            isShown: true,
            data: eras,
            order: 1,
        },
        regimes: {
            isShown: true,
            data: regimes,
            order: 2,
        },
        governances: {
            isShown: true,
            data: governances,
            order: 3,
        },
        annexations: {
            isShown: true,
            data: annexations,
            order: 4,
        },
        wars: {
            isShown: true,
            data: wars,
            order: 5,
        },
        movements: {
            isShown: true,
            data: movements,
            order: 6,
        },
        events: {
            isShown: true,
            data: events,
            order: 7,
        },
    })

    const debouncedStart = useDebounce(start, 250)
    const debouncedEnd = useDebounce(end, 250)

    const drawChart = () => {
        // Foundations
        const height = 200
        const width = svgWidth
        const margin = { top: 20, right: 30, bottom: 30, left: 100 }
        const svg = d3.select(`#svg`)

        svg.selectAll('*').remove()

        // Scales
        const xScale = d3
            .scaleTime()
            .domain([dayjs(getFourDigitYear(start)), dayjs(getFourDigitYear(end))])
            .rangeRound([margin.left, width - margin.right])

        const yScale = d3
            .scaleBand()
            .domain(
                // Object.entries(timelines).sort((a, b) => { // TODO order
                //     console.log(a, b)
                //     console.log(b[1].order - a[1].order)
                //     return a[1].order - b[1].order
                // })
                Object.keys(timelines)
            )
            .rangeRound([height - margin.bottom, margin.top])
            .paddingInner(0.1)

        // Axis
        const xAxis = () =>
            svg.append('g')
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .attr("class", "d3-axis")
                .call(
                    d3
                        .axisBottom(xScale)
                        .ticks(d3.timeYear.every(1))
                        .tickFormat(d3.timeFormat("%Y"))
                        .tickSizeOuter(0)
                );

        const yAxis = () =>
            svg.append('g')
                .attr("transform", `translate(${margin.left},0)`)
                .attr("class", "d3-axis")
                .call(
                    d3
                        .axisLeft(yScale)
                        .ticks(null, "s")
                        .tickFormat((d) => translate(d))
                )
                .call((g) => g.select(".domain").remove())

        svg.call(xAxis);
        svg.call(yAxis);

        const groupBars = svg.append("g").attr("class", `bars`)
        const groupTexts = svg.append("g").attr("class", `texts`)

        const getXScaledPosition = (d) => {
            // If a timeline element has its start truncated, make sure it does not overflow
            return Math.max(xScale(dayjs(d.start)), margin.left)
        }

        const getBarWidth = (d) => {
            const startScaled = getXScaledPosition(d)
            return Math.max(xScale(dayjs(d.end)) - startScaled, 1)
        }

        const plotBars = (type, data) => {
            const viewData = getViewData(data)

            // Plot bars
            groupBars
                .selectAll(".bar")
                .attr("class", `plot-${type}`)
                .data(viewData)
                .join("rect")
                .attr("class", "bar")
                .attr("class", (d) => d.color ? `bar--${d.color}` : "steelblue")
                .attr("fill", (d) => d.color ? null : "steelblue")
                .attr("x", (d) => getXScaledPosition(d))
                .attr("width", (d) => getBarWidth(d))
                .attr("y", (d) => yScale(type))
                .attr("height", (d) => 20)

            // Plot text if enough space
            groupTexts
                .selectAll(`.plot-${type}`)
                .data(viewData)
                .join("text")
                .attr("class", "d3-text")
                .attr("x", (d) => getXScaledPosition(d))
                .attr("width", (d) => getBarWidth(d))
                .attr("y", (d) => yScale(type) + 20)
                .attr("height", (d) => 20)
                .text((d) => d.content)
                .style("visibility", (d) => d.content.length * 4 < getBarWidth(d) ? "visible" : "hidden")
        }

        Object.entries(timelines).forEach(([key, value]) => {
            if (value.isShown) {
                plotBars(key, value.data)
            }
        })

        // Tooltip
        const tooltip = d3.select("#tooltip") // TODO make it raw HTML/React to apply DS
            .append("div")
            .style("visibility", "hidden")
            .attr("class", "d3-tooltip")

        const mouseover = function() {
            tooltip
                .style("visibility", "visible")
        }

        const mousemove = function(event) {
            const nodeData = d3.select(event.srcElement).data()[0]
            const scrollLeft = document.querySelector('.Timeline').scrollLeft
            const offsetTop = document.querySelector('.Timeline').offsetTop

            tooltip
                .html("Value: " + nodeData.content)
                .style("left", (d3.pointer(event)[0] + 10 - scrollLeft) + "px")
                .style("top", (d3.pointer(event)[1]) + offsetTop + "px")
        }

        const mouseleave = function() {
            tooltip
                .style("visibility", "hidden")
        }

        svg
            .select(".bars")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
    }

    const getDateFromYear = (year) => {
        return dayjs(`${year}-01-01`)
    }

    const getFourDigitYear = (year) => {
        return year < 1000 && !year.toString().startsWith('0') ? `0${year}` : year
    }

    const getViewData = (data) => {
        const startFourDigits = getFourDigitYear(start)
        const endFourDigits = getFourDigitYear(end)
        return data.filter((e) => dayjs(e.start).isBefore(getDateFromYear(endFourDigits)) && dayjs(e.end).isAfter(getDateFromYear(startFourDigits).add(1, 'month')))
    }

    const handleCheckboxChange = (event) => {
        const oldTimelines = JSON.parse(JSON.stringify(timelines))
        oldTimelines[event.target.value].isShown = !oldTimelines[event.target.value].isShown
        setTimelines(oldTimelines)
    }

    const handleStartChange = (event) => {
        setStart(event.target.value)
    }

    const handleEndChange = (event) => {
        setEnd(event.target.value)
    }

    useEffect(() => {
        drawChart()
    }, [debouncedStart])

    useEffect(() => {
        drawChart()
    }, [debouncedEnd])

    useEffect(() => {
        drawChart()
    }, [timelines])

    return (
        <div className="Timeline">
            <header className="Timeline__header">
                <Input
                    type="number"
                    min={minYear}
                    max={maxYear}
                    value={start}
                    onChange={handleStartChange}
                />
                <Input
                    type="number"
                    min={minYear}
                    max={maxYear}
                    value={end}
                    onChange={handleEndChange}
                />
            </header>
            <main className="Timeline__body">
                <div id="tooltip"></div>
                <svg
                    id="svg"
                    className="d3"
                    style={{
                        height: 200,
                        width: `${svgWidth}px`,
                        marginRight: "0px",
                        marginLeft: "0px",
                    }}
                    >
                </svg>
            </main>
            <footer className="Timeline__footer">
                {Object.entries(timelines).map(([key, value]) =>
                    <label key={`cbx${key}`}>
                        <Checkbox
                            checked={value.isShown}
                            value={key}
                            name={key}
                            onChange={handleCheckboxChange}
                        />
                        <span>{translate(key)}</span>
                    </label>
                )}
            </footer>
        </div>
    )
}

export default Timeline

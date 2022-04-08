import React, { Fragment } from 'react'
import styled from 'styled-components'

import useCalendar from '../../../hooks/useCalendar'
import { Color } from '../../../styles/common/Color'
import { FIXME } from '../../../types/Any'
type ColsType = {
  classes: string
  date: string
  value: number
}
type Props = {
  length?: string
}
const Calendar: React.FC<Props> = ({ length }) => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar()
  const dateClickHandler = (date: string) => {
    console.log(date)
  }
  return (
    <>
      <InnerCalendar.header>
        <button className="button" onClick={getPrevMonth}>
          ＜
        </button>
        <InnerCalendar.date>
          <h1>{`${monthNames(length)[selectedDate.getMonth()]}`}</h1>
          <p>
            {`${selectedDate.getFullYear()}/${
              monthNames(length)[selectedDate.getMonth()]
            }`}
          </p>
        </InnerCalendar.date>
        <button className="button" onClick={getNextMonth}>
          ＞
        </button>
      </InnerCalendar.header>
      <InnerCalendar.container>
        {daysShort(length).map((day) => (
          <InnerCalendar.weeek key={day}>{day}</InnerCalendar.weeek>
        ))}
      </InnerCalendar.container>
      <InnerCalendar.container>
        {Object.values(calendarRows).map((cols: FIXME) => {
          return (
            <Fragment key={cols[0].date}>
              {cols.map((col: ColsType) =>
                col.date === todayFormatted ? (
                  <ActiveDate
                    key={col.date}
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      dateClickHandler(col.date)
                    }
                  >
                    {col.value}
                  </ActiveDate>
                ) : (
                  <Date
                    key={col.date}
                    option={col.classes}
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      dateClickHandler(col.date)
                    }
                  >
                    {col.value}
                  </Date>
                )
              )}
            </Fragment>
          )
        })}
      </InnerCalendar.container>
    </>
  )
}
const TxtCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`
const InnerCalendar = {
  header: styled.div`
    display: grid;
    grid-template-columns: 50px 5fr 50px;
    grid-template-rows: 1fr;
    background-color: ${Color.green};
    text-align: center;
    color: ${Color.white};
    grid-auto-rows: 100px;
  `,
  date: styled.div`
    h1,
    p {
      margin: 0;
      text-shadow: 0 0.3rem 0.5rem rgb(0 0 0 / 14%);
    }
  `,
  container: styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-auto-columns: minmax(50px, auto);
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    background-color: ${Color.darkBlack};
  `,
  weeek: styled.div`
    color: ${Color.white};
    ${TxtCenter}
  `,
}

const Date = styled.div<{ option: string }>`
  color: ${(props) =>
    props.option === `saturday`
      ? `${Color.primary}`
      : props.option === `sunday`
      ? `${Color.red}`
      : props.option
      ? `${Color.gray2}`
      : `${Color.white}`};
  font-size: 12px;
  ${TxtCenter}
`
const ActiveDate = styled.div`
  ${TxtCenter}
  background-color: ${Color.primary};
  border-radius: 20px;
  width: 30px;
  height: 30px;
  font-size: 12px;
`
export default Calendar

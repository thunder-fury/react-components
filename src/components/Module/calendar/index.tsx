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
const Calendar = () => {
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
    <Container>
      <InnerCalendar.header>
        <button className="button" onClick={getPrevMonth}>
          Prev
        </button>
        <p>{`${selectedDate.getFullYear()}-${
          monthNames[selectedDate.getMonth()]
        }`}</p>
        <button className="button" onClick={getNextMonth}>
          Next
        </button>
      </InnerCalendar.header>
      <InnerCalendar.container>
        {daysShort.map((day) => (
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
      {/* <table className="table">
        <thead>
          <tr>
            {daysShort.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols: FIXME) => {
            return (
              <tr key={cols[0].date}>
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
                      notCurMonth={col.classes}
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        dateClickHandler(col.date)
                      }
                    >
                      {col.value}
                    </Date>
                  )
                )}
              </tr>
            )
          })}
        </tbody>
      </table> */}
    </Container>
  )
}
const Container = styled.div`
  max-width: 500px;
  width: 100%;
`
const TxtCenter = `
  align-items: center;
  justify-content: center;
`
const InnerCalendar = {
  header: styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
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
    display: flex;
    ${TxtCenter}
  `,
}

const Date = styled.div<{ option: string }>`
  color: ${(props) =>
    props.option === `saturday`
      ? `${Color.primary}`
      : props.option === `sunday`
      ? `${Color.error}`
      : props.option
      ? `${Color.gray2}`
      : `${Color.white}`};
  display: flex;
  font-size: 12px;
  ${TxtCenter}
`
const ActiveDate = styled.div`
  display: flex;
  ${TxtCenter}
  background-color: ${Color.primary};
  border-radius: 20px;
  width: 30px;
  height: 30px;
  font-size: 12px;
`
export default Calendar

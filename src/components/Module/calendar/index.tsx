import React, { FC, Fragment, useState } from 'react'
import styled from 'styled-components'
import useCalendar from '../../../hooks/useCalendar'
import { Color } from '../../../styles/common/Color'
import { FIXME } from '../../../types/Any'
import Button from '../../Atoms/Button'
type ColsType = {
  classes: string
  date: string
  value: number
}
type Props = {
  length?: string
  mode?: `normal` | `datePicker`
  handler?: (date: string) => void
}

const Calendar: FC<Props> = ({ length, handler, mode }) => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar()
  const [clickDate, setClickDate] = useState('')
  const dateClickHandler = (date: string) => {
    setClickDate(date)
  }

  return (
    <>
      <InnerCalendar.header>
        <InnerCalendar.button label={`<`} onClick={getPrevMonth} />
        <InnerCalendar.date>
          <h1>{`${monthNames(length)[selectedDate.getMonth()]}`}</h1>
          <p>
            {`${selectedDate.getFullYear()}/${
              monthNames(length)[selectedDate.getMonth()]
            }`}
          </p>
        </InnerCalendar.date>
        <InnerCalendar.button label={`>`} onClick={getNextMonth} />
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
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                      handler ? handler(col.date) : dateClickHandler(col.date)
                    }}
                  >
                    {col.value}
                  </ActiveDate>
                ) : (
                  <Date
                    key={col.date}
                    option={col.classes}
                    mode={`datePicker`}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                      handler ? handler(col.date) : dateClickHandler(col.date)
                    }}
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
    background-color: ${Color.dark};
    text-align: center;
    color: ${Color.white};
    grid-auto-rows: 100px;
    padding: 10px;
  `,
  button: styled(Button)`
    justify-self: center;
    align-self: center;
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
    grid-auto-rows: minmax(40px, auto);
    grid-auto-columns: minmax(40px, auto);
    align-items: center;
    justify-items: center;
    /* grid-gap: 10px; */
    background-color: ${Color.darkBlack};
    padding: 10px;
  `,
  weeek: styled.div`
    width: 100%;
    height: 100%;
    color: ${Color.white};
    ${TxtCenter}
  `,
}

const Date = styled.div<{ option: string; mode: `normal` | `datePicker` }>`
  width: 100%;
  height: 100%;
  cursor: ${(props) => (props.mode === `datePicker` ? `pointer` : `initial`)};
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
const DateInner = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
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

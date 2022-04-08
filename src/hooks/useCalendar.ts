import { useState } from 'react'

const daysShortArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// const daysShortArr = ['월', '화', '수', '목', '금', '토', '일']

const monthNamesArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekendJudgement = (j: number) =>
  j === 6 ? `saturday` : j === 7 ? `sunday` : ``
// const monthNamesArr = [
//   '1월',
//   '2월',
//   '3월',
//   '4월',
//   '5월',
//   '6월',
//   '7월',
//   '8월',
//   '9월',
//   '10월',
//   '11월',
//   '12월',
// ]

const useCalendar = (
  daysShort: string[] = daysShortArr,
  monthNames: string[] = monthNamesArr
) => {
  //오늘
  const today: Date = new Date()
  const todayFormatted = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`
  const daysInWeek: number[] = [1, 2, 3, 4, 5, 6, 0]
  const [selectedDate, setSelectedDate]: [
    Date,
    React.Dispatch<React.SetStateAction<Date>>
  ] = useState(today)
  const selectedMonthLastDate: Date = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  )
  const prevMonthLastDate: Date = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  )
  const daysInMonth: number = selectedMonthLastDate.getDate()
  const firstDayInMonth: number = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay()
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1
  let prevMonthStartingPoint: number =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1
  let currentMonthCounter = 1
  let nextMonthCounter = 1
  const rows = 6
  const cols = 7
  const calendarRows = []

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = []
      }
      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: 'in-prev-month',
              date: `${
                selectedDate.getMonth() === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()
              }-${
                selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()
              }-${prevMonthStartingPoint}`,
              value: prevMonthStartingPoint,
            },
          ]
          prevMonthStartingPoint++
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: weekendJudgement(j),
              date: `${selectedDate.getFullYear()}-${
                selectedDate.getMonth() + 1
              }-${currentMonthCounter}`,
              value: currentMonthCounter,
            },
          ]
          currentMonthCounter++
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: weekendJudgement(j),
            date: `${selectedDate.getFullYear()}-${
              selectedDate.getMonth() + 1
            }-${currentMonthCounter}`,
            value: currentMonthCounter,
          },
        ]
        currentMonthCounter++
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: 'in-next-month',
            date: `${
              selectedDate.getMonth() + 2 === 13
                ? selectedDate.getFullYear() + 1
                : selectedDate.getFullYear()
            }-${
              selectedDate.getMonth() + 2 === 13
                ? 1
                : selectedDate.getMonth() + 2
            }-${nextMonthCounter}`,
            value: nextMonthCounter,
          },
        ]
        nextMonthCounter++
      }
    }
  }
  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    )
  }

  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    )
  }

  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  }
}

export default useCalendar

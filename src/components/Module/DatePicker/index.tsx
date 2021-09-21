import React from 'react'
import styled from 'styled-components'
export const DatePicker: React.FC = () => {
  const checkLeapYear = (year: number): boolean => {
    // 윤년 계산
    if(year%400 == 0) {
      return true
    }else if(year%100 == 0) {
      return false
    } else if(year%4 == 0){
      return true
    } else {
      return false
    }
  }
  const getFirstDayOfWeek = (year:number, month: string | number):number => {
    if(month < 10) month = '0' + month
    return (new Date(year+'-'+month+'-01')).getDay()
  }

  const getLastDayOfweek = (year:number, month: number):number => {
    return new Date( year, month + 1, 0 ).getDay()
  }


  const changeYearMonth = (year:number, month: number): any => {
    //1월 ~ 12월 마지막 일 배열  
    let monthDay = [31,28,31,30,31,30,31,31,30,31,30,31]
    //첫 주공간
    let firstDayOfWeek = getFirstDayOfWeek(year, month)
    // // 마지막주 공간
    let lastDayOfWeek = 7 - getLastDayOfweek(year, month - 1) - 1
    let arrCalender = []
    let remainDay = 7 - (arrCalender.length%7)
    if(month == 2) if(checkLeapYear(year)) monthDay[1] = 29
    // 첫번째 열 빈공간 추가
    for (let i = 0; i < firstDayOfWeek; i++) arrCalender.push('')

    // 일 추가
    for (let i = 1; i <= monthDay[month-1]; i++) arrCalender.push(String(i))

    if(remainDay < 7) for (let i = 0; i < remainDay; i++) arrCalender.push('')
    // 마지막 열 빈공간 추가  
    for (let i = 0; i <= lastDayOfWeek; i++) {
      arrCalender.push('')
    }
    let calendarBody:any = document.querySelector(`[data-calendarBody]`)
    console.log(`dddd`)
    return renderDate(arrCalender)
  }
  const renderDate = (data: any) => {
    let h = []
    for (let i = 0; i < data.length; i++) {
      if( i == 0) {
        h.push(``)
      } else if (i%7 == 0) {
        h.push(``)
        h.push(``)
      }
      h.push(`${data[i]}`)
    }
    h.push(``)
    return h
  }
  console.log(changeYearMonth(2012,7))
  console.log()
  return(
    <>
      <calendar.container>
        <div>
          <button type={`button`}>＜</button>
          <input type={`number`} id={`year`} value={`2020`}/>
          <select name="" id="month">
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
          <button type={`button`}>＞</button>
        </div>
        <table>
          <thead>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </thead>
          <tbody id={`tb_body`} >
            {changeYearMonth(2012,7).map((day:any, i:number) => {
              return <calendar.day>{day}</calendar.day>
              
            })}
          </tbody>
        </table>
      </calendar.container>

      <input type="text" />
    </>
  )
}

const calendar = {
  container: styled.div``,
  day: styled.div`
    
  `
}

export default DatePicker
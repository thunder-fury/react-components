import React, { FC, useState } from 'react'
import Calendar from '../Calendar'

const DatePicker: FC = () => {
  const [date, setDate] = useState('')
  const [displayDatePicker, setDisplayDatePicker] = useState(false)
  const toogle = () => setDisplayDatePicker(!displayDatePicker)
  const dateClickHandler = (date: string) => {
    setDate(date)
    console.log(new Date(date))
  }
  return (
    <>
      <input defaultValue={date} onClick={toogle} type="text" />
      {displayDatePicker && <Calendar handler={dateClickHandler} />}
    </>
  )
}

export default DatePicker

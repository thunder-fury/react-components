import React from "react"
import { SampleProps } from '../interface'

export const Sample: React.FC<SampleProps> = ({
  txt,
}) => {
  return (
    <span>{txt}</span>
  )
}

export default Sample
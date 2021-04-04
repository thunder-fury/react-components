export interface ButtonProps{
  label?: string
  backgroundColor?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export interface SampleProps {
  txt?: string
}

export interface PagiNationProps {
  url?: string
}
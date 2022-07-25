import { FC, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  children?: React.ReactNode,
  width?: string,
  height?: string,
  variant?: CardVariant,
  onClick: (num: number) => void,
}

const Card: FC<CardProps> = ({ children, width, height, variant, onClick }) => {
  const [number, setNumber] = useState(0)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid #000' : 'none',
        backgroundColor: variant === CardVariant.primary ? '#ddd' : 'inherit',
      }}
      onClick={() => onClick(number)}
    >
      {children}
    </div>
  )
}

export default Card
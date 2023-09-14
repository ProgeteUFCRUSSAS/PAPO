import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonVariants = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <S.Button type="button" {...rest} className={`${variant}`}>
      {children}
    </S.Button>
  )
}

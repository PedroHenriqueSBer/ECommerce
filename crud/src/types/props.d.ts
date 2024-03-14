import { ReactNode } from "react"

export interface ButtonIconProps{
  icon: ForwardRefExoticComponent<LucideProps>
}

export interface ProductCardProps{
  item: import('./ViewModel').IProductViewModel
}

export interface IProductContextProps{
  products: import('./ViewModel').IProductViewModel[]
  setProducts: (value: import('./ViewModel').IProductViewModel[]) => void
  featured: import('./ViewModel').IProductViewModel[]
}

export interface IProviderContextProps{
  children: ReactNode
}
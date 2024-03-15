import { ReactNode } from "react"

export interface ButtonIconProps{
  icon: ForwardRefExoticComponent<LucideProps>
}

export interface ButtonProps{
  children: ReactNode,
  onClick?: () => void
}

export interface SelectProps{
  value: number,
  setValue: (value: number) => void
}

export interface ProductCardProps{
  item: import('./ViewModel').IProductViewModel
  top?: number 
}

export interface IProductContextProps{
  products: import('./ViewModel').IProductViewModel[]
  setProducts: (value: import('./ViewModel').IProductViewModel[]) => void
  featured: import('./ViewModel').IProductViewModel[]
}

export interface ICarProductContextProps{
  productsCar: import('./ViewModel').ICarProductViewModel[]
  addProductInCar: (id: number, quantity: number) => void
  removeProductInCar: (id: number, quantity: number) => void
  deleteProductInCar: (id: number, quantity: number) => void
}

export interface IProviderContextProps{
  children: ReactNode
}
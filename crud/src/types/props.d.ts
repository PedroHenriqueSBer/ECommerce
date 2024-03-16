import { ReactNode } from "react"
import { IProductViewModel } from "./ViewModel"

export interface ButtonIconProps{
  icon: ForwardRefExoticComponent<LucideProps>
  onClick?: () => void
}

export interface ButtonProps{
  children: ReactNode,
  onClick?: () => void
}

export interface CarItemProps extends IProductViewModel{
  quantity: number
}

export interface SelectProps{
  value: number,
  setValue: (value: number) => void
}

export interface ProductCardProps{
  item :import('./ViewModel').IProductViewModel,
  top?: number
}

export interface IProductContextProps{
  products: import('./ViewModel').IProductViewModel[]
  setProducts: (value: import('./ViewModel').IProductViewModel[]) => void
  featured: import('./ViewModel').IProductViewModel[]
  productsCar: import('./ViewModel').ICarProductViewModel[]
  addProductInCar: (id: number, quantity: number) => void
  removeProductInCar: (id: number, quantity: number) => void
  deleteProductInCar: (id: number) => void
  getAll: () => CarItemProps[]
  getSumAll: () => number
  isCarOpen: boolean
  setIsCarOpen: (value: boolean) => void
}

export interface IProviderContextProps{
  children: ReactNode
}

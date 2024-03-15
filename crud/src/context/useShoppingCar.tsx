'use client'

import { ICarProductViewModel } from "@/types/ViewModel";
import { ICarProductContextProps, IProviderContextProps } from "@/types/props";
import { createContext, useContext, useState } from "react";

const ShoppingCarContext = createContext<ICarProductContextProps>({} as ICarProductContextProps)

export const ShoppingCarContextProvider = ({
  children
}:IProviderContextProps) => {

  const [productsCar,setProductsCar] = useState<ICarProductViewModel[]>([])

  return (
    <ShoppingCarContext.Provider value={{
      productsCar,
      setProductsCar
    }}>
      {children}
    </ShoppingCarContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCarContext)
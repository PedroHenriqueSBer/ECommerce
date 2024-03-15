'use client'

import { ICarProductViewModel } from "@/types/ViewModel";
import { ICarProductContextProps, IProviderContextProps } from "@/types/props";
import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCarContext = createContext<ICarProductContextProps>({} as ICarProductContextProps)

export const ShoppingCarContextProvider = ({
  children
}:IProviderContextProps) => {

  const [productsCar,setProductsCar] = useState<ICarProductViewModel[]>([])

  const addProductInCar = (id: number, quantity: number) => {
    if(productsCar.filter(p => p.idItem === id).length < 0)
      setProductsCar([{idItem: id,quantity},...productsCar])
    else{
      productsCar.map(p => {
        if(p.idItem === id)
          p.quantity += quantity
        return p
      })
    }
  }

  const removeProductInCar = (id: number, quantity: number) => {
    
  }

  const deleteProductInCar = (id: number, quantity: number) => {

  }


  return (
    <ShoppingCarContext.Provider value={{
      productsCar,
      addProductInCar,
      removeProductInCar,
      deleteProductInCar
    }}>
      {children}
    </ShoppingCarContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCarContext)
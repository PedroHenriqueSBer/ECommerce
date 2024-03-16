'use client'

import { ICarProductViewModel, IProductViewModel } from "@/types/ViewModel";
import { IProviderContextProps, IProductContextProps, CarItemProps } from "@/types/props";
import { createContext, useContext, useEffect, useState } from "react";
import { Products } from '@/data/data.json'

const ProductContext = createContext<IProductContextProps>({} as IProductContextProps)

export const ProductProvider = ({ children }:IProviderContextProps) => {

  const [products,setProducts] = useState<IProductViewModel[]>([])
  const [featured,setFeatured] = useState<IProductViewModel[]>([])
  const [productsCar,setProductsCar] = useState<ICarProductViewModel[]>([])
  const [isCarOpen,setIsCarOpen] = useState(false)

  const addProductInCar = (id: number, quantity: number) => {
    if(productsCar.filter(p => p.idItem === id).length < 1){
      setProductsCar([{idItem: id,quantity},...productsCar])
    }
    else{
      setProductsCar(productsCar.map(p => {
        if(p.idItem === id)
          p.quantity += quantity
        return p
      }))
    }
  }

  const removeProductInCar = (id: number, quantity: number) => {
    setProductsCar(productsCar.map(p => {
      if(p.idItem === id)
        p.quantity -= quantity
      return p
    }))
    setProductsCar(productsCar.filter(p => p.quantity > 0))

  }

  const deleteProductInCar = (id: number) => {
    setProductsCar(productsCar.filter(p => p.idItem != id))
  }

  const getAll = ():CarItemProps[] => productsCar.map(pc => {return {quantity: pc.quantity,...products.filter(p => p.id === pc.idItem)[0]}})

  const getSumAll = () => getAll().map(p => p.price * p.quantity).reduce((a,b) => a + b ,0)

  useEffect(()=>{
    setProducts(Products)
    setFeatured(Products.slice(0,5))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      featured,
      productsCar,
      addProductInCar,
      removeProductInCar,
      deleteProductInCar,
      getAll,
      getSumAll,
      isCarOpen,
      setIsCarOpen
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
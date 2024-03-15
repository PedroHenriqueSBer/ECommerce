'use client'

import { IProductViewModel } from "@/types/ViewModel";
import { IProviderContextProps, IProductContextProps } from "@/types/props";
import { createContext, useContext, useEffect, useState } from "react";
import { Products } from '@/data/data.json'

const ProductContext = createContext<IProductContextProps>({} as IProductContextProps)

export const ProductProvider = ({ children }:IProviderContextProps) => {

  const [products,setProducts] = useState<IProductViewModel[]>([])
  const [featured,setFeatured] = useState<IProductViewModel[]>([])

  useEffect(()=>{
    setProducts(Products)
    setFeatured(Products.slice(0,5))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      featured
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
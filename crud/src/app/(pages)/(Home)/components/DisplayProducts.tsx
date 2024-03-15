'use client'

import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/context/useProduct"
import { IProductViewModel } from "@/types/ViewModel"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

export const DisplayProducts = () => {

  const { products } = useProducts()

  const [filtredProducts, setFiltredProducts] = useState<IProductViewModel[]>([])

  const onSearch = (input: string) => {
    setFiltredProducts(products.filter(p => p.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())))
  }

  useEffect(()=>{
    setFiltredProducts(products)
  },[products])

  return (
    <div className="w-full rounded shadow bg-slate-200 p-[2rem] grid grid-cols-4 items-start gap-3 min-h-[30rem]">
      <div className="col-span-3 flex items-center">
        <h1 className="text-xl text-slate-800 font-semibold">Filtrar</h1>
      </div>
      <div className="col-span-1 border-b border-b-slate-800 flex">
        <input type="text" placeholder="Procurar..." className="w-full h-full bg-inherit outline-none" defaultValue={''} onChange={({target: {value}})=> onSearch(value)} />
        <Search />
      </div>
      {filtredProducts &&
        filtredProducts.map(p =>
          <div key={p.id} className="bg-slate-300 rounded shadow">
            <ProductCard item={p} />  
          </div>
        )
      }
    </div>
  )
}
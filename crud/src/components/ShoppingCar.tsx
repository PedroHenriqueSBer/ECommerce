'use client'

import { ShoppingCart, Trash } from "lucide-react"
import { ButtonIcon } from "./ButtonIcon"
import { useProducts } from "@/context/useProduct"

export const ShoppingCar = () => {
  
  const { productsCar, addProductInCar, deleteProductInCar, removeProductInCar, getAll, getSumAll, isCarOpen, setIsCarOpen } = useProducts()

  return (
    <div>
      <ButtonIcon onClick={()=>{setIsCarOpen(!isCarOpen)}} icon={ShoppingCart} />
      {isCarOpen &&
        <div className="absolute p-4 bg-slate-300 right-[5rem] rounded shadow">
          <h1 className="text-2xl">Carrinho</h1>
          {getAll().length < 1
            ? (
              <p>Nenhum Item Adicionado...</p>
            )
            : (getAll().map(p => 
              <div key={p.id} className="border-b border-b-slate-800 grid grid-cols-4 items-center">
                <div className="col-span-3 text-xl">{p.name}</div>
                <div className="col-span-1"><ButtonIcon icon={Trash} onClick={()=>deleteProductInCar(p.id)} /></div>
                <div className="col-span-2">R${(p.price * p.quantity).toFixed(2)}</div>
                <div className="col-span-2">quantidade: {p.quantity}</div>
                <div className="col-span-2"><button onClick={()=>addProductInCar(p.id, 1)}>adicionar</button></div>
                <div className="col-span-2"><button onClick={()=>removeProductInCar(p.id, 1)}>remover</button></div>
              </div>
              ) )
          }
          {getSumAll().toFixed(2)}
        </div>
      }
    </div>

  )
}
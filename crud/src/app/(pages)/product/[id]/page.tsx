'use client'
import { NavHeader } from '@/components/NavHeader';
import { useProducts } from '@/context/useProduct';
import { IProductViewModel } from '@/types/ViewModel';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from "next/image"
import { Button } from '@/components/Button';
import { ShoppingCart } from 'lucide-react';

export default function Product(){
  const { id } = useParams();
  const { push } = useRouter()
  const { products, addProductInCar, setIsCarOpen } = useProducts()

  const [selectedProduct,setSelectedProduct] = useState<IProductViewModel | null>(null)
  const [numberOfProducts,setNumberOfProducts] = useState<number>(1)

  useEffect(()=>{
    if(typeof id === 'string'){
      if(!products.map(p => p.id).includes(parseInt(id)) && products.length > 0)
        push('/')
      setSelectedProduct(products.filter(p => p.id === parseInt(id))[0])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id, products])

  const onCart = () => {
    if(numberOfProducts < 1 || numberOfProducts > 99)
      return
    if(selectedProduct){
      addProductInCar(selectedProduct.id, numberOfProducts)
      setIsCarOpen(true)
    }

  }

  return (
    <main className='w-full'>
      <NavHeader />
      {selectedProduct &&
        <div className='w-full h-full flex items-center justify-center pt-[10rem]'>
          <div className='grid grid-cols-3 gap-4 w-[60rem]'>
              <div className='flex items-end justify-center row-span-2 col-span-2 p-2 hover:p-0 bg-slate-200 rounded shadow'>
                <Image src={selectedProduct.urlImage} width={3080} height={3080} alt=''/>
              </div>
              <div className='w-full h-full row-span-2 flex flex-col justify-between'>
                <div>
                  <h1 className='text-xl font-bold text-slate-800'>{selectedProduct.name}</h1>
                  <p className='text-sm text-slate-800 pl-3 pt-3 h-[20rem] overflow-auto'>{selectedProduct.description}</p>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                  <div>
                    <h1 className='text-xl font-semibold'>12X de <span className='text-green-500'>R${(selectedProduct.price/12).toFixed(2)}</span> sem juros</h1>
                    <h2 className='font-light'>ou <span className='text-red-600'>R${selectedProduct.price}</span> a vista</h2>
                  </div>
                  <div className='flex gap-2 w-full'>
                    <div className='w-[80%]'>
                      <Button onClick={onCart}>
                        <ShoppingCart />
                        Adicionar no carrinho
                      </Button>
                    </div>
                    <div className='w-[20%] border-b border-b-slate-800 px-2'>
                      <input type="number" className='w-full h-full outline-none bg-inherit' maxLength={2} max={99} min={1} defaultValue={1} onChange={({target: {value}})=>setNumberOfProducts(parseInt(value))}/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      }
    </main>
  )
}
'use client'

import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/context/useProduct"

export const FeaturedItems: () => JSX.Element = () => {
  const { featured } = useProducts()
  return (
      <>
        {featured.length > 0 &&
          <div className="w-full gap-4 grid grid-cols-4">
            <div className="col-span-2 row-span-2 w-full h-full bg-slate-200  rounded shadow">
              <ProductCard item={featured[0]} top={1} />
            </div>
            <div className="w-full h-full bg-slate-200  rounded shadow">
              <ProductCard item={featured[1]} top={2} />
            </div>
            <div className="w-full h-full bg-slate-200  rounded shadow">
              <ProductCard item={featured[2]} top={3} />
            </div>
            <div className="w-full h-full bg-slate-200  rounded shadow">
              <ProductCard item={featured[3]} top={4} />
            </div>
            <div className="w-full h-full bg-slate-200 rounded shadow">
              <ProductCard item={featured[4]} top={5} />
            </div>
          </div>
        }
      </>

  )
}

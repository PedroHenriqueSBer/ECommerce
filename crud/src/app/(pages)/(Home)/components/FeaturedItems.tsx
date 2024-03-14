'use client'

import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/context/useProduct"

export const FeaturedItems: () => JSX.Element = () => {
  const { featured } = useProducts()
  return (
    <div className="flex items-center justify-center">
      {featured.length > 0 &&
        <div className="w-[65rem] h-[45rem] gap-3 mt-[4rem] grid grid-cols-3">
          <div className="col-span-2 row-span-2 w-full h-full">
            <ProductCard item={featured[0]} />
          </div>
          <div className="w-full h-full">
            <ProductCard item={featured[1]} />
          </div>
          <div className="w-full h-full">
            <ProductCard item={featured[2]} />
          </div>
        </div>
      }
    </div>
  )
}

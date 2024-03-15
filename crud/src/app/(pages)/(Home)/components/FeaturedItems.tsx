'use client'

import { ProductCard } from "@/components/ProductCard"
import { useProducts } from "@/context/useProduct"

export const FeaturedItems: () => JSX.Element = () => {
  const { featured } = useProducts()
  return (
    <div className="flex items-center justify-center">
      {featured.length > 0 &&
        <div className="w-[55rem] gap-4 mt-[2rem] grid grid-cols-3">
          <div className="col-span-2 row-span-2 w-full h-full">
            <ProductCard item={featured[0]} top={1} />
          </div>
          <div className="w-full h-full">
            <ProductCard item={featured[1]} top={2} />
          </div>
          <div className="w-full h-full">
            <ProductCard item={featured[2]} top={3} />
          </div>
        </div>
      }
    </div>
  )
}

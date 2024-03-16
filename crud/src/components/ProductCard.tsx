import { ProductCardProps } from "@/types/props"
import Image from "next/image"
import Link from "next/link"

export const ProductCard = ({
  item,
  top
}: ProductCardProps) => {
  return (
    <Link href={`/product/${item.id}`} className="w-full h-full bg-inherit items-center justify-between flex flex-col group">
      <div className="self-start ml-5 mt-2 font-light text-sm"><h1 className="font-bold text-xl text-gray-800">{item.name}</h1> {top && ` #${top} mais vendidas` }</div>
      <Image src={item.urlImage} width={2040} height={2040} className="p-2 hover:p-0 transition-all duration-300" alt="" />
      <div className="self-start ml-5 mb-2">
        <h1 className='text-xl font-semibold'>12X de <span className='text-green-500'>R${(item.price/12).toFixed(2)}</span> sem juros</h1>
        <h2 className='font-light'>ou <span className='text-red-600'>R${item.price}</span> a vista</h2>
      </div>
    </Link>
  )
}
import { ProductCardProps } from "@/types/props"
import Image from "next/image"

export const ProductCard = ({item}: ProductCardProps) => {
  return (
    <div className="w-full h-full bg-slate-200 rounded shadow">
      <Image src={item.urlImage} width={50} height={80} alt="" />
      {item.name}
    </div>
  )
}
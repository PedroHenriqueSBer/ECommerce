import { ButtonIconProps } from "@/types/props"

export const ButtonIcon = ({
  icon: Icon
}: ButtonIconProps) => {
  return (
    <button className="rounded-full hover:bg-slate-300 p-2">
      <Icon className="text-gray-800" />
    </button>
  )
}
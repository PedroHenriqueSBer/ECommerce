import { ButtonIconProps } from "@/types/props"

export const ButtonIcon = ({
  icon: Icon
}: ButtonIconProps) => {
  return (
    <button className="rounded-full hover:bg-slate-700 p-2">
      <Icon className="text-sky-400" />
    </button>
  )
}
import { ButtonProps } from "@/types/props"

export const Button = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <button className="flex items-center w-full gap-2 hover:bg-slate-900 justify-center px-4 py-3 bg-slate-800 text-slate-200 rounded shadow" onClick={onClick}>{children}</button>
  )
}
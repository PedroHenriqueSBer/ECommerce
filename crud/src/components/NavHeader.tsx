import {
  Bell,
  ShoppingCart
} from 'lucide-react'
import { ButtonIcon } from './ButtonIcon'

export const NavHeader = () => {
  return (
    <header className="w-full p-4 bg-slate-200 shadow flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">Wizard Store</h1>
      </div>
      <div className='flex items-center gap-2'>
        <ButtonIcon icon={Bell} />
        <ButtonIcon icon={ShoppingCart} />
        <button className="rounded-full bg-gray-800 w-12 h-12">
        </button>
      </div>
    </header>
  )
}
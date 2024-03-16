import Link from 'next/link'
import { ShoppingCar } from './ShoppingCar'

export const NavHeader = () => {
  return (
    <header className="w-full p-4 bg-slate-200 shadow flex items-center justify-between fixed">
      <div>
        <Link href='/' className="text-xl font-semibold text-gray-700">Wizard Store</Link>
      </div>
      <div className='flex items-center gap-2'>
        <ShoppingCar />
        <button className="rounded-full bg-gray-800 w-12 h-12">
        </button>
      </div>
    </header>
  )
}
import { NavHeader } from "@/components/NavHeader";
import { FeaturedItems } from "./components/FeaturedItems";
import { DisplayProducts } from "./components/DisplayProducts";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className="flex flex-col items-center px-[20rem] gap-[2rem] py-[2rem]">
        <FeaturedItems />
        <DisplayProducts />
      </div>
    </>
  )
}

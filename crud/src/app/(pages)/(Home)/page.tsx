import { NavHeader } from "@/components/NavHeader";
import { FeaturedItems } from "./components/FeaturedItems";

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <FeaturedItems />
      </main>
    </>
  );
}

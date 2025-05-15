import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import LatFilter from "./components/LatFilter";

export default function Home() {
  return (
    <div className=" bg-stone-100">

      <div className="grid lg:grid-cols-12 grid-cols-2">
        <LatFilter />
        <ProductList />
      </div>
    </div>
  );
}

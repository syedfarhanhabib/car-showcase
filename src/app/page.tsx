import Hero from "@/components/hero";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import CustomFilter from "@/components/customFilter";

export default function Home() {
  return (
    <main className="overflow-hidden w-full h-full" >
      <Hero />
      <section className="w-full min-h-dvh mt-20 px-10" >
        <h1>Car catalogue</h1>
        <p className={`text-4xl md:text-7xl tracking-tighter font-bold leading-none `}>Explore out cars you might like</p>
        <div className="container mt-10 !px-0 flex items-center justify-between">
          <SearchBar />
          <div className="filters flex items-center gap-5">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </section>
    </main>
  );
}

import Navbar from "@/components/navbar";
import SearchInput from "@/components/searchinput";

export default function Home() {
  return (
    <div className="bg-[rgb(2,1,44)]">
      <div className="container mx-auto p-[1rem] md:p-[1.5rem] lg:px-[7rem] lg:pt-[3rem]">
        <Navbar />
        <h1 className="font-bold text-white text-center text-[3.25rem] leading-[120%] py-[3rem] lg:py-[4rem]">
          How’s the sky looking today?
        </h1>
        <SearchInput />
      </div>
    </div>
  );
}

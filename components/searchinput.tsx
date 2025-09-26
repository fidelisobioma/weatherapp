"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      if (query.trim()) {
        router.push(`/?q=${encodeURIComponent(query)}`);
      }
    });

    setQuery("");
  };
  return (
    <div className=" lg:max-w-[550px] mx-auto relative">
      <form
        onSubmit={handleSubmit}
        className="md:flex items-center gap-[1rem] "
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a place..."
            className="bg-[#262540]  w-full text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] pl-10 rounded-md"
          />
          <Image
            src="/images/icon-search.svg"
            alt="Search icon"
            height={20}
            width={20}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4658d9] w-full md:w-auto text-center  text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] px-[1.5rem] mt-[0.75rem] md:mt-0 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>
      {isPending && (
        <div className="absolute z-50 flex bg-[#302f4a] items-center gap-2 p-2.5 mt-4 max-w-[430px] w-full rounded-md">
          <div>
            <Image
              src="/images/icon-loading.svg"
              alt="loading"
              width={16}
              height={19}
              className="animate-spin"
            />
          </div>
          <p className="text-white">Search in progress...</p>
        </div>
      )}
    </div>
  );
};

export default SearchInput;

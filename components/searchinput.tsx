"use client";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { addSearchHistory, getSearchHistory } from "@/utils/searchHistory";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [history, setHistory] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  //submit value
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      if (query.trim()) {
        router.push(`/?q=${encodeURIComponent(query)}`);
      }
      //retrieve search value
      if (!query) return;
      addSearchHistory(query);
      setHistory(getSearchHistory());
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
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
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
          className="font-dmsans bg-[#4658d9] transition-colors duration-200 hover:bg-[#6377fa] hover:shadow-lg w-full md:w-auto text-center  text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] px-[1.5rem] mt-[0.75rem] md:mt-0 rounded-md cursor-pointer"
        >
          Search
        </button>
      </form>
      {/* Search in progress */}
      {isPending && (
        <div className="absolute z-50 flex bg-[#302f4a] shadow-md items-center gap-2 p-2.5 mt-2 max-w-[430px] w-full rounded-md">
          <div>
            <Image
              src="/images/icon-loading.svg"
              alt="loading"
              width={16}
              height={19}
              className="animate-spin"
            />
          </div>
          <p className="font-dmsans text-white">Search in progress...</p>
        </div>
      )}
      {/* search history */}
      {showDropdown && history.length > 0 && (
        <div className="absolute z-50 max-w-[430px] w-full mt-2 bg-[#302f4a]  shadow-md rounded-lg overflow-hidden">
          {history.map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="font-dmsans block w-full text-left px-4 py-2 text-white hover:bg-[#3c3b5e] cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

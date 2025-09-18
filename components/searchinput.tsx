import Image from "next/image";
const SearchInput = () => {
  return (
    <div className="grid justify-center">
      <form className="md:flex items-center gap-[1rem] ">
        <div className="relative flex-1">
          <input
            type="search"
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
          className="bg-[#4658d9] w-full md:w-auto text-center  text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] px-[1.5rem] mt-[0.75rem] md:mt-0 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

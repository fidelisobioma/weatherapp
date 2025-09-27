interface NoResultsProps {
  query: string;
}

export default function NoResults({ query }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className=" text-white text-xl font-semibold">
        No results found for <span className="text-pink-400">{query}</span>.
      </p>
      <p className="font-dmsans text-gray-400 mt-2">
        Try searching for another city.
      </p>
    </div>
  );
}

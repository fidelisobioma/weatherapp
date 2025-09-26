export function getSearchHistory(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("searchHistory") || "[]");
}

export function addSearchHistory(query: string) {
  if (typeof window === "undefined") return;

  const cleanQuery = query.trim();
  if (!cleanQuery) return; //  don’t add empty/invalid values

  const history = getSearchHistory();

  // case-insensitive check
  if (
    !history.some((item) => item.toLowerCase() === cleanQuery.toLowerCase())
  ) {
    history.unshift(cleanQuery); // add to top
    localStorage.setItem("searchHistory", JSON.stringify(history.slice(0, 5))); // keep max 5
  }
}

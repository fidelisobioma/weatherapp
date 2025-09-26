export function getSearchHistory(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("searchHistory") || "[]");
}

export function addSearchHistory(query: string) {
  if (typeof window === "undefined") return;
  const history = getSearchHistory();
  if (!history.includes(query)) {
    history.unshift(query); // add to top
    localStorage.setItem("searchHistory", JSON.stringify(history.slice(0, 5))); // keep max 5
  }
}

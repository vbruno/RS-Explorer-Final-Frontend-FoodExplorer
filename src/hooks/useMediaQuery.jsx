import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    if (matchQueryList.matches !== matches) {
      setMatches(matchQueryList.matches);
    }

    function handleChange(e) {
      setMatches(e.matches);
    }

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [matches, query]);

  return matches;
}

import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) return initialState;

    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );

  return [state, setState];
}

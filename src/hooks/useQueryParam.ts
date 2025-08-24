import { useEffect, useState } from "react";

export function useQueryParam(param: string) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(param);
    setValue(paramValue);
  }, [param]);

  return value;
}

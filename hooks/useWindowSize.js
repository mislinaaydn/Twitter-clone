import { useEffect, useState } from "react";

function useWindowSize() {
  // State'in başlangıç değerini undefined olarak ayarlıyoruz.
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Bu kod sadece istemci tarafında çalışacak.
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    if (isClient) {
      // İlk render'da pencere boyutlarını alıyoruz.
      setWindowSize(getSize());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;

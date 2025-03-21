"use client";

import { useCallback } from "react";

export function useScrollTo() {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20; // Ajustez selon votre navbar

    window.history.pushState(null, "", `#${id}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: "smooth"
    });
  }, []);

  return scrollTo;
} 
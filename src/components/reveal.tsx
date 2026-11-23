"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Tag usada: "li" dentro de listas. */
  as?: "div" | "li";
};

/** Entrada suave ao rolar a página (IntersectionObserver, só transform e opacity). */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

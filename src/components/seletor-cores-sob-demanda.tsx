"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// O seletor só é baixado quando o endereço tem ?cores ou ?tema=... (visitantes comuns não pagam por ele).
const SeletorCores = dynamic(() => import("./seletor-cores").then((m) => m.SeletorCores), { ssr: false });

export function SeletorCoresSobDemanda() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // Leitura única do endereço ao abrir a página.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (params.has("cores") || params.has("tema")) setMostrar(true);
  }, []);

  return mostrar ? <SeletorCores /> : null;
}

"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CATEGORIAS } from "@/types";
import { ArrowDown, ChevronDown } from "lucide-react";
import React from "react";

function LatFilter() {
  return (
    <div className="col-span-2 h-fit text-stone-800 shadow m-4 p-4 rounded-lg">
      <h1>Resultados de Búsqueda</h1>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="flex flex-row justify-between items-center mt-2">
            <h2 className="font-semibold">Categoría</h2>
            <ChevronDown />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <section className="mt-2 p-2 rounded-lg flex flex-col gap-4">
            {Object.keys(CATEGORIAS).map((key) => (
              <button
                className="text-left p-2 border-b cursor-pointer hover:bg-stone-200 transition-color"
                key={key}
              >
                {key}
              </button>
            ))}
          </section>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="flex flex-row justify-between items-center mt-2">
            <h2 className="font-semibold">Marca</h2>
            <ChevronDown />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <section className="mt-2 p-2 rounded-lg flex flex-col gap-4">
            {["BrandA", "BrandB", "BrandC"].map((v: string) => (
              <button
                className="text-left p-2 border-b cursor-pointer hover:bg-stone-200 transition-color"
                key={v}
              >
                {v}
              </button>
            ))}
          </section>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default LatFilter;

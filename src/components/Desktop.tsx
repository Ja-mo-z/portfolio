import { useState } from "react";
import Planet from "./Planet";
import PlanetModal from "./PlanetModal";
import type { PlanetData } from "../data/planets";
import { planets } from "../data/planets";
type PlanetState = {
  [id: string]: PlanetData;
};

export default function Desktop() {
  // taking an array of values and turning it into one object
  const [planetState, setPlanetState] = useState<PlanetState>(
    // accumulator = thing you're building (initially {})
    // p = current element in the array (i.e. accumulator[0])
    // index = index of p
    planets.reduce((accumulator, p, index) => {
      accumulator[p.id] = {
        id: p.id,
        position: p.position,
        title: p.title,

        // isOpen: false,
        // zIndex: index,
      };
      return accumulator;
    }, {} as PlanetState)
  );

  const updatePosition = (id: string, pos: { x: number; y: number }) => {
    setPlanetState((prev) => ({
      ...prev,
      [id]: { ...prev[id], position: pos },
    }));
  };

  return (
    <div className="bg-sky-950">
      {planets.map((p) => {
        const state = planetState[p.id];

        return (
          <div key={p.id}>
            <Planet
              id={p.id}
              title={p.title}
              position={state.position}
              //   zIndex={state.zIndex}
              //   isOpen={state.isOpen}
              onMove={(pos) => updatePosition(p.id, pos)}
              //   onToggleOpen={() => toggleOpen(p.id)}
              //   onBringToFront={() => bringToFront(p.id)}
            />

            {/* {state.isOpen && (
              <PlanetModal
                title={p.title}
                planetPosition={state.position}
                zIndex={state.zIndex + 100}
              />
            )} */}
          </div>
        );
      })}
    </div>
  );
}

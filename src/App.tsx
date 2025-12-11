// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// import { ShootingStars } from "@/components/ui/shooting-stars";

import Desktop from "./components/Desktop";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import RocketCursor from "rocket-cursor-component";
import DesktopWarning from "./components/DesktopWarning";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black relative">
      <DesktopWarning /> {/* <-- overlay warning for small screens */}
      <ShootingStars className="absolute top-0 left-0 w-full h-full" />
      <StarsBackground className="absolute top-0 left-0 w-full h-full" />
      {/* Foreground content */}
      <div className="relative z-10">
        <Desktop />
      </div>
      <RocketCursor size={20} />
    </div>
  );
}

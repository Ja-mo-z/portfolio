import { motion } from "framer-motion";
import planetTemp from "../assets/temp_planet.webp";

export type PlanetProps = {
  id: string;
  title: string;
  position: { x: number; y: number };
  onMove: (pos: { x: number; y: number }) => void;
};

export default function Planet({
  title,
  position,
  //   zIndex,
  //   isOpen,
  onMove,
}: //   onToggleOpen,
PlanetProps) {
  return (
    <motion.div
      className="planet"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        // zIndex,
      }}
      drag
      whileDrag={{
        scale: 1.1,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      }}
      dragMomentum={false}
      //   onDragStart={() => {}}
      onDragEnd={(event, info) => {
        onMove({
          x: info.point.x,
          y: info.point.y,
        });
        console.log(event);
      }}
      onClick={(e) => {
        e.stopPropagation();
        // onToggleOpen();
      }}
      animate={
        {
          // TODO
        }
      }
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center justify-center gap-2">
        <div>
          <img src={planetTemp} height={50} />
        </div>

        <div>{title}</div>
        <div className="bg-red text-blue p-2">TEST</div>
        <div className="bg-blue-500 w-32 h-32"></div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

const Cube = () => {
  return (
    <div
      className="flex items-center justify-center "
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative w-40 h-40"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: [0, -50, 0], rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {["front", "back", "left", "right", "top", "bottom"].map((face) => (
          <div
            key={face}
            className="absolute w-40 h-40 bg-black border border-white opacity-10 flex items-center justify-center"
            style={{ transform: getFaceTransform(face) }}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

const getFaceTransform = (face: string) => {
  const size = 40;
  switch (face) {
    case "front":
      return `translateZ(${size * 2}px)`;
    case "back":
      return `rotateY(180deg) translateZ(${size * 2}px)`;
    case "left":
      return `rotateY(-90deg) translateZ(${size * 2}px)`;
    case "right":
      return `rotateY(90deg) translateZ(${size * 2}px)`;
    case "top":
      return `rotateX(90deg) translateZ(${size * 2}px)`;
    case "bottom":
      return `rotateX(-90deg) translateZ(${size * 2}px)`;
    default:
      return "";
  }
};

export default Cube;

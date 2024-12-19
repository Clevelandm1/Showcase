import { motion } from "motion/react";
function Drawer() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="z-[9] backdrop-brightness-[.60] backdrop-blur-sm h-[100%] w-[100%] top-0 fixed animate-fade-in" />
        <div className="bg-neutral-800 h-[100%] top-0 animate-from-right z-[10] w-1/2 fixed translate-x-full">
          Drawer
        </div>
      </div>
    </>
  );
}

export default Drawer;

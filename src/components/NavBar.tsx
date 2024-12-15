import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const button_dark = [
    { boxShadow: "0px 0px 5px #000", backgroundColor: "#262626" },
    {
      boxShadow: "0px 0px 25px #000",
      backgroundColor: "#1f1f1f",
      scale: 1.1,
    },
    { scale: 0.8, y: "30px" },
  ];

  const pages = ["Home", "Games", "Art", "About"];
  const { scrollYProgress } = useScroll();
  let yval = 25;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //console.log("Page scroll: ", latest);

    yval = latest * 25;
    console.log(yval);
  });

  const y = useTransform(scrollYProgress, [0, 0.25], ["0px", "20px"]);

  return (
    <>
      <motion.div
        initial={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          borderRadius: "50px",
        }}
        style={{ y }}
      >
        <div className="flex justify-center items-center p-[.7%] bg-neutral-800 shadow-black shadow-xl bg-opacity-50 backdrop-blur-sm">
          <div className="flex items-center gap-3 justify-center flex-wrap p-3 bg-opacity-50 backdrop-blur-sm max-h-max bg-neutral-950 shadow-inner shadow-zinc-950 rounded-3xl smed:max-w-[528px] med:min-w-max smll:max-w-min">
            {pages.map((page, index) => (
              <motion.button
                key={index}
                initial={{
                  boxShadow: "0px 0px 10px #000",
                  borderRadius: "13px",
                  opacity: 0.65,
                }}
                whileHover={{
                  boxShadow: "0px 0px 15px #000",
                  scale: 1.05,
                  opacity: 1,
                }}
                whileTap={{
                  boxShadow: "0px 0px 15px #000",
                  scale: 0.96,
                  opacity: 1,
                }}
              >
                <div className="text-neutral-300 bg-neutral-900 font-bold text-5xl flex-auto min-w-60 min-h-16 size-full rounded-xl p-1 ">
                  {page}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;

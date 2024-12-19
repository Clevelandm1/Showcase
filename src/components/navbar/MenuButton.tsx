import { motion } from "motion/react";
import { useState } from "react";
import Drawer from "./Drawer";

function MenuButton() {
  return (
    <>
      <motion.button
        initial={{
          boxShadow: "0px 0px 10px #000",
          borderRadius: "13px",
          opacity: 0.65,
          backgroundColor: "#171717",
        }}
        whileHover={{
          boxShadow: "0px 0px 15px #000",
          scale: 1.05,
          opacity: 1,
          transition: { duration: 0.1 },
        }}
        whileTap={{
          boxShadow: "0px 0px 15px #000",
          scale: 0.97,
          opacity: 1,
          transition: { duration: 0.05 },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-list text-neutral-300 font-bold text-5xl flex-auto min-w-30 min-h-30 rounded-xl"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </motion.button>
    </>
  );
}

export default MenuButton;

{
  /* <Drawer
        position="right"
        opened={opened}
        onClose={close}
        style={{ zIndex: 3 }}
        overlayProps={{ backgroundOpacity: 0.3, blur: 3 }}
        size={"40%"}
        classNames={{
          root: "bg-neutral-800",

          title: "bg-neutral-800",
          body: "bg-neutral-800",
        }}
        withCloseButton={false}
      >
        {
          <>
            <div>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
            </div>
          </>
        }
      </Drawer> */
}

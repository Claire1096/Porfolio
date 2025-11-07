import { Card } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById("Welcome");
      if (!welcomeSection) return;

      const welcomeBottom = welcomeSection.getBoundingClientRect().bottom;
      setVisible(welcomeBottom <= 100); // show only after Welcome
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-9999"
        >
          <Card className="flex items-center justify-center border-none bg-transparent shadow-none">
            <nav className="flex items-center gap-3 bg-[#F9B8C0] rounded-full px-4 py-2 shadow-md">
              {["Home", "About", "Projects", "Contacts"].map((name) => (
                <button
                  key={name}
                  onClick={() => handleNavClick(name)}
                  className="relative text-white text-sm font-medium px-6 py-2 overflow-hidden rounded-full group transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-[#CE4735] scale-x-0 origin-left transition-transform duration-500 ease-out rounded-full group-hover:scale-x-100"></span>

                  {/* Text above animation */}
                  <span className="relative z-10">{name}</span>
                </button>
              ))}
            </nav>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    if (sideBarOpen) {
      document.documentElement.classList.add("dark-overlay");
    }
    
    return () => {
      document.documentElement.classList.remove("dark-overlay");
    }
  }, [sideBarOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 lg:top-5 z-20 backdrop-blur-xl dark:backdrop-blur-xs font-medium sm:bg-black/10 dark:sm:bg-gray-700/70 lg:rounded-full lg:mx-20"
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />

      <div
        className={`text-gray-800 dark:text-white sm:text-sm ${sideBarOpen ? "max-md:w-80 max-md:pl-10" : "max-md:w-0 overflow-hidden"} max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full max-md:flex-col ${theme === "light" ? "max-md:bg-primary" : "max-md:bg-gray-700"}  max-md:text-white max-md:pt-20 flex md:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="close-button-icon"
          className="w-5 absolute right-4 top-4 md:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />

        <a
          onClick={() => setSideBarOpen(false)}
          href="#"
          className="max-md:hover:text-gray-300 lg:hover:border-b transition-colors"
        >
          Home
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#services"
          className="max-md:hover:text-gray-300 lg:hover:border-b transition-colors"
        >
          Services
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#our-work"
          className="max-md:hover:text-gray-300 lg:hover:border-b transition-colors"
        >
          Our Work
        </a>
        <a
          onClick={() => setSideBarOpen(false)}
          href="#contact-us"
          className="max-md:hover:text-gray-300 lg:hover:border-b transition-colors"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          onClick={() => setSideBarOpen(true)}
          alt="menu button"
          className="w-8 md:hidden cursor-pointer"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="forward-arrow" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;

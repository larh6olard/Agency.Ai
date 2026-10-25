import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Ref for custom cursor position tracking
  const mouse = useRef({ x: -20, y: -20 });
  const position = useRef({ x: -20, y: -20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let rafId = "";
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;

        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="dark:bg-black transition-all duration-200 relative overflow-x-clip">
      <Toaster
        position="bottom-right"
        className="mb-10"
        toastOptions={{ duration: 1500 }}
      />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className={`fixed top-0 left-0 size-10 rounded-full border max-md:hidden ${theme === "dark" ? "border-primary" : "border-black"} pointer-events-none z-9999`}
        style={{ transition: "transform 0.05s ease-out" }}
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 size-3 rounded-full max-md:hidden ${theme === "light" ? "bg-black" : "bg-primary"} pointer-events-none z-9999`}
      ></div>
    </div>
  );
}

export default App;

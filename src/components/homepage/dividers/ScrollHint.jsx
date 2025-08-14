import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function ScrollHint() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100)
        setOpacity(0); 
      else setOpacity(1); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex dark:bg-dark-bg justify-center mt-6 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="hidden md:flex flex-col items-center gap-1 text-5xl">
        <span className="animate-fadeInDown text-light-accent dark:text-dark-accent select-none">
          <MdKeyboardDoubleArrowDown />
        </span>
      </div>
    </div>
  );
}

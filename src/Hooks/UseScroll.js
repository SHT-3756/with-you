import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export function UseScroll() {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return {
    UseScroll,
    scrollNav,
    toggleHome,
  };
}

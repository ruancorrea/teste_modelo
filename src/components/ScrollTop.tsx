import { useEffect } from "react";
import { useScrollY } from "@/hooks/useScrollY";
import { IconArrowUP } from "./Icons";

export default function ScrollTop() {
  const scrollY = useScrollY();

  useEffect(() => {
    const button = document.getElementById("scrollTopButton");
    if (scrollY > 0 && button != null) {
      button.classList.remove("hidden");
    } else if (button != null) {
      button.classList.add("hidden");
    }
  }, [scrollY]);

  function BackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para uma rolagem suave
    });
  }

  return (
    <button
      id="scrollTopButton"
      onClick={BackToTop}
      className="fixed bottom-10 right-10 p-2 bg-pink-200 text-white rounded-lg 
                 hover:bg-pink-400 transition duration-500 ease-in-out delay-100 
                 animate-pulse hover:animate-none hover:-translate-y-2 hidden"
    >
      {IconArrowUP}
    </button>
  );
}
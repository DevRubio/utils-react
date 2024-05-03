import { useEffect, useState } from "react";

const ButtonTheme = () => {
  const [icon, setIcon] = useState("");
  const [theme, setTheme] = useState(() => {
    //Se utiliza para tomar el theme del sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIcon("sun");
      return "dark";
    }
    setIcon("moon");
    return "light";
  });

  useEffect(() => {
    const themeUser = localStorage.getItem("themeUser");
    if (themeUser === "dark") {
      document.querySelector("html").classList.add("dark");
      setIcon("sun");
    } else {
      document.querySelector("html").classList.remove("dark");
      setIcon("moon");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("themeUser", theme);
  };
  return (
    <div className="fixed right-2 top-2 bg-slate-200 px-4 py-2 rounded-full hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900">
      <button
        className=""
        onClick={handleChangeTheme}
      >
        <i className={`fa-solid fa-${icon} fa-xl p-2`}></i>
      </button>
    </div>
  );
};

export default ButtonTheme;

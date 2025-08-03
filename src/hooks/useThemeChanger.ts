import { useState,useEffect } from "react";

export function useThemeChanger(){
    const [isThemeDark,setIsThemeDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersThemeDark = window.matchMedia("(prefers-color-scheme): dark").matches;
        setIsThemeDark(savedTheme === 'dark' || (!savedTheme && prefersThemeDark));
    }, []);

    const toggleTheme = () => {
        const newTheme = !isThemeDark ? 'dark' : 'light';
        setIsThemeDark(!isThemeDark);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme',newTheme);
        }
    }

    useEffect(()=>{
        if (isThemeDark) {
        document.body.setAttribute("data-theme", "dark");
        } else {
        document.body.removeAttribute("data-theme");
        }
    },[isThemeDark]);

    return{
        toggleTheme,
        isThemeDark
    }
}
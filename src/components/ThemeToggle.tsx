"use client"

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
    const { theme, setTheme } = useTheme();

    return (
        <div className={className} {...props}>
            <button className="flex gap-2 outline-none" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""}`} />
                <SunIcon className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""}`} />
                <p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
            </button>
        </div>
    );
}


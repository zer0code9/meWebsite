'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

const NavContainer = React.forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-row items-center justify-center z-50 w-min rounded-[10px] border border-secondary-foreground cursor-pointer backdrop-blur-[10px]",
            className
        )}
        {...props}
    >
        { children }
    </div>
))
NavContainer.displayName = "NavContainer";

const NavItem = React.forwardRef(({ className, children, name, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "flex flex-row p-[5px] m-[10px] *:hover:px-[10px]",
            className
        )}
        onClick={() => scrollToElement(name)}
        {...props}
    >
        <div className="duration-[300ms] ease-in-out">{" { "}</div>
        { name }
        <div className="duration-[300ms] ease-in-out">{" } "}</div>
    </button>
))
NavItem.displayName = "NavItem";

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Optional: Add smooth scrolling
    }
}

export { NavContainer, NavItem }


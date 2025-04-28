'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = React.forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative w-full h-16 flex flex-row items-center justify-center p-[10px] text-[20px] text-secondary-foreground border-t border-secondary-foreground ",
            className
        )}
        {...props}
    >
        { children }
    </div>
));
FooterContainer.displayName = "FooterContainer";

const FooterSection = React.forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-row flex-wrap items-center justify-center",
            className
        )}
        {...props}
    >
        { children }
    </div>
));
FooterSection.displayName = "FooterSection";

const FooterItem = React.forwardRef(({ className, children, name, icon, link, ...props }, ref) => (
    <a
        ref={ref}
        className={cn(
            "p-[10px] hover:text-primary-foreground flex items-center cursor-pointer",
            className
        )}
        href={ link }
        {...props}
    >
        <FontAwesomeIcon icon={ icon } />
        <div className="hidden md:inline pl-[5px]">{ name }</div>
    </a>
));
FooterItem.displayName = "FooterItem";

export { FooterContainer, FooterSection, FooterItem };
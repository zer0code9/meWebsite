'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

const CardContainer = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex flex-row flex-wrap justify-center w-full",
            className
        )}
        {...props}
    />
));
CardContainer.displayName = "CardContainer";

const Card = React.forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex flex-col items-center justify-center rounded-[10px] border border-secondary-foreground cursor-default m-[5px] p-[10px] transition-all bg-transparent hover:border-primary-foreground",
            className
        )}
        {...props}
    >
        { children }
    </div>
));
Card.displayName = "Card";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-[20px] font-semibold",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardText = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "",
            className
        )}
        {...props}
    />
));
CardText.displayName = "CardText";

const CardButton = React.forwardRef(({ className, children, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "rounded-[10px] border border-secondary-foreground cursor-pointer p-[8px] hover:text-primary-foreground",
            className
        )}
        {...props}
    >
        { children }
    </button>
));
CardButton.displayName = "CardButton";

export { CardContainer, Card, CardTitle, CardText, CardButton };
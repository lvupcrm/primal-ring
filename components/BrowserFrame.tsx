"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";

interface BrowserFrameProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export function BrowserFrame({ children, className, url = "lvup.kd-sports.com" }: BrowserFrameProps) {
    return (
        <div className={cn("rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/80 backdrop-blur-xl", className)}>
            {/* Browser Toolbar */}
            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between gap-4">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-lg mx-auto">
                    <div className="h-6 w-full bg-black/20 rounded-md flex items-center justify-center text-[10px] text-muted-foreground font-medium border border-white/5">
                        🔒 {url}
                    </div>
                </div>

                {/* Spacer for centering */}
                <div className="w-14" />
            </div>

            {/* Viewport */}
            <div className="relative w-full h-full bg-background overflow-hidden relative">
                {children}

                {/* Reflection/Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
        </div>
    );
}

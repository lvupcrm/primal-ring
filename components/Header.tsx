"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="relative w-24 h-8 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="LVUP Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        기능 소개
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        요금안내
                    </Link>
                    <Link href="#proof" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        고객 사례
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        FAQ
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm">로그인</Button>
                    <Button size="sm">무료 체험 시작</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl"
                >
                    <Link
                        href="#features"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        기능 소개
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        요금안내
                    </Link>
                    <Link
                        href="#proof"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        고객 사례
                    </Link>
                    <Link
                        href="#faq"
                        className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        FAQ
                    </Link>
                    <div className="flex flex-col gap-2 mt-2">
                        <Button variant="outline" className="w-full">로그인</Button>
                        <Button className="w-full">무료 체험 시작</Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}

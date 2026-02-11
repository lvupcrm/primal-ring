"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";
import { BrowserFrame } from "./BrowserFrame";

export function Hero() {
    return (

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-background to-background">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Primary Blob (Blue) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2.0, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/30 blur-[100px] rounded-full pointer-events-none"
            />

            {/* Secondary Blob (Accent/Amber) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 50, -50, 0],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="text-center lg:text-left space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                        피트니스 운영의 기준을 <br />
                        <span className="text-primary">다시 설계하다</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground whitespace-pre-wrap">
                        LVUP는 상담부터 재등록까지 <br className="hidden md:block" />
                        고객의 모든 여정을 하나의 구조로 연결하는 <br className="hidden md:block" />
                        피트니스 전용 운영 OS입니다.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button size="lg" className="rounded-full text-lg px-8">
                            14일 무료 체험
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                            서비스 소개서 보기
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                    className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-[2000px]"
                >
                    {/* Browser Mockup Frame */}
                    <motion.div
                        initial={{ rotateY: -10, rotateX: 5, y: 30 }}
                        animate={{
                            rotateY: [-10, -5, -10],
                            rotateX: [5, 0, 5],
                            y: [30, 10, 30]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[600px] z-20"
                    >
                        <BrowserFrame className="aspect-[16/10] bg-background/95 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
                            <DashboardMockup />
                        </BrowserFrame>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

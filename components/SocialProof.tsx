"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3시간→30분", label: "일일 운영 업무 처리 시간" },
  { value: "98%", label: "회원 재등록률" },
  { value: "2개", label: "직영점 실전 운영 중" },
];

const testimonials = [
  {
    quote: "운영 구조가 잡히니까 회원 케어에만 집중할 수 있게 됐습니다.",
    name: "K 대표",
    center: "Stay Fitness · 직영점",
  },
  {
    quote: "담당 트레이너가 바뀌어도 회원 관리 기준이 흔들리지 않아요.",
    name: "P 실장",
    center: "OO 피트니스",
  },
  {
    quote: "엑셀 정리에 쓰던 시간을 회원 케어에 쓸 수 있게 됐습니다.",
    name: "L 원장",
    center: "OO 필라테스",
  },
];

export function SocialProof() {
    return (
        <section id="proof" className="py-16 md:py-20 bg-secondary/20 relative overflow-hidden">
            {/* Background Image Placeholder (Darkened) */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-background/80 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-lg text-primary font-medium tracking-wide uppercase mb-4"
                    >
                        Proven Results
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6"
                    >
                        직영점에서 직접 검증한 <span className="text-primary">실전</span> 솔루션
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        LVUP은 단순한 소프트웨어가 아닙니다.<br />
                        직영점 2곳을 실제로 운영하며, 끊임없이 테스트하고 최적화한 실전형 솔루션입니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.value}
                            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="text-4xl font-bold text-foreground mb-2 tabular-nums">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* 고객 후기 */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
                            className="p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm text-left"
                        >
                            <p className="text-foreground text-base md:text-lg font-medium leading-relaxed mb-5">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div>
                                <span className="text-sm text-foreground font-medium">{t.name}</span>
                                <span className="mx-2 text-white/20">|</span>
                                <span className="text-sm text-muted-foreground">{t.center}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

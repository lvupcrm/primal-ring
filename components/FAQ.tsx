"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "무료 체험 기간은 어떻게 되나요?",
        answer: "14일간 모든 기능을 무료로 사용할 수 있으며, 카드 등록 없이 시작할 수 있습니다.",
    },
    {
        question: "기존 회원 데이터를 옮길 수 있나요?",
        answer: "네, 엑셀 파일로 기존 회원 정보를 한 번에 업로드할 수 있습니다. 온보딩 과정에서 도와드립니다.",
    },
    {
        question: "비용은 어떻게 되나요?",
        answer: "Starter 플랜은 무료이며, Growth 플랜은 월 9.9만 원부터 시작합니다. 연간 결제 시 20% 할인이 적용됩니다.",
    },
    {
        question: "여러 지점을 관리할 수 있나요?",
        answer: "Pro 플랜에서 멀티 지점 관리가 가능합니다. 지점별 대시보드와 통합 리포트를 제공합니다.",
    },
    {
        question: "데이터는 안전한가요?",
        answer: "모든 데이터는 암호화되어 저장되며, 매일 자동 백업됩니다. 개인정보보호법을 준수합니다.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-20 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl font-bold mb-10 text-center"
                >
                    자주 묻는 질문
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="border border-white/5 rounded-lg bg-secondary/20 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

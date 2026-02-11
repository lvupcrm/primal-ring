"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          지금, 센터 운영의 기준을 바꿔보세요
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-muted-foreground mt-4 mb-8 text-lg"
        >
          14일 무료 체험. 카드 등록 없이 시작하세요.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Button size="lg" className="rounded-full text-lg px-10">
            무료 체험 시작하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

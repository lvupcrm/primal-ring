"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/Card";
import { UserCheck, LayoutDashboard, ClipboardList, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: UserCheck,
    title: "회원의 '상태'를 놓치지 않는 구조",
    descriptions: [
      "재등록 시점, 관리 공백, 이탈 신호까지 회원의 흐름이 자동으로 정리됩니다.",
      "담당자가 바뀌어도 관리 기준은 흔들리지 않습니다.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "의사결정을 위한 단 하나의 화면",
    descriptions: [
      "숫자를 모으는 것이 아니라 지금 봐야 할 지표만 남깁니다.",
      "감이 아닌 판단 가능한 상태로 만듭니다.",
    ],
  },
  {
    icon: ClipboardList,
    title: "운영 기준이 정리된 센터",
    descriptions: [
      "상담, 관리, 응대, 업무 처리까지 센터의 기준이 하나의 구조로 정리됩니다.",
      "사람마다 다른 운영 방식이 아니라 센터의 기준으로 운영됩니다.",
    ],
  },
  {
    icon: RefreshCw,
    title: "대표가 없어도 돌아가는 운영",
    descriptions: [
      "반복 업무는 줄이고 중요한 판단만 남깁니다.",
      "사람에 의존하지 않는 구조는 센터를 더 단단하게 만듭니다.",
    ],
  },
];

export function ProblemStatement() {
  return (
    <section className="py-16 md:py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          운영의 문제는, 대부분{" "}
          <br className="hidden md:block" />
          <span className="text-primary">구조의 부재</span>에서 시작됩니다
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          반복되는 업무, 놓치는 타이밍, 사람에 의존하는 운영 방식은
          <br className="hidden md:block" />
          센터가 성장할수록 더 큰 비효율을 만듭니다.
          <br className="hidden md:block" />
          LVUP는 이 문제를 기능이 아닌
          <span className="text-foreground font-medium"> &apos;운영 구조&apos;</span>로
          해결합니다.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <Card className="h-full bg-secondary/30 backdrop-blur hover:bg-secondary/50 transition-colors border-white/5 text-left">
                <CardHeader>
                  <problem.icon className="w-8 h-8 text-primary mb-3" />
                  <CardTitle className="text-lg mb-4">{problem.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {problem.descriptions[0]}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.descriptions[1]}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

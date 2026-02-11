"use client";

import { motion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";
import { ShowcaseDashboard } from "./ShowcaseDashboard";
import { MessageSquare, UserCheck, FileText } from "lucide-react";

interface BubbleMessage {
  role: "ai" | "system";
  text: string;
}

interface BubbleCard {
  title: string;
  icon: React.ElementType;
  color: {
    border: string;
    bg: string;
    iconBg: string;
  };
  messages: BubbleMessage[];
  position: string;
}

const bubbles: BubbleCard[] = [
  {
    title: "재등록 고객 관리",
    icon: UserCheck,
    color: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/5",
      iconBg: "bg-blue-500/10 text-blue-400",
    },
    messages: [
      { role: "ai", text: "3월 만료 예정 고객 확인 중..." },
      { role: "system", text: "재등록 예정 고객 30명 발견" },
      { role: "ai", text: "맞춤 문자 발송 완료 ✓" },
    ],
    position: "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-64",
  },
  {
    title: "AI 맞춤 상담",
    icon: MessageSquare,
    color: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      iconBg: "bg-emerald-500/10 text-emerald-400",
    },
    messages: [
      { role: "ai", text: "홍길동님 맞춤 상담 분석 완료" },
      { role: "system", text: "상담이 완료되었습니다. 상담 내용 확인하기 →" },
    ],
    position: "lg:absolute lg:right-0 lg:top-[15%] lg:w-64",
  },
  {
    title: "홍길동님 리포트",
    icon: FileText,
    color: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/5",
      iconBg: "bg-amber-500/10 text-amber-400",
    },
    messages: [
      { role: "ai", text: "추천 운동: 1:1 PT" },
      { role: "system", text: "근골격계 질환으로 1:1 PT가 적합합니다" },
    ],
    position: "lg:absolute lg:right-0 lg:bottom-[15%] lg:w-64",
  },
];

function BubbleCardComponent({
  bubble,
  index,
}: {
  bubble: BubbleCard;
  index: number;
}) {
  const Icon = bubble.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: "easeOut" }}
      className={`rounded-2xl border backdrop-blur p-4 ${bubble.color.border} ${bubble.color.bg} ${bubble.position}`}
    >
      {/* 카드 헤더 */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${bubble.color.iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-sm font-semibold text-foreground">
          {bubble.title}
        </span>
      </div>

      {/* 메시지 리스트 */}
      <div className="flex flex-col gap-1.5">
        {bubble.messages.map((msg, i) => (
          <div
            key={i}
            className={`text-xs px-3 py-1.5 rounded-lg ${
              msg.role === "ai"
                ? "bg-primary/10 text-primary"
                : "bg-white/5 text-muted-foreground"
            }`}
          >
            {msg.role === "ai" && (
              <span className="font-medium mr-1">AI:</span>
            )}
            {msg.text}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SolutionShowcase() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* 배경 블롭 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* 섹션 제목 */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-primary uppercase tracking-widest text-sm font-medium mb-3"
          >
            Solution Overview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            피트니스 센터 자동화 운영{" "}
            <span className="text-primary">SaaS</span>
          </motion.h2>
        </div>

        {/* 메인 레이아웃 */}
        <div className="relative lg:py-12">
          {/* 노트북 프레임 (중앙) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl lg:mx-auto relative z-10"
          >
            <BrowserFrame className="shadow-[0_0_60px_-12px_rgba(59,130,246,0.3)]">
              <ShowcaseDashboard />
            </BrowserFrame>
          </motion.div>

          {/* 말풍선 카드 - 모바일: 세로 나열 / 데스크톱: absolute 배치 */}
          <div className="mt-6 space-y-4 lg:mt-0 lg:space-y-0">
            {bubbles.map((bubble, index) => (
              <BubbleCardComponent
                key={bubble.title}
                bubble={bubble}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

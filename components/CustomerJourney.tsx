"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/Card";
import { MessageCircle, UserPlus, CalendarCheck, HeartHandshake, Repeat } from "lucide-react";

const journeySteps = [
  {
    number: "①",
    icon: MessageCircle,
    label: "문의 · 상담",
    head: "첫 접점부터 흐름을 만듭니다",
    descriptions: [
      "문의 유입, 응답 여부, 상담 상태가 하나의 흐름으로 관리됩니다.",
      "놓치는 문의 없이 시작부터 기준이 만들어집니다.",
    ],
  },
  {
    number: "②",
    icon: UserPlus,
    label: "등록",
    head: "결정의 이유가 기록됩니다",
    descriptions: [
      "왜 등록했는지, 무엇에 반응했는지가 데이터로 남습니다.",
      "이후 관리와 재등록의 기준이 됩니다.",
    ],
  },
  {
    number: "③",
    icon: CalendarCheck,
    label: "수업 · 관리",
    head: "관리의 공백이 보이기 시작합니다",
    descriptions: [
      "출석, 수업 간격, 반응 변화가 자동으로 정리됩니다.",
      "문제는 발생 후가 아니라 발생 전에 감지됩니다.",
    ],
  },
  {
    number: "④",
    icon: HeartHandshake,
    label: "유지 · 케어",
    head: "타이밍을 놓치지 않습니다",
    descriptions: [
      "회원 상태에 따라 필요한 관리와 커뮤니케이션이 이어집니다.",
      "담당자가 바뀌어도 흐름은 유지됩니다.",
    ],
  },
  {
    number: "⑤",
    icon: Repeat,
    label: "재등록 · 확장",
    head: "재등록은 설계의 결과입니다",
    descriptions: [
      "재등록은 운이나 말솜씨가 아니라 앞선 여정의 누적 결과입니다.",
      "LVUP는 이 과정을 반복 가능한 구조로 만듭니다.",
    ],
  },
];

export function CustomerJourney() {
  return (
    <section className="py-16 md:py-20 bg-secondary/5 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* 섹션 헤드 */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            고객 여정이 정리되면,{" "}
            <br className="hidden md:block" />
            운영은 자연스럽게{" "}
            <span className="text-primary">따라옵니다</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            대부분의 센터는
            <br className="hidden md:block" />
            &apos;지금 무슨 일이 벌어지고 있는지&apos;는 보지만
            <br className="hidden md:block" />
            &apos;다음에 무엇을 해야 하는지&apos;는 정리되어 있지 않습니다.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4"
          >
            LVUP는
            <br className="hidden md:block" />
            고객의 상태 변화에 따라
            <br className="hidden md:block" />
            센터의 다음 액션이 자동으로 이어지도록 설계합니다.
          </motion.p>
        </div>

        {/* 여정 구조 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            LVUP 고객 여정 구조
          </span>
        </motion.div>

        {/* 5단계 여정 타임라인 */}
        <div className="relative">
          {/* 타임라인 연결선 */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  {/* 타임라인 노드 */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* 카드 - 데스크톱에서 좌우 교차, 모바일에서 오른쪽 */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <Card className="bg-secondary/30 backdrop-blur hover:bg-secondary/50 transition-colors border-white/5">
                      <CardHeader>
                        <span className="text-xs font-medium text-primary/70 tracking-wider mb-2">
                          {step.label}
                        </span>
                        <CardTitle className="text-lg mb-4">
                          {step.head}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {step.descriptions[0]}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.descriptions[1]}
                        </p>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 섹션 마무리 문장 */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-14"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            LVUP는 일을 자동화하는 서비스가 아니라
            <br />
            센터의{" "}
            <span className="text-foreground font-medium">
              &apos;다음 행동&apos;을 설계하는 운영 OS
            </span>
            입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

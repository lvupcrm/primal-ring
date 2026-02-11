"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/Card";
import { TrendingUp, Clock, Compass } from "lucide-react";

const changes = [
  {
    icon: TrendingUp,
    label: "재등록률",
    head: "재등록은 '설득'이 아니라 '흐름'이 됩니다",
    descriptions: [
      "고객의 상태에 맞는 관리와 타이밍이 쌓이면서 재등록은 자연스럽게 이어집니다.",
      "우연이 아닌, 설계된 결과로 바뀝니다.",
    ],
  },
  {
    icon: Clock,
    label: "운영 시간",
    head: "대표의 개입은 줄고, 통제력은 높아집니다",
    descriptions: [
      "반복되는 확인, 전달, 정리 업무가 줄어들며 운영에 쓰이는 시간이 눈에 띄게 감소합니다.",
      "바쁜데 정리가 안 되던 상태에서 관리되고 있다는 감각으로 바뀝니다.",
    ],
  },
  {
    icon: Compass,
    label: "운영 안정성",
    head: "사람이 바뀌어도, 결과는 유지됩니다",
    descriptions: [
      "직원의 숙련도나 개인 역량에 의존하던 운영에서 센터의 기준으로 움직이는 구조로 전환됩니다.",
      "운영의 흔들림이 줄고 확장이 가능한 상태가 됩니다.",
    ],
  },
];

export function Transformation() {
  return (
    <section className="py-16 md:py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* 섹션 헤드 */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            구조가 바뀌면,{" "}
            <br className="hidden md:block" />
            <span className="text-primary">숫자가 달라집니다</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            LVUP를 도입한 센터들은
            <br className="hidden md:block" />
            더 열심히 일하지 않았습니다.
            <br className="hidden md:block" />
            다만, 운영의 기준을 바꿨을 뿐입니다.
          </motion.p>
        </div>

        {/* 3개 변화 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {changes.map((change, index) => (
            <motion.div
              key={change.label}
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <Card className="h-full bg-secondary/30 backdrop-blur hover:bg-secondary/50 transition-colors border-white/5">
                <CardHeader>
                  <change.icon className="w-8 h-8 text-primary mb-3" />
                  <span className="text-xs font-medium text-primary/70 tracking-wider mb-2">
                    {change.label}
                  </span>
                  <CardTitle className="text-lg mb-4">
                    {change.head}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {change.descriptions[0]}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {change.descriptions[1]}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 마무리 문장 */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-14"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            LVUP는 성과를 약속하지 않습니다.
            <br />
            <span className="text-foreground font-medium">
              성과가 나올 수밖에 없는 구조
            </span>
            를 만듭니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";
import {
  CRMDashboardMockup,
  AutomationRuleMockup,
  ConsultationPipelineMockup,
  RevenueAnalysisMockup,
  ChurnPredictionMockup,
  SalesCopilotMockup,
} from "./FeatureMockups";

const features = [
  {
    id: 0,
    title: "CRM 대시보드",
    description:
      "회원 상태, 매출 현황, 상담 진행률을 한 화면에서 확인하세요. 복잡한 엑셀 없이 센터의 모든 데이터를 한눈에 파악할 수 있습니다.",
    color: "from-blue-500/20 to-cyan-500/20",
    Visual: CRMDashboardMockup,
  },
  {
    id: 1,
    title: "자동화 메시지 엔진",
    description:
      "미출석 감지, 만료 알림, 생일 축하 등 조건별 자동 메시지 발송으로 반복 업무를 줄이고 회원 케어에 집중하세요.",
    color: "from-purple-500/20 to-pink-500/20",
    Visual: AutomationRuleMockup,
  },
  {
    id: 2,
    title: "상담 · 문의 관리",
    description:
      "문의 유입부터 상담 완료까지 파이프라인으로 관리하세요. 놓치는 문의 없이 전환율을 높일 수 있습니다.",
    color: "from-emerald-500/20 to-teal-500/20",
    Visual: ConsultationPipelineMockup,
  },
  {
    id: 3,
    title: "매출 · 성과 분석",
    description:
      "실시간 매출 추이, 종목별 비율, 전환율 분석으로 감이 아닌 데이터 기반의 의사결정을 내리세요.",
    color: "from-amber-500/20 to-orange-500/20",
    Visual: RevenueAnalysisMockup,
  },
  {
    id: 4,
    title: "AI 이탈 예측",
    description:
      "AI가 회원 행동 패턴을 분석하여 이탈 위험 회원을 사전에 감지하고, 최적의 리텐션 액션을 추천합니다.",
    color: "from-rose-500/20 to-red-500/20",
    Visual: ChurnPredictionMockup,
  },
  {
    id: 5,
    title: "AI 세일즈 코파일럿",
    description:
      "AI가 회원별 최적의 상품을 추천하고, 업셀링·재등록 타이밍을 자동으로 알려줍니다.",
    color: "from-indigo-500/20 to-violet-500/20",
    Visual: SalesCopilotMockup,
  },
];

export function FeatureScroll() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 기능</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            센터 운영에 꼭 필요한 기능만 담았습니다
          </p>
        </motion.div>

        {/* 피처 카드 목록 */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              style={index % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              {/* 텍스트 */}
              <div style={{ direction: "ltr" }} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* 비주얼 */}
              <div
                style={{ direction: "ltr" }}
                className={cn(
                  "relative rounded-2xl border border-white/10 overflow-hidden p-4 bg-gradient-to-br",
                  feature.color
                )}
              >
                <feature.Visual />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

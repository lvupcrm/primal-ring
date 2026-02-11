"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  highlight?: string;
  badge?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  dark?: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    description: "회원관리와 자동화 메시지에 집중",
    price: "39,000",
    priceUnit: "원/월",
    highlight: "월 15시간 절감 · ROI 77배",
    features: [
      "회원 관리 대시보드",
      "예약/출석 자동 알림",
      "재등록 안내 자동화",
      "카카오 알림톡 연동",
      "이메일 지원",
    ],
    cta: "시작하기",
  },
  {
    name: "Pro",
    description: "AI 이탈 예측과 세일즈 코파일럿으로 매출 성장",
    price: "99,000",
    priceUnit: "원/월",
    badge: "Best Choice",
    highlight: "전환율 20%p 향상",
    features: [
      "Basic 전체 기능 포함",
      "AI 고객 이탈 예측",
      "세일즈 코파일럿",
      "실시간 매출 분석",
      "우선 지원",
      "커스텀 대시보드",
    ],
    cta: "시작하기",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "프랜차이즈 통합 관리와 전담 지원",
    price: "커스텀",
    priceUnit: "",
    badge: "다지점 통합 관리",
    features: [
      "Pro 전체 기능 포함",
      "다지점 통합 대시보드",
      "API 연동 지원",
      "전담 매니저 배정",
      "화이트라벨 솔루션",
      "우선 개발 요청",
    ],
    cta: "문의하기",
    dark: true,
  },
];

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const isCustom = plan.price === "커스텀";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl border p-6 md:p-8 flex flex-col h-full transition-colors",
        plan.featured
          ? "border-primary/40 bg-primary/5 shadow-[0_0_40px_-12px_rgba(59,130,246,0.3)]"
          : plan.dark
            ? "border-white/10 bg-white/[0.03]"
            : "border-white/10 bg-card/30"
      )}
    >
      {/* 배지 */}
      {plan.badge && (
        <div className={cn(
          "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
          plan.featured
            ? "bg-primary text-primary-foreground"
            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        )}>
          {plan.featured && "✦ "}{plan.badge}
        </div>
      )}

      {/* 플랜명 + 설명 */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>

      {/* 가격 */}
      <div className="mb-2">
        {isCustom ? (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{plan.price}</span>
            <span className="text-sm text-muted-foreground">{plan.priceUnit}</span>
          </div>
        )}
      </div>

      {/* 하이라이트 */}
      {plan.highlight && (
        <div className={cn(
          "text-xs font-medium mb-6",
          plan.featured ? "text-primary" : "text-emerald-400"
        )}>
          {plan.highlight}
        </div>
      )}
      {!plan.highlight && <div className="mb-6" />}

      {/* 구분선 */}
      <div className="border-t border-white/5 mb-6" />

      {/* 기능 목록 */}
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className={cn(
              "w-4 h-4 mt-0.5 shrink-0",
              plan.featured ? "text-primary" : "text-emerald-400"
            )} />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA 버튼 */}
      <button
        className={cn(
          "w-full py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer",
          plan.featured
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : plan.dark
              ? "bg-emerald-500 text-white hover:bg-emerald-500/90"
              : "border border-white/10 bg-white/5 text-foreground hover:bg-white/10"
        )}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            센터 규모에 맞는 요금제
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            14일 무료 체험 후 결정하세요. 언제든 플랜 변경 가능합니다.
          </p>
        </motion.div>

        {/* 플랜 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

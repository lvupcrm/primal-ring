"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";

/* ── CRM 대시보드 목업 ── */
export function CRMDashboardMockup() {
  const stats = [
    { label: "활성 회원", value: "284명", icon: "👥", color: "text-blue-400" },
    { label: "이번달 매출", value: "4,820만", icon: "💰", color: "text-emerald-400" },
    { label: "상담 진행률", value: "78%", icon: "📊", color: "text-violet-400" },
  ];

  const rows = [
    { name: "김민수", plan: "PT 3개월", status: "활성", statusColor: "bg-emerald-500", date: "2025-08-15" },
    { name: "이수진", plan: "헬스 1개월", status: "만료임박", statusColor: "bg-yellow-500", date: "2025-02-20" },
    { name: "박지훈", plan: "필라테스 6개월", status: "만료", statusColor: "bg-red-500", date: "2025-01-05" },
    { name: "최하은", plan: "PT 1개월", status: "활성", statusColor: "bg-emerald-500", date: "2025-09-30" },
  ];

  const columns = ["이름", "회원권", "상태", "만료일"];

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4 space-y-3">
      {/* 상단 통계 카드 */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-white/5 bg-white/5 p-2.5"
          >
            <div className="flex items-center gap-1 text-[9px] text-muted-foreground mb-1">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
            <div className={cn("text-sm font-bold", stat.color)}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* 회원 테이블 */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">📋</span>
          <span className="text-xs font-semibold text-foreground">회원 관리</span>
        </div>
        <div className="grid grid-cols-4 gap-2 text-[10px] font-medium text-muted-foreground border-b border-white/5 pb-2">
          {columns.map((col) => (
            <div key={col}>{col}</div>
          ))}
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="grid grid-cols-4 gap-2 text-[10px] text-foreground/80 py-1.5 border-b border-white/[0.03] last:border-0"
          >
            <div className="font-medium">{row.name}</div>
            <div className="text-muted-foreground">{row.plan}</div>
            <div className="flex items-center gap-1">
              <div className={cn("w-1.5 h-1.5 rounded-full", row.statusColor)} />
              <span>{row.status}</span>
            </div>
            <div className="text-muted-foreground">{row.date}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── 자동화 규칙 설정 목업 ── */
export function AutomationRuleMockup() {
  const steps = [
    { icon: "🔔", label: "미출석 감지", sub: "트리거", color: "border-yellow-500/30 bg-yellow-500/10" },
    { icon: "🔀", label: "3주 이상 미출석", sub: "조건", color: "border-blue-500/30 bg-blue-500/10" },
    { icon: "💬", label: "복귀 메시지 발송", sub: "액션", color: "border-emerald-500/30 bg-emerald-500/10" },
  ];

  const extraRules = [
    { icon: "📅", label: "만료 7일 전 알림", active: false },
    { icon: "🎂", label: "생일 축하 메시지", active: false },
  ];

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">⚡</span>
        <span className="text-xs font-semibold text-foreground">자동화 규칙 설정</span>
        <span className="ml-auto px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-medium">활성</span>
      </div>

      {/* 3단계 플로우 */}
      <div className="flex flex-col items-center gap-1 mb-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg border w-full max-w-[240px]",
                step.color
              )}
            >
              <span className="text-base">{step.icon}</span>
              <div>
                <div className="text-[11px] font-medium text-foreground">{step.label}</div>
                <div className="text-[9px] text-muted-foreground">{step.sub}</div>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.15 }}
                className="w-px h-5 bg-white/20 origin-top"
              />
            )}
          </div>
        ))}
      </div>

      {/* 추가 규칙 카드 (비활성) */}
      <div className="border-t border-white/5 pt-3 space-y-2">
        <div className="text-[10px] text-muted-foreground">추가 규칙</div>
        {extraRules.map((rule) => (
          <div
            key={rule.label}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02] opacity-50"
          >
            <span className="text-xs">{rule.icon}</span>
            <span className="text-[10px] text-muted-foreground">{rule.label}</span>
            <span className="ml-auto text-[8px] text-muted-foreground/60">비활성</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 상담 파이프라인 목업 ── */
export function ConsultationPipelineMockup() {
  const stats = [
    { label: "이번달 상담", value: "12", color: "text-foreground" },
    { label: "오늘 예정", value: "3", color: "text-red-400" },
    { label: "상담 완료", value: "8", color: "text-emerald-400" },
    { label: "노쇼", value: "1", color: "text-orange-400" },
  ];

  const rows = [
    { name: "김민서", phone: "010-9382-****", channel: "카카오톡", type: "PT", status: "상담완료", statusStyle: "bg-emerald-500/20 text-emerald-400" },
    { name: "이하은", phone: "010-4517-****", channel: "전화", type: "상담", status: "상담완료", statusStyle: "bg-emerald-500/20 text-emerald-400" },
    { name: "박지호", phone: "010-7261-****", channel: "인스타그램", type: "PT", status: "예정", statusStyle: "bg-yellow-500/20 text-yellow-400" },
    { name: "정수아", phone: "010-5123-****", channel: "네이버", type: "필라테스", status: "신규", statusStyle: "bg-blue-500/20 text-blue-400" },
  ];

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4 space-y-3">
      {/* 요약 통계 */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-lg border border-white/5 bg-white/5 px-2 py-1.5"
          >
            <div className="text-[9px] text-muted-foreground truncate">{stat.label}</div>
            <div className={cn("text-sm font-bold leading-tight", stat.color)}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* 상담 목록 테이블 */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">💬</span>
          <span className="text-xs font-semibold text-foreground">상담 목록</span>
        </div>
        <div className="grid grid-cols-[1fr_1.2fr_0.8fr_0.6fr_0.7fr] gap-1 text-[9px] font-medium text-muted-foreground border-b border-white/5 pb-1.5">
          <span>이름</span>
          <span>연락처</span>
          <span>문의경로</span>
          <span>종류</span>
          <span className="text-right">상태</span>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="grid grid-cols-[1fr_1.2fr_0.8fr_0.6fr_0.7fr] gap-1 items-center py-1.5 border-b border-white/[0.03] last:border-0 text-[10px]"
          >
            <span className="font-medium text-foreground truncate">{row.name}</span>
            <span className="text-muted-foreground truncate">{row.phone}</span>
            <span className="text-blue-400 truncate">{row.channel}</span>
            <span className="text-muted-foreground">{row.type}</span>
            <span className="text-right">
              <span className={cn("px-1 py-px rounded text-[8px] font-medium", row.statusStyle)}>
                {row.status}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── AI 이탈 예측 목업 ── */
export function ChurnPredictionMockup() {
  const summary = [
    { label: "이탈 위험 회원", value: "23명", icon: "⚠️", color: "text-rose-400" },
    { label: "평균 이탈 확률", value: "34%", icon: "📉", color: "text-orange-400" },
    { label: "복귀 성공률", value: "68%", icon: "🔄", color: "text-emerald-400" },
  ];

  const members = [
    { name: "김민수", plan: "PT 3개월", risk: 87, level: "고위험", levelColor: "bg-rose-500/20 text-rose-400", action: "💬" },
    { name: "이수진", plan: "헬스 1개월", risk: 72, level: "고위험", levelColor: "bg-rose-500/20 text-rose-400", action: "🎫" },
    { name: "박지훈", plan: "필라테스 6개월", risk: 45, level: "중위험", levelColor: "bg-yellow-500/20 text-yellow-400", action: "💬" },
    { name: "최하은", plan: "PT 1개월", risk: 18, level: "저위험", levelColor: "bg-emerald-500/20 text-emerald-400", action: "📊" },
  ];

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4 space-y-3">
      {/* AI 분석 요약 */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm">🤖</span>
        <span className="text-xs font-semibold text-foreground">AI 이탈 분석</span>
        <span className="ml-auto px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[9px] font-medium">실시간</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {summary.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-white/5 bg-white/5 p-2.5"
          >
            <div className="flex items-center gap-1 text-[9px] text-muted-foreground mb-1">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
            <div className={cn("text-sm font-bold", stat.color)}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* 회원별 위험도 리스트 */}
      <div>
        <div className="grid grid-cols-[1fr_1.2fr_0.6fr_0.6fr_0.4fr] gap-1 text-[9px] font-medium text-muted-foreground border-b border-white/5 pb-1.5">
          <span>이름</span>
          <span>회원권</span>
          <span>위험도</span>
          <span>상태</span>
          <span className="text-center">액션</span>
        </div>
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="grid grid-cols-[1fr_1.2fr_0.6fr_0.6fr_0.4fr] gap-1 items-center py-1.5 border-b border-white/[0.03] last:border-0 text-[10px]"
          >
            <span className="font-medium text-foreground truncate">{m.name}</span>
            <span className="text-muted-foreground truncate">{m.plan}</span>
            <div className="flex items-center gap-1">
              <div className="w-8 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={cn("h-full rounded-full", m.risk >= 70 ? "bg-rose-500" : m.risk >= 40 ? "bg-yellow-500" : "bg-emerald-500")}
                  style={{ width: `${m.risk}%` }}
                />
              </div>
              <span className="text-[9px] text-muted-foreground">{m.risk}%</span>
            </div>
            <span className={cn("px-1 py-px rounded text-[8px] font-medium text-center", m.levelColor)}>
              {m.level}
            </span>
            <span className="text-center text-xs cursor-pointer">{m.action}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── AI 세일즈 코파일럿 목업 ── */
export function SalesCopilotMockup() {
  const recommendations = [
    {
      icon: "💪",
      title: "PT 업셀링 제안",
      desc: "김민수 회원에게 PT 패키지 업그레이드를 제안하세요",
      conversion: 78,
      tag: "업셀링",
      tagColor: "bg-violet-500/20 text-violet-400",
    },
    {
      icon: "🎫",
      title: "재등록 할인 쿠폰 발송",
      desc: "만료 임박 회원 5명에게 10% 할인 쿠폰 추천",
      conversion: 65,
      tag: "리텐션",
      tagColor: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: "🏋️",
      title: "그룹수업 크로스셀링",
      desc: "헬스 회원 중 필라테스 관심군 3명 감지",
      conversion: 52,
      tag: "크로스셀",
      tagColor: "bg-emerald-500/20 text-emerald-400",
    },
  ];

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4 space-y-3">
      {/* 헤더 */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <span className="text-xs">🤖</span>
        </div>
        <span className="text-xs font-semibold text-foreground">AI 세일즈 어시스턴트</span>
        <span className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] text-emerald-400">분석 중</span>
        </span>
      </div>

      {/* AI 추천 카드 */}
      <div className="space-y-2">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-lg border border-white/5 bg-white/[0.03] p-3 space-y-2"
          >
            <div className="flex items-start gap-2">
              <span className="text-base shrink-0">{rec.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-medium text-foreground">{rec.title}</span>
                  <span className={cn("px-1 py-px rounded text-[8px] font-medium", rec.tagColor)}>
                    {rec.tag}
                  </span>
                </div>
                <p className="text-[9px] text-muted-foreground leading-relaxed">{rec.desc}</p>
              </div>
            </div>
            {/* 전환율 예측 */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${rec.conversion}%` }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                  className="h-full rounded-full bg-indigo-500"
                />
              </div>
              <span className="text-[9px] text-indigo-400 font-medium shrink-0">
                전환율 {rec.conversion}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 하단 요약 */}
      <div className="flex items-center justify-between pt-1 border-t border-white/5">
        <span className="text-[9px] text-muted-foreground">오늘의 추천 3건</span>
        <span className="text-[9px] text-indigo-400 font-medium">예상 추가 매출 +320만원</span>
      </div>
    </div>
  );
}

/* ── 매출 분석 목업 ── */
const DONUT_RADIUS = 30;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

const donutSegments = [
  { label: "PT", pct: 57.6, color: "#a855f7" },
  { label: "필라테스", pct: 36, color: "#ec4899" },
  { label: "헬스", pct: 6.4, color: "#34d399" },
];

export function RevenueAnalysisMockup() {
  const bars = [
    { month: "7월", value: 55, color: "bg-slate-600" },
    { month: "8월", value: 62, color: "bg-slate-500" },
    { month: "9월", value: 48, color: "bg-amber-600" },
    { month: "10월", value: 71, color: "bg-amber-500" },
    { month: "11월", value: 80, color: "bg-orange-500" },
    { month: "12월", value: 75, color: "bg-orange-400" },
    { month: "1월", value: 92, color: "bg-amber-400" },
  ];

  let offset = 0;

  return (
    <div className="w-full rounded-xl border border-white/5 bg-card/50 p-4 space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm">📊</span>
        <span className="text-xs font-semibold text-foreground">매출 분석</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* 좌: 막대 차트 + 매출 지표 */}
        <div className="space-y-2">
          <div className="flex gap-4">
            <div>
              <div className="text-[9px] text-muted-foreground">총 매출</div>
              <div className="text-sm font-bold text-foreground">4,820만원</div>
            </div>
            <div>
              <div className="text-[9px] text-muted-foreground">전월 대비</div>
              <div className="text-sm font-bold text-emerald-500">+22.7%</div>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {bars.map((bar, i) => (
              <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 h-full">
                <div className="w-full flex-1 relative">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${bar.value}%` }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                    className={cn("absolute bottom-0 left-0 right-0 rounded-t", bar.color)}
                  />
                </div>
                <span className="text-[7px] text-muted-foreground shrink-0">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우: 도넛 차트 + 범례 */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-[9px] text-muted-foreground font-medium">종목별 매출 비율</div>
          <div className="relative">
            <svg width="72" height="72" viewBox="0 0 72 72">
              {donutSegments.map((seg) => {
                const dashLen = (seg.pct / 100) * DONUT_CIRCUMFERENCE;
                const dashOffset = -offset;
                offset += dashLen;
                return (
                  <circle
                    key={seg.label}
                    cx="36"
                    cy="36"
                    r={DONUT_RADIUS}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="8"
                    strokeDasharray={`${dashLen} ${DONUT_CIRCUMFERENCE - dashLen}`}
                    strokeDashoffset={dashOffset}
                    transform="rotate(-90 36 36)"
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[9px] font-bold text-foreground">4,820만</span>
              <span className="text-[6px] text-muted-foreground">총 매출</span>
            </div>
          </div>
          <div className="flex gap-2">
            {donutSegments.map((seg) => (
              <div key={seg.label} className="flex items-center gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: seg.color }} />
                <span className="text-[7px] text-muted-foreground">{seg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

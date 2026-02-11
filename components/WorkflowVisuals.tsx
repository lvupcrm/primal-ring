"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";

// Image 1: Workflow List
export function WorkflowListMockup() {
    return (
        <div className="w-full h-full flex flex-col gap-2 p-4 select-none">
            {/* Header-like placeholder */}
            <div className="h-4 w-1/3 bg-white/10 rounded mb-2" />

            <div className="space-y-2">
                <WorkflowCard
                    title="상담 후 팔로업"
                    desc="상담 완료 후 자동으로 팔로업"
                    active
                    nodes={4}
                />
                <WorkflowCard
                    title="회원권 만료 알림"
                    desc="만료 7일 전 자동 알림"
                    nodes={3}
                />
                <WorkflowCard
                    title="이탈 방지 캠페인"
                    desc="3주 이상 미출석 회원 관리"
                    nodes={5}
                    highlight
                />
                <WorkflowCard
                    title="신규 회원 환영"
                    desc="등록 완료 시 AI 환영 메시지"
                    nodes={3}
                />
            </div>
        </div>
    );
}

function WorkflowCard({ title, desc, active, highlighting, nodes, highlight }: any) {
    return (
        <div className={cn(
            "bg-card/50 border border-white/5 rounded-lg p-3 flex flex-col gap-2 transition-colors",
            highlight ? "bg-primary/10 border-primary/20" : ""
        )}>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-foreground">{title}</span>
                    <span className="text-[9px] text-muted-foreground">{desc}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-1 mt-1">
                <div className="text-[9px] text-emerald-500">● 활성</div>
                <div className="text-[9px] text-muted-foreground border-l border-white/10 pl-1 ml-1">v{nodes}</div>
                <div className="flex gap-0.5 ml-auto">
                    {[...Array(nodes)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Image 2: Automation Flow Diagram
export function AutomationFlowMockup() {
    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            <div className="flex flex-col items-center gap-4 scale-90 origin-top">

                {/* Horizontal Flow */}
                <div className="flex items-center gap-2">
                    {/* Trigger */}
                    <Node
                        color="bg-yellow-500/10 border-yellow-500/50 text-yellow-500"
                        icon="⚡️"
                        title="3주 미출석 감지"
                        sub="트리거"
                    />
                    <Line />
                    {/* AI Analysis */}
                    <Node
                        color="bg-emerald-500/10 border-emerald-500/50 text-emerald-500"
                        icon="✨"
                        title="이탈 위험 분석"
                        sub="AI 에이전트"
                    />
                    <Line />
                    {/* Condition */}
                    <Node
                        color="bg-slate-500/10 border-slate-500/50 text-slate-500"
                        icon="⑂"
                        title="위험 등급 확인"
                        sub="조건 분기"
                    />
                </div>

                {/* Branches */}
                <div className="flex w-full justify-between px-8 relative">
                    {/* Connecting Lines (Manual SVG usually better, but using borders for speed) */}
                    <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-full h-8 pointer-events-none" viewBox="0 0 200 40">
                        <path d="M 100 0 L 100 10 L 40 10 L 40 30" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
                        <path d="M 100 0 L 100 10 L 160 10 L 160 30" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>

                    <Node
                        color="bg-red-500/10 border-red-500/50 text-red-500"
                        icon="🔔"
                        title="복귀 메시지 발송"
                        sub="액션 (저위험)"
                        className="mt-4"
                    />

                    <Node
                        color="bg-red-500/10 border-red-500/50 text-red-500"
                        icon="🚨"
                        title="관리자 알림"
                        sub="액션 (고위험)"
                        className="mt-4"
                    />
                </div>

            </div>
        </div>
    );
}

function Node({ color, icon, title, sub, className }: any) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className={cn(
                "flex flex-col items-center justify-center p-3 rounded-xl border bg-background backdrop-blur-sm shadow-lg min-w-[100px] text-center z-10",
                color,
                className
            )}
        >
            <div className="text-xl mb-1">{icon}</div>
            <div className="text-[10px] font-bold text-foreground/90 whitespace-nowrap">{title}</div>
            <div className="text-[8px] opacity-80">{sub}</div>
        </motion.div>
    );
}

function Line() {
    return <div className="w-4 h-[1px] bg-border shrink-0" />;
}

// 매출 대시보드 목업
const salesStats = [
    { label: "총 매출", value: "1,250만", icon: "💰" },
    { label: "신규 등록", value: "15건", icon: "👤" },
    { label: "PT 매출", value: "720만", icon: "💪" },
    { label: "필라테스", value: "450만", icon: "🧘" },
];

const DONUT_RADIUS = 32;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;
const donutSegments = [
    { label: "PT", pct: 57.6, color: "#a855f7" },
    { label: "필라테스", pct: 36, color: "#ec4899" },
    { label: "헬스", pct: 6.4, color: "#34d399" },
];

export function DashboardSalesMockup() {
    let offset = 0;

    return (
        <div className="w-full h-full flex gap-3 p-3 select-none text-[8px]">
            {/* 왼쪽: 통계 카드 */}
            <div className="flex-1 flex flex-col gap-1.5">
                <div className="text-[7px] text-muted-foreground font-medium">이번 달 매출 현황</div>
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                    {salesStats.map((stat) => (
                        <div key={stat.label} className="bg-white/5 rounded px-2 py-1.5 border border-white/5 flex flex-col justify-center">
                            <div className="text-[6px] text-muted-foreground flex items-center gap-0.5">
                                <span>{stat.icon}</span>
                                <span>{stat.label}</span>
                            </div>
                            <div className="text-xs font-bold text-foreground leading-tight mt-0.5">{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 오른쪽: 도넛 차트 */}
            <div className="flex flex-col items-center justify-center gap-1.5 min-w-[100px]">
                <div className="text-[7px] text-muted-foreground font-medium">종목별 매출 비율</div>
                <div className="relative">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        {donutSegments.map((seg) => {
                            const dashLen = (seg.pct / 100) * DONUT_CIRCUMFERENCE;
                            const dashOffset = -offset;
                            offset += dashLen;
                            return (
                                <circle
                                    key={seg.label}
                                    cx="40"
                                    cy="40"
                                    r={DONUT_RADIUS}
                                    fill="none"
                                    stroke={seg.color}
                                    strokeWidth="10"
                                    strokeDasharray={`${dashLen} ${DONUT_CIRCUMFERENCE - dashLen}`}
                                    strokeDashoffset={dashOffset}
                                    transform="rotate(-90 40 40)"
                                    className="transition-all duration-500"
                                />
                            );
                        })}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-bold text-foreground">1,250만</span>
                        <span className="text-[6px] text-muted-foreground">총 매출</span>
                    </div>
                </div>
                {/* 범례 */}
                <div className="flex gap-2">
                    {donutSegments.map((seg) => (
                        <div key={seg.label} className="flex items-center gap-0.5">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: seg.color }} />
                            <span className="text-[6px] text-muted-foreground">{seg.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// 상담 관리 목업
const consultationData = [
    { name: "김민서", phone: "010-9382-1047", date: "07-09 11:03", channel: "카카오톡채널", type: "PT", status: "상담완료" },
    { name: "이하은", phone: "010-4517-2893", date: "07-09 00:05", channel: "전화", type: "상담", status: "상담완료" },
    { name: "박지호", phone: "010-7261-3548", date: "07-10 14:30", channel: "인스타그램", type: "PT", status: "예정" },
];

export function ConsultationMockup() {
    return (
        <div className="w-full h-full flex flex-col gap-1.5 p-3 select-none text-[8px]">
            {/* 요약 통계 */}
            <div className="grid grid-cols-4 gap-1.5">
                {[
                    { label: "이번달 상담", value: "12", color: "text-foreground" },
                    { label: "오늘 예정", value: "3", color: "text-red-400" },
                    { label: "상담 완료", value: "8", color: "text-emerald-400" },
                    { label: "노쇼", value: "1", color: "text-orange-400" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded px-1.5 py-1 border border-white/5">
                        <div className="text-muted-foreground text-[6px] truncate">{stat.label}</div>
                        <div className={cn("text-sm font-bold leading-tight", stat.color)}>{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* 상담 목록 테이블 */}
            <div className="flex-1 flex flex-col gap-0.5 mt-0.5">
                <div className="text-[7px] text-muted-foreground font-medium mb-0.5">상담 목록</div>
                {/* 헤더 */}
                <div className="grid grid-cols-[1fr_1.2fr_1fr_0.6fr_0.8fr] gap-1 text-[6px] text-muted-foreground border-b border-white/5 pb-0.5">
                    <span>이름</span>
                    <span>연락처</span>
                    <span>문의경로</span>
                    <span>종류</span>
                    <span className="text-right">상태</span>
                </div>
                {/* 행 */}
                {consultationData.map((row) => (
                    <div key={row.name} className="grid grid-cols-[1fr_1.2fr_1fr_0.6fr_0.8fr] gap-1 items-center py-0.5 border-b border-white/[0.03]">
                        <span className="text-foreground font-medium truncate">{row.name}</span>
                        <span className="text-muted-foreground truncate">{row.phone}</span>
                        <span className="text-blue-400 truncate">{row.channel}</span>
                        <span className="text-muted-foreground">{row.type}</span>
                        <span className="text-right">
                            <span className={cn(
                                "px-1 py-px rounded text-[6px] font-medium",
                                row.status === "상담완료"
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                            )}>
                                {row.status}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

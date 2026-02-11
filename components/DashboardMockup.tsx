"use client";

import { motion } from "framer-motion";
import { cn } from "./ui/Button";
import { BarChart3, Users, GitBranch, MessageSquare, Settings, Bell, LayoutDashboard } from "lucide-react";
import Image from "next/image";

export function DashboardMockup() {
    return (
        <div className="w-full h-full flex bg-background text-[10px] md:text-xs select-none">
            {/* Sidebar */}
            <div className="w-14 md:w-40 border-r border-border flex flex-col items-center md:items-stretch py-4 gap-1 bg-card/30 shrink-0">
                <div className="px-4 mb-6 flex items-center justify-center md:justify-start">
                    <div className="relative w-16 h-6 hidden md:block">
                        <Image
                            src="/logo.png"
                            alt="LVUP"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center md:hidden">
                        <span className="text-primary font-bold text-xs">L</span>
                    </div>
                </div>

                <SidebarItem icon={LayoutDashboard} label="대시보드" active />
                <SidebarItem icon={Users} label="잠재고객(Lead)" />
                <SidebarItem icon={GitBranch} label="고객 여정" />
                <SidebarItem icon={MessageSquare} label="자동화 메시지" />
                <SidebarItem icon={BarChart3} label="전환 성과" />

                <div className="mt-auto">
                    <SidebarItem icon={Settings} label="설정" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-background/50 min-w-0">
                {/* Header */}
                <div className="h-12 border-b border-border flex items-center justify-between px-4 md:px-6 bg-card/20 shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">CRM 대시보드</span>
                        <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[9px]">Beta</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4 text-muted-foreground" />
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent border border-white/10" />
                    </div>
                </div>

                <div className="p-4 md:p-6 space-y-4 overflow-hidden flex-1 flex flex-col">
                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <StatCard label="신규 리드" value="128명" icon="✨" trend="+12%" />
                        <StatCard label="상담 예약" value="45건" icon="📅" trend="+8%" />
                        <StatCard label="등록 전환율" value="24.5%" icon="📈" trend="+2.1%" />
                        <StatCard label="자동화 발송" value="1,240건" icon="🤖" />
                    </div>

                    {/* Main Charts Area */}
                    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Main Graph (Lead Funnel) */}
                        <div className="md:col-span-2 rounded-xl border border-border bg-card/40 p-4 flex flex-col relative overflow-hidden">
                            <h3 className="font-semibold text-foreground mb-1">고객 여정 단계별 현황</h3>
                            <p className="text-[10px] text-muted-foreground mb-4">이번 달 리드 획득부터 결제까지의 깔때기 분석</p>

                            <div className="flex-1 flex items-end justify-between px-2 gap-2 md:gap-4 relative z-10 w-full">
                                <FunnelBar label="방문" value={100} color="bg-slate-700" count="1,200" />
                                <FunnelBar label="문의" value={65} color="bg-blue-600" count="780" />
                                <FunnelBar label="상담" value={45} color="bg-indigo-600" count="540" />
                                <FunnelBar label="체험" value={30} color="bg-violet-600" count="360" />
                                <FunnelBar label="결제" value={20} color="bg-primary" count="240" />
                            </div>
                        </div>

                        {/* Side Widget (Automation Logs) */}
                        <div className="rounded-xl border border-border bg-card/40 p-4 flex flex-col overflow-hidden">
                            <h3 className="font-semibold text-foreground mb-3">실시간 자동화 로그</h3>
                            <div className="flex-1 flex flex-col gap-2 overflow-hidden relative mask-image-b">
                                <LogItem action="미출석 알림" target="김민수 회원" time="방금 전" />
                                <LogItem action="재등록 쿠폰" target="이영희 회원" time="2분 전" />
                                <LogItem action="웰컴 메시지" target="박지성 회원" time="5분 전" />
                                <LogItem action="상담 리마인드" target="최동원 회원" time="12분 전" />
                                <LogItem action="생일 축하" target="강백호 회원" time="15분 전" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active }: any) {
    return (
        <div className={cn(
            "w-full px-3 py-2 flex items-center gap-3 cursor-pointer transition-colors relative",
            active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        )}>
            {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />}
            <Icon className="w-4 h-4 shrink-0" />
            <span className="hidden md:inline font-medium truncate">{label}</span>
        </div>
    )
}

function StatCard({ label, value, icon, trend }: any) {
    return (
        <div className="rounded-xl border border-border bg-card/40 p-3 md:p-4 flex flex-col gap-1 hover:bg-card/60 transition-colors">
            <div className="flex justify-between items-start">
                <span className="text-muted-foreground text-[10px] md:text-xs truncate">{label}</span>
                <span className="text-sm md:text-base">{icon}</span>
            </div>
            <div className="flex items-end gap-2 mt-1">
                <span className="font-bold text-base md:text-lg text-foreground truncate">{value}</span>
                {trend && <span className="text-[9px] md:text-[10px] text-emerald-500 font-medium mb-0.5">{trend}</span>}
            </div>
        </div>
    );
}

function FunnelBar({ label, value, color, count }: any) {
    return (
        <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
            <div className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{count}</div>
            <div className="w-full relative bg-secondary/30 rounded-t-sm h-32 md:h-40 flex items-end overflow-hidden">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn("w-full rounded-t-sm opacity-90 group-hover:opacity-100 transition-opacity", color)}
                />
            </div>
            <span className="text-[9px] md:text-[10px] text-muted-foreground">{label}</span>
        </div>
    )
}

function LogItem({ action, target, time }: any) {
    return (
        <div className="flex items-center justify-between text-[10px] p-2 rounded bg-background/50 border border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-foreground">{action}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
                <span>{target}</span>
                <span className="text-[9px] opacity-70">{time}</span>
            </div>
        </div>
    )
}

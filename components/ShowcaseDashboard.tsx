"use client";

import Image from "next/image";
import { Activity, Users, TrendingUp, Zap } from "lucide-react";

function MiniStat({ icon: Icon, label, value, color }: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-3 flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        <Icon className={`w-3.5 h-3.5 ${color}`} />
        <span className="text-[10px] text-muted-foreground">{label}</span>
      </div>
      <span className="font-bold text-sm text-foreground">{value}</span>
    </div>
  );
}

function ActivityRow({ message, time }: { message: string; time: string }) {
  return (
    <div className="flex items-center justify-between text-[10px] p-2 rounded-lg bg-background/50 border border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-foreground">{message}</span>
      </div>
      <span className="text-muted-foreground shrink-0 ml-2">{time}</span>
    </div>
  );
}

export function ShowcaseDashboard() {
  return (
    <div className="w-full h-full flex flex-col bg-background text-[10px] md:text-xs select-none p-4 gap-3">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-14 h-5">
            <Image
              src="/logo.png"
              alt="LVUP"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-[9px] font-medium">
            AI Dashboard
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] text-emerald-500 font-medium">AI 활성</span>
        </div>
      </div>

      {/* KPI 카드 */}
      <div className="grid grid-cols-3 gap-2">
        <MiniStat icon={Users} label="활성 회원" value="284명" color="text-blue-400" />
        <MiniStat icon={TrendingUp} label="이번달 매출" value="4,820만" color="text-emerald-400" />
        <MiniStat icon={Zap} label="AI 처리" value="156건" color="text-amber-400" />
      </div>

      {/* 최근 AI 활동 */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 mb-0.5">
          <Activity className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-semibold text-foreground">최근 AI 활동</span>
        </div>
        <ActivityRow message="홍길동님 맞춤 상담 완료" time="2분 전" />
        <ActivityRow message="재등록 예정 고객 30명 문자 발송" time="15분 전" />
        <ActivityRow message="이하은님 운동 리포트 생성" time="1시간 전" />
      </div>
    </div>
  );
}

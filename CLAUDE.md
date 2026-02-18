# primal-ring 프로젝트 컨텍스트

## 스택
- Next.js 16 + React 19 + TypeScript
- Framer Motion (애니메이션)
- Tailwind CSS 4

## 타입
- 마케팅 랜딩 페이지 (백엔드/DB 없음)

## 컴포넌트 구조
- 섹션 단위: Hero, ProblemStatement, CustomerJourney, Pricing, FAQ 등
- 각 섹션이 독립적인 컴포넌트

## 애니메이션
- Framer Motion: `motion.div`, `AnimatePresence`, `useInView`
- 스크롤 기반 애니메이션, 페이드인/슬라이드인 효과

## 폰트
- Pretendard (한글 최적화)

## 경로 별칭
- `@/*` → `./*`

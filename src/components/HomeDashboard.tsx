import { motion } from 'motion/react';
import { Bell, LayoutGrid, BarChart3, Trees, Zap, User, Milestone, Leaf } from 'lucide-react';
import { NavigationProps } from '../types';

export default function HomeDashboard({ activeScreen, onNavigate }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="bg-surface text-on-surface font-sans min-h-screen pb-28"
    >
      {/* TopAppBar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center w-full px-5 h-16 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <img
              alt="Min-ji profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyvxOTZ3FW0vWvwIv6Jc3_RJgpiq_VyuIXJwOMqB6zHLS517Xf-2ScGqOUYWVbrC0wYNwVBMXQhwqteMel-HuqHNtF7UeUVBKV7PtoCzyYrKT_6RkJdsGM8qQPP_V7ek8tbMdgAaeUmjHaSWSPTyXpBADNnC0H4XW4VsQbmZtXBOZchyTckYEAyaIDECQn03WRr9e5nhKyIogF22WEB_W-SN5V09ooMpPuQcQBkADx7tBK1tEXDbuS9aBTkLrHyJeuPC4ykMfbBUy"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-on-surface">Saju-Tech</span>
        </div>
        <button 
          aria-label="알림"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-100"
        >
          <Bell className="w-5 h-5 text-primary" />
        </button>
      </header>

      <main className="max-w-[1200px] mx-auto px-5 pt-6">
        {/* Welcome Headline */}
        <section className="mb-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-primary tracking-tight leading-tight">
            안녕하세요 민지님, 당신의 잠재력이 깨어나고 있는 하루예요.
          </h1>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Energy Card (span-8) */}
          <div className="col-span-12 md:col-span-8 bg-white border border-outline-variant/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
            <div className="relative w-44 h-44 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-surface-container stroke-current"
                  cx="88"
                  cy="88"
                  fill="transparent"
                  r="72"
                  strokeWidth="8"
                />
                <motion.circle
                  className="text-secondary stroke-current"
                  cx="88"
                  cy="88"
                  fill="transparent"
                  r="72"
                  strokeLinecap="round"
                  strokeWidth="8"
                  initial={{ strokeDasharray: 452, strokeDashoffset: 452 }}
                  animate={{ strokeDashoffset: 452 - (85 / 100) * 452 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ strokeDasharray: 452 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary leading-none">85%</span>
                <span className="text-xs font-mono font-medium tracking-widest text-[#45464d] mt-1">최적</span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-display font-bold mb-2">오늘의 에너지 스코어</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                현재의 우주 알고리즘과 당신의 기운이 조화를 이루어 정점에 도달했습니다. 오후 2시에서 4시 사이에 중요한 결정을 내리기에 아주 좋은 시기입니다.
              </p>
              <div className="flex gap-2 justify-center sm:justify-start">
                <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-mono font-medium text-on-primary-fixed-variant">#희신 (喜神)</span>
                <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-mono font-medium text-on-primary-fixed-variant">#최고의효율</span>
              </div>
            </div>
          </div>

          {/* Triple-Check Consensus Card (span-4) */}
          <div className="col-span-12 md:col-span-4 bg-primary-container text-white rounded-2xl p-6 flex flex-col justify-between border border-primary-container">
            <div>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold">GPT</div>
                <div className="w-8 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold">CLA</div>
                <div className="w-8 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold">GEM</div>
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">일치하는 예측</h3>
              <p className="text-sm text-[#bec6e0] leading-relaxed">
                GPT, Claude, Gemini가 모두 동의합니다: 오늘은 커리어 성장을 위한 <span className="text-tertiary-fixed-dim font-bold">럭키 에너지</span>의 날입니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-mono text-white/70">신뢰도: 98.2%</span>
            </div>
          </div>

          {/* 30만 데이터 기반 (span-4) - MUST support navigate to report with push transition */}
          <div
            id="bigdata-insight-card"
            className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 rounded-2xl p-5 hover:shadow-md hover:border-secondary/20 transition-all cursor-pointer group span-4"
            onClick={() => onNavigate('report', true)}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <BarChart3 className="w-4 h-4 text-secondary" />
              <span className="text-xs font-mono font-bold text-secondary">빅데이터 인사이트</span>
            </div>
            <p className="text-base font-bold text-primary mb-2">30만 임상 데이터 기반</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              "민지님과 유사한 사주를 가진 분들의 <span className="text-secondary font-bold">68%가 오늘 미팅에서 성공적인 결과</span>를 얻었습니다."
            </p>
          </div>

          {/* Lucky Item (span-4) */}
          <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
              <Trees className="w-6 h-6 text-[#2a1700]" />
            </div>
            <div>
              <span className="text-xs font-mono text-on-surface-variant block mb-1">럭키 아이템</span>
              <p className="text-base font-bold text-primary">숲의 향기 (목 기운)</p>
            </div>
          </div>

          {/* Quick Action (span-4) */}
          <div className="col-span-12 md:col-span-4 bg-secondary-container text-white rounded-2xl p-5 relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
            <div className="relative z-15">
              <span className="text-xs font-mono text-white/80 mb-2 block uppercase tracking-wider">오늘의 액션</span>
              <p className="text-sm font-bold text-[#fffbff] leading-snug">
                당신의 아이디어를 마음껏 표현해 보세요 (상관 에너지 활용).
              </p>
            </div>
            <Zap className="absolute -right-3 -bottom-3 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Elemental Distribution Chart (span-12) */}
          <div className="col-span-12 bg-white border border-outline-variant/30 rounded-2xl p-6 shadow-[0px_4px_20px_rgba(15,23,42,0.02)]">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-lg font-display font-bold">오행 분석</h3>
                <p className="text-sm text-on-surface-variant">오늘의 5행 밸런스 상태</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-mono font-medium text-on-surface-variant">목</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="text-xs font-mono font-medium text-on-surface-variant">화</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-xs font-mono font-medium text-on-surface-variant">토</span>
                </div>
              </div>
            </div>

            {/* Simulating custom element chart bars */}
            <div className="flex items-end justify-between h-36 gap-2 sm:gap-4 px-2 select-none">
              <div className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "70%" }}
                  transition={{ duration: 1 }}
                  className="w-full bg-emerald-500 rounded-t"
                />
                <span className="text-xs font-mono font-medium text-on-surface-variant">목</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "45%" }}
                  transition={{ duration: 1 }}
                  className="w-full bg-red-500 rounded-t"
                />
                <span className="text-xs font-mono font-medium text-on-surface-variant">화</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "30%" }}
                  transition={{ duration: 1 }}
                  className="w-full bg-amber-500 rounded-t"
                />
                <span className="text-xs font-mono font-medium text-on-surface-variant">토</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "85%" }}
                  transition={{ duration: 1 }}
                  className="w-full bg-[#76777d] rounded-t"
                />
                <span className="text-xs font-mono font-medium text-on-surface-variant">금</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "20%" }}
                  transition={{ duration: 1 }}
                  className="w-full bg-blue-500 rounded-t"
                />
                <span className="text-xs font-mono font-medium text-on-surface-variant">수</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* BottomNavBar using 'a' tags for spec obedience */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-[#f7f9fb] shadow-[0px_-4px_20px_rgba(15,23,42,0.05)] z-50 rounded-t-2xl border-t border-outline-variant/10">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'home'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <LayoutGrid className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">홈</span>
        </a>

        <a
          href="#report"
          onClick={(e) => { e.preventDefault(); onNavigate('report'); }}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'report'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">분석</span>
        </a>

        <a
          href="#timeline"
          onClick={(e) => { e.preventDefault(); onNavigate('timeline'); }}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'timeline'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Milestone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">타임라인</span>
        </a>

        <a
          href="#wellness"
          onClick={(e) => { e.preventDefault(); onNavigate('wellness'); }}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'wellness'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Leaf className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">웰니스</span>
        </a>

        <a
          href="#myinfo"
          onClick={(e) => { e.preventDefault(); }}
          className="flex flex-col items-center justify-center rounded-full px-4 py-1.5 text-on-surface-variant hover:text-primary transition-all"
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono tracking-tight">내 정보</span>
        </a>
      </nav>
    </motion.div>
  );
}

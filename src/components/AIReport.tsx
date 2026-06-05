import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Sparkles, Droplet, Trees, Truck, Lightbulb, LayoutGrid, BarChart3, Milestone, Leaf, User } from 'lucide-react';
import { NavigationProps } from '../types';

export default function AIReport({ activeScreen, onNavigate }: NavigationProps) {
  const [interpretMode, setInterpretMode] = useState<'traditional' | 'modern'>('traditional');

  // Multi-state content mapping
  const primaryTitle = interpretMode === 'modern' 
    ? '잠재적 기회 트리거' 
    : '용신 (당신의 잠재력을 깨워줄 럭키 에너지)';
  const secondaryTitle = interpretMode === 'modern'
    ? '성장 동력 에너지'
    : '겁재 (성장을 자극하는 승부욕 에너지)';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-surface text-on-surface font-sans min-h-screen pb-28"
    >
      {/* TopAppBar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center w-full px-5 h-16 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden border border-outline-variant/30">
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQqUUkuXxv12pRcNBbxmJ-xxs-sPi35RSQxgq-6zwH1bL7I2XYURqn7n07r0VoPRlSGnGri4W7WCsju5q_HMD-gAvmGtaQzPgMEApxXsfgYD3GmP89NtpuI8E8mdutoBIKFsh6XFebeu67zCPDm_Cii6Jddbq0Hbi0lSDrx1Y51-ch0-Uzd6AsMJwGmouhUM1EL3ADwqzu_DKD4UjaCQJ4Azi38mAyQJkKAPfLtgEohJJJBi1st5ZbV-5co_SvU2hdpJs-xqqrPuHJ"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-on-surface">Saju-Tech</span>
        </div>
        <button 
          aria-label="알림"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors duration-100"
        >
          <Bell className="w-5 h-5 text-primary" />
        </button>
      </header>

      <main className="max-w-[1240px] mx-auto px-5 pt-6 space-y-6">
        
        {/* Title Section */}
        <section className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">정밀 분석 리포트</h1>
          <p className="text-on-surface-variant text-sm">1988년 5월 12일생 임상 데이터 매칭 결과</p>
        </section>

        {/* Section 1: The Four Pillars Grid */}
        <section className="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-[0px_4px_20px_rgba(15,23,42,0.01)]">
          <div className="grid grid-cols-12 gap-4">
            
            {/* Labels column */}
            <div className="col-span-3 flex flex-col justify-around py-4 h-48 border-r border-outline-variant/10 text-center select-none shrink-0">
              <span className="text-xs font-mono font-bold text-on-surface-variant/40 tracking-wider">HEAVEN</span>
              <span className="text-xs font-mono font-bold text-on-surface-variant/40 tracking-wider">EARTH</span>
            </div>

            {/* Pillar 1: Year */}
            <div className="col-span-3 hover:translate-y-[-2px] transition-transform duration-300 bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1 border border-outline-variant/10">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant/60">YEAR</span>
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center mb-1.5 shadow-sm">
                <Truck className="w-4 h-4 text-amber-700" />
              </div>
              <div className="text-xl font-display font-bold leading-snug">戊</div>
              <div className="text-lg font-display font-semibold text-on-surface-variant/80">辰</div>
            </div>

            {/* Pillar 2: Month */}
            <div className="col-span-3 hover:translate-y-[-2px] transition-transform duration-300 bg-surface-container-low rounded-xl p-3 flex flex-col items-center gap-1 border border-outline-variant/10">
              <span className="text-[10px] font-mono font-bold text-on-surface-variant/60">MONTH</span>
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center mb-1.5 shadow-sm">
                <Trees className="w-4 h-4 text-emerald-700" />
              </div>
              <div className="text-xl font-display font-bold leading-snug">丁</div>
              <div className="text-lg font-display font-semibold text-on-surface-variant/80">巳</div>
            </div>

            {/* Pillar 3: Day (Me) */}
            <div className="col-span-3 hover:translate-y-[-2px] transition-transform duration-300 bg-white ring-2 ring-secondary/30 rounded-xl p-3 flex flex-col items-center gap-1 border border-outline-variant/20 shadow-sm relative">
              <span className="text-[10px] font-mono font-extrabold text-secondary tracking-wide flex items-center gap-1">
                DAY (ME)
              </span>
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mb-1.5 shadow-sm">
                <Droplet className="w-4 h-4 text-blue-700" />
              </div>
              <div className="text-xl font-display font-extrabold text-[#191c1e] leading-snug">壬</div>
              <div className="text-lg font-display font-bold text-on-surface-variant">午</div>
            </div>

          </div>
        </section>

        {/* Section 2: AI Hybrid Interpretation + Dynamic Toggle */}
        <section className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <h2 className="text-lg font-display font-bold text-primary">AI 하이브리드 통변</h2>
            </div>

            {/* View Switcher Toggle */}
            <div className="bg-white p-1 rounded-full flex gap-1 relative border border-outline-variant/30 w-full sm:w-48 h-10 shadow-inner">
              <button
                className={`relative z-10 flex-1 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  interpretMode === 'traditional' ? 'bg-[#dae2fd] text-on-secondary-fixed' : 'text-on-surface-variant'
                }`}
                onClick={() => setInterpretMode('traditional')}
              >
                전통
              </button>
              <button
                className={`relative z-10 flex-1 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  interpretMode === 'modern' ? 'bg-[#dae2fd] text-on-secondary-fixed' : 'text-on-surface-variant'
                }`}
                onClick={() => setInterpretMode('modern')}
              >
                현대
              </button>
            </div>
          </div>

          {/* Dual Column Interpretation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={interpretMode + "force"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm"
              >
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block mb-2">Primary Force</span>
                <p className="text-base font-display font-bold text-primary leading-snug">{primaryTitle}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-2.5">
                  운의 흐름을 조율하고 의사 결정의 방향성을 최적화하는 핵심 균형 요소입니다.
                </p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={interpretMode + "driver"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm"
              >
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block mb-2">Secondary Driver</span>
                <p className="text-base font-display font-bold text-primary leading-snug">{secondaryTitle}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-2.5">
                  개인적 성장을 촉진하는 외부적 자극과 경쟁적 환경을 나타냅니다.
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* Section 3 & 4: Bento Layout for Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Statistical Moat */}
          <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-display font-bold mb-1">통계적 확신 지표</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                저희 알고리즘은 이 프로필을 위해 300,000건 이상의 임상 데이터를 교차 분석했습니다.
              </p>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-end gap-3">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary leading-none">92%</span>
                <span className="text-xs text-on-surface-variant pb-1 font-mono">일치율</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-secondary rounded-full shadow-[0_0_12px_rgba(107,56,212,0.2)]"
                  />
                </div>
                <p className="text-xs italic text-on-surface font-medium leading-relaxed pt-1 select-none">
                  "기술 및 벤처 캐피탈 분야의 성공한 창업가들과 92% 일치합니다."
                </p>
              </div>
            </div>
          </div>

          {/* Key Traits Radar Chart */}
          <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 flex flex-col items-center shadow-sm">
            <h3 className="text-lg font-display font-bold self-start mb-4">심리 분석 프로필</h3>
            <div className="relative w-full aspect-square max-w-[240px] flex items-center justify-center">
              
              {/* Pentagonal Radar Chart Grid Simulation */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Outermost ring */}
                <polygon
                  fill="none"
                  points="100,20 180,78 150,172 50,172 20,78"
                  stroke="#eceef0"
                  strokeWidth="1.5"
                />
                {/* Secondary ring */}
                <polygon
                  fill="none"
                  points="100,50 156,91 135,157 65,157 44,91"
                  stroke="#eceef0"
                  strokeWidth="1"
                />
                {/* Innermost ring */}
                <polygon
                  fill="none"
                  points="100,80 124,97 115,125 85,125 76,97"
                  stroke="#eceef0"
                  strokeWidth="1"
                />
                {/* Axis lines */}
                <line stroke="#eceef0" strokeWidth="1" x1="100" x2="100" y1="100" y2="20" />
                <line stroke="#eceef0" strokeWidth="1" x1="100" x2="180" y1="100" y2="78" />
                <line stroke="#eceef0" strokeWidth="1" x1="100" x2="150" y1="100" y2="172" />
                <line stroke="#eceef0" strokeWidth="1" x1="100" x2="50" y1="100" y2="172" />
                <line stroke="#eceef0" strokeWidth="1" x1="100" x2="20" y1="100" y2="78" />
                {/* Data shape */}
                <polygon
                  fill="rgba(107, 56, 212, 0.15)"
                  points="100,35 168,84 135,150 78,135 44,81"
                  stroke="#6b38d4"
                  strokeWidth="2.5"
                />
              </svg>
              
              {/* Radar labels positioning */}
              <span className="absolute top-0 text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-outline-variant/30 shadow-xs">야망</span>
              <span className="absolute top-[35%] -right-3 text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-outline-variant/30 shadow-xs">사교성</span>
              <span className="absolute bottom-1.5 right-1.5 text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-outline-variant/30 shadow-xs">안정성</span>
              <span className="absolute bottom-1.5 left-1.5 text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-outline-variant/30 shadow-xs">창의성</span>
              <span className="absolute top-[35%] -left-3 text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-outline-variant/30 shadow-xs">독립심</span>
            </div>
          </div>

        </div>

        {/* AI Insight Card */}
        <section className="bg-secondary-container/5 p-6 rounded-2xl border-2 border-secondary/10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-white text-[10px] font-mono font-bold tracking-wide uppercase">
                <Lightbulb className="w-3.5 h-3.5 text-white" />
                전략적 인사이트
              </div>
              <p className="text-lg font-display font-bold text-primary leading-snug">
                향후 18개월 내 높은 창업 성공 확률이 감지되었습니다.
              </p>
              <button className="bg-primary hover:bg-neutral-800 text-white px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all hover:scale-95 active:scale-95 select-none">
                실행 계획 생성하기
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-xl bg-surface overflow-hidden border border-outline-variant/20 shadow-xs ring-2 ring-white">
              <img
                alt="Visualization Graphic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLvhGZQUrPlYqNWJxiO10qasOGNe78NTRPopgQVSFb4yBAEKanFyyd_JrRgs0eNlMl9oNLOBgw169yxWQtQ2V23KCekYTWRDaGEKaHS15MlBUjvQ08f-xAoQwLM6rNFUgFsQlTVXhXzd2S6ItxujB2NzWdrLzN6LsIAvpBzpU6cEdk4NsSF_OZNiX30fLcTgCgLUwaGOqj9xN0HBMgeR8WqGHp95AdeCcEv4vxDiuuiYwAqPkrrDGpGdNEtaZUV1CHIQW5yGINY8x"
              />
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>
        </section>

      </main>

      {/* BottomNavBar configured EXCLUSIVELY using button tags for spec compliance */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-[#f7f9fb] shadow-[0px_-4px_20px_rgba(15,23,42,0.05)] z-50 rounded-t-2xl border-t border-outline-variant/10">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'home'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary cursor-pointer'
          }`}
        >
          <LayoutGrid className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">홈</span>
        </button>

        <button
          onClick={() => onNavigate('report')}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'report'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary cursor-pointer'
          }`}
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">분석</span>
        </button>

        <button
          onClick={() => onNavigate('timeline')}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'timeline'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary cursor-pointer'
          }`}
        >
          <Milestone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">타임라인</span>
        </button>

        <button
          onClick={() => onNavigate('wellness')}
          className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all duration-300 ${
            activeScreen === 'wellness'
              ? 'bg-secondary-container text-white scale-100'
              : 'text-on-surface-variant hover:text-primary cursor-pointer'
          }`}
        >
          <Leaf className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-tight">웰니스</span>
        </button>

        <button
          onClick={() => {}}
          className="flex flex-col items-center justify-center rounded-full px-4 py-1.5 text-on-surface-variant hover:text-primary transition-all cursor-pointer"
        >
          <User className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-mono tracking-tight">내 정보</span>
        </button>
      </nav>
    </motion.div>
  );
}

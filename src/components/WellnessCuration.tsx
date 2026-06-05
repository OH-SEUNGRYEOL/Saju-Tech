import { motion } from 'motion/react';
import { Bell, Heart, Trees, Play, CheckCircle2, ChevronLeft, ChevronRight, Plus, Droplet, Sun, HelpCircle, LayoutGrid, BarChart3, Milestone, Leaf, User } from 'lucide-react';
import { NavigationProps } from '../types';

export default function WellnessCuration({ activeScreen, onNavigate }: NavigationProps) {
  // Mock horizontal slide function (aesthetic only, since it is a prototype UI)
  const scrollRight = () => {
    const el = document.getElementById('product-carousel');
    if (el) el.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const el = document.getElementById('product-carousel');
    if (el) el.scrollBy({ left: -240, behavior: 'smooth' });
  };

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
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant/30 shadow-xs">
            <img
              alt="프로필"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4-3QLbIHIa2o-IEKdxvO2_d64RurPdNZuSaRte7Xx30vEhIzlaH2Lj5w2x3-7Wad5vJxXsjbAG9MqlCPMQdWGyhr2L5ZPP1cDJh8zAdOoGVrlF84I4waRs7XqOhHWWzCatAyn4MDWBg0DnMwXhlZytc8Kf-q8YlVKuCtQxamBj3i8qcptmuAB8zGV7bNVkP1tlmTNPZ2jM32EwLpo7_5KZwMfMR-ICi1wVv9uZY2AOzLggdHbx1sMBTPsP8UzcjZ9Wap9SsX8AIaz"
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-on-surface">사주-테크</span>
        </div>
        <button 
          aria-label="알림"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors duration-100"
        >
          <Bell className="w-5 h-5 text-primary" />
        </button>
      </header>

      <main className="max-w-[1200px] mx-auto px-5 pt-8 space-y-8">
        
        {/* Hero Section */}
        <section className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-mono text-[10px] font-bold uppercase tracking-wider">
              체질: 목양
            </span>
            <div className="flex items-center gap-1.5 ml-1">
              <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
              <span className="text-xs font-mono font-medium text-on-surface-variant flex items-center gap-1">
                불균형 상태
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight text-primary">
            &apos;목양&apos; 체질을 위한 퍼스널 웰니스 루틴
          </h1>
          <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
            현재 생체 리듬이 높은 목(木) 기운과 금(金), 수(水) 기운의 부족을 보이고 있습니다. 간의 열을 내리고 피부 탄력을 보강하는 데 집중하세요.
          </p>
        </section>

        {/* Bento Grid Insights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Skin Care Routine (md:col-span-7) */}
          <div className="md:col-span-7 bg-white border border-outline-variant/30 rounded-2xl p-6 space-y-4 shadow-[0px_4px_20px_rgba(15,23,42,0.03)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary-fixed rounded-lg">
                    <Heart className="w-5 h-5 text-on-primary-fixed" />
                  </div>
                  <h2 className="text-lg font-display font-bold">스킨케어: 염증 관리</h2>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#6b38d4]">우선순위: 높음</span>
              </div>
              <div className="space-y-4 mt-4">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  목양 체질은 과도한 내열로 인해 피부 트러블이 발생하기 쉽습니다. 부족한 금 기운은 피부 장벽 약화로, 수 기운 부족은 만성 탈수로 이어집니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <p className="text-[10px] font-mono font-bold text-on-surface-variant mb-1 uppercase tracking-wider">모닝 로직</p>
                    <p className="text-sm font-semibold text-primary">금 기운을 보강하는 징크 기반 자외선 차단.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <p className="text-[10px] font-mono font-bold text-on-surface-variant mb-1 uppercase tracking-wider">이브닝 로직</p>
                    <p className="text-sm font-semibold text-primary">수 기운을 채워주는 고수분 앰플.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant/10 flex items-center justify-between gap-2">
              <div className="flex gap-3">
                <span className="flex items-center gap-1 text-xs font-mono font-bold text-on-surface-variant">
                  <Droplet className="w-3.5 h-3.5 text-blue-500" /> 수 +12%
                </span>
                <span className="flex items-center gap-1 text-xs font-mono font-bold text-on-surface-variant">
                  <Sun className="w-3.5 h-3.5 text-amber-500" /> 금 +8%
                </span>
              </div>
              <button className="text-secondary hover:text-[#5516be] font-bold text-xs font-mono uppercase tracking-wider hover:underline transition-all cursor-pointer">
                전체 분석 보기
              </button>
            </div>
          </div>

          {/* Card 2: Stress Action Routine (md:col-span-5) */}
          <div className="md:col-span-5 bg-secondary-container text-white rounded-2xl p-6 flex flex-col justify-between shadow-[0px_4px_20px_rgba(15,23,42,0.04)] ring-1 ring-secondary-container">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Trees className="w-8 h-8 text-white" />
                <h2 className="text-lg font-display font-bold">스트레스 케어: 삼림욕</h2>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                목(木) 체질은 유기적인 생명력과 연결될 때 에너지가 회복됩니다. 과도한 목 기운을 차분한 움직임으로 다스리는 것이 중요합니다.
              </p>
              <ul className="space-y-2 pt-1 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e9ddff]" />
                  <span className="text-sm font-medium">20분 그라운딩 명상</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e9ddff]" />
                  <span className="text-sm font-medium">소나무 숲길 산책</span>
                </li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 bg-[#fffbff] hover:bg-neutral-100 text-[#6b38d4] rounded-full font-bold text-xs font-mono uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 shadow-sm cursor-pointer select-none">
              <Play className="w-3.5 h-3.5 fill-current" />
              가이드 세션 시작
            </button>
          </div>

        </div>

        {/* Product Slider Section  */}
        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-display font-bold text-primary">맞춤 큐레이션</h2>
              <p className="text-sm text-on-surface-variant leading-normal">사주 프로필에 맞춰 정밀하게 설계된 스킨케어</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 border border-outline rounded-full flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer select-none active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 border border-outline rounded-full flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer select-none active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            id="product-carousel"
            className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 scroll-smooth no-scrollbar select-none"
          >
            {/* Product 1 */}
            <div className="min-w-[260px] max-w-[260px] group cursor-pointer shrink-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-high relative mb-3 border border-outline-variant/20 shadow-xs">
                <img
                  alt="엘리멘탈 쉴드 앰플"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOK0mIJgguLUQ6jQen2CBs_QSSXexaIvwoF7yS56NMyDWvq1r1iv7z5-W2ZZmyAxMYhL1vOR-dWc9_MoCNa1rT39leI74XYoeptGGP3SjIj7VcuZpAZMbWzaJRZCTR4pgpjGeEZVYalYCA1ahFCNCwYBnk4_N6sEunt4xL3F3gTWDxCjcZu4DSCq961hjj3r4XE06jAoWXGpS4YenBUvieS-wZwIGu2E4Eb1a0YoLvkBP3zDEj8uJejhmqrk5sCorlHPbuOF5wnnXd"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-on-surface-variant uppercase tracking-widest leading-none border border-outline-variant/50">
                  금+
                </div>
              </div>
              <h3 className="text-sm font-bold text-primary truncate">엘리멘탈 쉴드 앰플</h3>
              <p className="text-xs font-mono text-on-surface-variant mt-0.5 mb-2">금 기운 밸런스 회복</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-display font-bold text-secondary">$54.00</span>
                <button className="w-8 h-8 rounded-full bg-primary hover:bg-neutral-800 text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="min-w-[260px] max-w-[260px] group cursor-pointer shrink-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-high relative mb-3 border border-outline-variant/20 shadow-xs">
                <img
                  alt="하이드레이션 매트릭스 크림"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnBIaI8OQ5MqDDWLKfb109cqnSYmKJu_8sHKL2vfYeInM1h408evwabhF1iaK23g-Ad6PCQPdK581ZMQHpZUxkFypR-R8f_aN4JyofA3Cjm9ktiBCjNVEAv1GgpYhlEpPT2Z3FTGE32gbCyjnp5-0dnxkanqW1ID0FkPeiSPIVQbcj4Am43mHVvfjg0_AbNTf-nmgvWdGsn5TcXPDTJCdUGQoM5ZC8SwNuL8ch5vshLJZ8WoMp7-66I4BRtqJ9AuFm7k2kHswrDdwZ"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-on-surface-variant uppercase tracking-widest leading-none border border-outline-variant/50">
                  수+
                </div>
              </div>
              <h3 className="text-sm font-bold text-primary truncate">하이드레이션 매트릭스 크림</h3>
              <p className="text-xs font-mono text-on-surface-variant mt-0.5 mb-2">간 열 진정</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-display font-bold text-secondary">$68.00</span>
                <button className="w-8 h-8 rounded-full bg-primary hover:bg-neutral-800 text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="min-w-[260px] max-w-[260px] group cursor-pointer shrink-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-high relative mb-3 border border-outline-variant/20 shadow-xs">
                <img
                  alt="딥 루츠 수딩 오일"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhGg_vAB0o8ZmrTKNLA1TroE3eYrVI9jw9l57GZog200jIlmLHUhQfcIXlvJx9Hs_k6jKXQU1nH6syNXntrMBDBMgw4_LzGu618p9Kxn_hRJKZ6ve-Lh9SzVTA7KqRipX8yVeCqiY4thUpfuF3EUj4RcC9FCRQJRIkZVcioJDnyuAtV86GuKO3hNb7oAvbeFOP-SDqgLX9yCTUS4sK603y_ZzC3LxXN0Xk3SbyKlqGxN3fAltbqkW03DTkJhOt77ECzmPNOG5hKyuM"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-on-surface-variant uppercase tracking-widest leading-none border border-outline-variant/50">
                  토+
                </div>
              </div>
              <h3 className="text-sm font-bold text-primary truncate">딥 루츠 수딩 오일</h3>
              <p className="text-xs font-mono text-on-surface-variant mt-0.5 mb-2">목 기운 안정</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-display font-bold text-secondary">$42.00</span>
                <button className="w-8 h-8 rounded-full bg-primary hover:bg-neutral-800 text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Elemental Probability Meter */}
        <section className="bg-surface-container border border-outline-variant/30 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-display font-bold mb-4 text-primary">오행 밸런스 매트릭스</h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            
            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-outline-variant/10 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-primary">목</span>
                <span className="text-secondary font-extrabold text-[#6b38d4]">84%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 1 }} className="h-full bg-secondary rounded-full" />
              </div>
            </div>

            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-outline-variant/10 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-primary">화</span>
                <span className="text-on-surface-variant font-extrabold">42%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "42%" }} transition={{ duration: 1 }} className="h-full bg-on-primary-container rounded-full" />
              </div>
            </div>

            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-outline-variant/10 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-primary">토</span>
                <span className="text-on-surface-variant font-extrabold">51%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "51%" }} transition={{ duration: 1 }} className="h-full bg-on-primary-container rounded-full" />
              </div>
            </div>

            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-outline-variant/10 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-primary">금</span>
                <span className="text-error font-extrabold">12%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "12%" }} transition={{ duration: 1 }} className="h-full bg-error rounded-full" />
              </div>
            </div>

            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-outline-variant/10 shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-primary">수</span>
                <span className="text-error font-extrabold">18%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "18%" }} transition={{ duration: 1 }} className="h-full bg-error rounded-full" />
              </div>
            </div>

          </div>

          <div className="mt-4 p-4 bg-white/70 rounded-xl text-xs font-medium text-on-surface-variant italic border border-outline-variant/20 leading-relaxed">
            &quot;AI 관찰: 현재 목 에너지가 과잉 상태입니다. 냉각 작용과 금속 소재 아이템을 활용해 열을 식혀주세요.&quot;
          </div>
        </section>

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

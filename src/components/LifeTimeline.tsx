import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Star, TrendingUp, HelpCircle, AlertCircle, Bolt, BookOpen, ShieldCheck, Heart, Navigation, History, Map, Landmark, Search, Brain, LayoutGrid, BarChart3, Milestone, Leaf, User } from 'lucide-react';
import { NavigationProps } from '../types';

interface DetailNode {
  title: string;
  subtitle: string;
  description: string;
  icon: 'star' | 'wealth';
  iconBg: string;
  actions: string[];
}

export default function LifeTimeline({ activeScreen, onNavigate }: NavigationProps) {
  const [selectedNode, setSelectedNode] = useState<'node1' | 'node2'>('node1');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Record<'node1' | 'node2', DetailNode> = {
    node1: {
      title: "라이징 스타 에라 (Rising Star Era)",
      subtitle: "25-34세 (관운)",
      description: "사회적 인정과 조직적 성장이 두드러지는 시기입니다. 현재의 오행 정렬로 인해 당신의 타고난 리더십이 극대화됩니다.",
      icon: 'star',
      iconBg: "bg-secondary-container",
      actions: [
        "과감한 커리어 전환: 안정성보다는 대외적 노출에 집중하세요.",
        "체계적인 조직 내에서의 네트워크 형성.",
        "공개 강연이나 리더십 역할이 유리한 시기입니다."
      ]
    },
    node2: {
      title: "부의 공고화",
      subtitle: "35-44세 (재운)",
      description: "확장보다는 보존에 집중해야 하는 시기입니다. 이 시기의 기운은 전략적 축적을 통한 강력한 재무적 기반 구축을 시사합니다.",
      icon: 'wealth',
      iconBg: "bg-primary-container",
      actions: [
        "투자 및 자산 관리 집중.",
        "부동산 또는 장기 채권 매입.",
        "고위험 투기성 거래 지양."
      ]
    }
  };

  const currentData = nodes[selectedNode];

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
              alt="User profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwnUCZebu8e7jkT9zmdVsz9KAUmYoawXvVM2cN6PPp0BAikicdSfiX8BomcMMON4JPM7FAHcfmp8GbuolSvTat6FRKh6yKTNm4_jXQBK1Vh73UWRy6GcDH8ZCRR5G8NE538zDv8vqQ72nWNlZLhugSDWh2oDmLNd_ffzJgd1jjEaVYLjuL1-CkbCQbnIt9-ab3PLyHKmoZ1083NK9rzXKEU9pDe-XQPhYNsWFeqiRXMuIKxDxXCnzBcxkuwUvYiEom3Yh5tbSHVEO"
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

      <main className="max-w-[1200px] mx-auto px-5 pt-8 space-y-6">
        
        {/* Title Section */}
        <section className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">인생 라이프 타임라인</h1>
          <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            알고리즘 패턴 인식을 통해 10년 단위의 대운 흐름을 시각화합니다.
          </p>
        </section>

        {/* Timeline Visualization Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* S-Curve Chart (col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-2xl p-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between shadow-sm">
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-secondary" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface-variant">
                  운의 흐름 (대운)
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-mono font-bold uppercase tracking-tight flex items-center gap-1.5 border border-outline-variant/30 select-none">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  라이브 동기화
                </span>
              </div>
            </div>

            {/* SVG Wavy Timeline */}
            <div className="flex-grow relative h-72 w-full mt-4">
              <svg className="w-full h-full select-none" viewBox="0 0 800 300" preserveAspectRatio="none">
                
                {/* Horizontal Neutral Line */}
                <line
                  stroke="#e6e8ea"
                  strokeWidth="1.5"
                  strokeDasharray="6"
                  x1="0"
                  x2="800"
                  y1="150"
                  y2="150"
                />

                {/* S-Curve Path with Linear Gradient */}
                <path
                  d="M0,220 C100,220 150,55 250,55 S350,245 450,245 S600,90 800,90"
                  fill="none"
                  stroke="url(#luck-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                <defs>
                  <linearGradient id="luck-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8455ef" />
                    <stop offset="50%" stopColor="#6b38d4" />
                    <stop offset="100%" stopColor="#2c3133" />
                  </linearGradient>
                </defs>

                {/* Hover Tooltips (absolute simulated SVG markers) */}
                <g>
                  {/* Node 1: 25-34 Age */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode('node1')}
                    onMouseEnter={() => setHoveredNode('node1')}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <circle
                      cx="250"
                      cy="55"
                      r={selectedNode === 'node1' ? "15" : "12"}
                      fill="#ffffff"
                      stroke="#8455ef"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="250"
                      cy="55"
                      r="22"
                      fill="#8455ef"
                      fillOpacity={selectedNode === 'node1' ? "0.15" : "0.05"}
                      className="animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                    <text
                      x="250"
                      y="25"
                      textAnchor="middle"
                      className={`text-xs font-mono font-bold ${
                        selectedNode === 'node1' ? 'fill-secondary' : 'fill-on-surface-variant'
                      }`}
                    >
                      25-34
                    </text>
                  </g>

                  {/* Node 2: 35-44 Age */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode('node2')}
                    onMouseEnter={() => setHoveredNode('node2')}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <circle
                      cx="450"
                      cy="245"
                      r={selectedNode === 'node2' ? "15" : "12"}
                      fill="#ffffff"
                      stroke="#2d3133"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="450"
                      cy="245"
                      r="22"
                      fill="#2d3133"
                      fillOpacity={selectedNode === 'node2' ? "0.15" : "0.05"}
                      className="animate-ping"
                      style={{ animationDuration: '3.5s' }}
                    />
                    <text
                      x="450"
                      y="280"
                      textAnchor="middle"
                      className={`text-xs font-mono font-bold ${
                        selectedNode === 'node2' ? 'fill-primary' : 'fill-on-surface-variant'
                      }`}
                    >
                      35-44
                    </text>
                  </g>
                </g>
              </svg>

              {/* Tooltip render */}
              <AnimatePresence>
                {(hoveredNode || selectedNode) && (
                  <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-[#131b2e] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md border border-white/10 flex items-center gap-2"
                    >
                      <span>
                        {hoveredNode === 'node2' || (hoveredNode === null && selectedNode === 'node2') 
                          ? '부의 공고화 (부의 흐름)' 
                          : '라이징 스타 에라 (커리어 기회)'}
                      </span>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

            </div>

            {/* Path Labels (S-Curve lifecycle labels) */}
            <div className="flex justify-between mt-4 border-t border-outline-variant/10 pt-4 text-xs font-mono font-bold text-on-surface-variant/70">
              <span>유년기</span>
              <span>청년기</span>
              <span>장년기</span>
              <span>노년기</span>
            </div>

          </div>

          {/* Dynamic Information Sidebar Card (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-container-low border border-outline-variant/40 rounded-2xl p-5 shadow-inner space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${currentData.iconBg}`}>
                    {currentData.icon === 'star' ? <Star className="w-6 h-6 fill-current" /> : <TrendingUp className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-primary leading-tight">
                      {currentData.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider block mt-0.5">
                      {currentData.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {currentData.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-outline-variant/15">
                  <span className="font-mono text-[10px] font-bold text-on-surface/40 uppercase tracking-widest block">
                    전략적 액션
                  </span>
                  
                  <div className="space-y-2">
                    {currentData.actions.map((act, index) => (
                      <div key={index} className="flex items-start gap-2.5 p-3 bg-white border border-outline-variant/15 rounded-xl shadow-xs">
                        <Star className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-on-surface leading-tight">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Consistency Index / Confidence Card */}
            <div className="bg-white border border-outline-variant/20 rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between gap-3">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-on-surface-variant/60">
                    AI 확신 지수
                  </h4>
                  <span className="text-base font-display font-bold text-secondary">
                    94%
                  </span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-secondary rounded-full"
                  />
                </div>
              </div>
              <p className="text-[10px] text-on-surface-variant italic leading-normal select-none">
                4,240만 건의 누적 사주 데이터 포인트 분석 결과입니다.
              </p>
            </div>

            {/* Optimizing Fab Button */}
            <button className="w-full py-4 bg-primary hover:bg-neutral-800 text-white rounded-2xl font-display font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer select-none">
              <Bolt className="w-5 h-5 fill-current text-white/90 animate-bounce" style={{ animationDuration: '2s' }} />
              이 경로 최적화하기
            </button>

          </div>

        </div>

        {/* Secondary Grid Deep Dives Section (3 Column Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white border border-outline-variant/20 p-5 rounded-2xl flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-3 border border-outline-variant/10">
              <Landmark className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary mb-1">조직의 행운</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                관운이 들어온 시기에는 공공기관이나 대기업 환경과 높은 궁합을 보입니다.
              </p>
            </div>
          </div>

          <div className="bg-white border border-outline-variant/20 p-5 rounded-2xl flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-3 border border-outline-variant/10">
              <Heart className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary mb-1">관계의 흐름</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                31세에 대인관계 에너지가 정점에 도달합니다. 장기적인 파트너십을 맺기에 권장되는 시기입니다.
              </p>
            </div>
          </div>

          <div className="bg-white border border-outline-variant/20 p-5 rounded-2xl flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-3 border border-outline-variant/10">
              <Brain className="w-5 h-5 text-[#ffb95f]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary mb-1">정신적 회복탄력성</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                전환기에는 내면의 안정감이 다소 하락할 수 있습니다. 명상과 루틴에 집중하는 것이 필요합니다.
              </p>
            </div>
          </div>

        </section>

        {/* Footer with verified batch */}
        <footer className="pt-6 pb-12 border-t border-outline-variant/20 text-center">
          <div className="inline-flex items-center gap-2 text-on-surface-variant/60 font-mono text-[10px] font-semibold uppercase tracking-widest leading-none">
            <ShieldCheck className="w-4 h-4 text-secondary/70 shrink-0" />
            이 데이터는 3개의 AI 모델과 과거 패턴을 통해 교차 검증되었습니다.
          </div>
        </footer>

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

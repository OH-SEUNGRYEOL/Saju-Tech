import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import HomeDashboard from './components/HomeDashboard';
import AIReport from './components/AIReport';
import WellnessCuration from './components/WellnessCuration';
import LifeTimeline from './components/LifeTimeline';
import { ActiveScreen } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [isPushTransition, setIsPushTransition] = useState<boolean>(false);

  // Core navigation dispatcher
  const handleNavigate = (screen: ActiveScreen, isPush: boolean = false) => {
    setIsPushTransition(isPush);
    setActiveScreen(screen);
  };

  // Build the transition animation parameters based on transition type
  const getVariants = () => {
    if (isPushTransition) {
      return {
        initial: { x: "100%", opacity: 0.9 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0.9 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } // springy smooth ease out
      };
    } else {
      return {
        initial: { opacity: 1, x: 0 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: 0 },
        transition: { duration: 0 } // instant snap
      };
    }
  };

  const anim = getVariants();

  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-[#f7f9fb] select-none">
      <AnimatePresence mode="wait" initial={false}>
        {activeScreen === 'home' && (
          <motion.div
            key="home"
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="w-full absolute top-0 left-0"
          >
            <HomeDashboard activeScreen={activeScreen} onNavigate={handleNavigate} />
          </motion.div>
        )}

        {activeScreen === 'report' && (
          <motion.div
            key="report"
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="w-full absolute top-0 left-0"
          >
            <AIReport activeScreen={activeScreen} onNavigate={handleNavigate} />
          </motion.div>
        )}

        {activeScreen === 'wellness' && (
          <motion.div
            key="wellness"
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="w-full absolute top-0 left-0"
          >
            <WellnessCuration activeScreen={activeScreen} onNavigate={handleNavigate} />
          </motion.div>
        )}

        {activeScreen === 'timeline' && (
          <motion.div
            key="timeline"
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="w-full absolute top-0 left-0"
          >
            <LifeTimeline activeScreen={activeScreen} onNavigate={handleNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

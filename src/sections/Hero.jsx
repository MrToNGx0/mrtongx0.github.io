import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const nameClass = 'text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter uppercase leading-none';

// Intl.Segmenter keeps Thai vowels and tone marks attached to their consonant
const splitGraphemes = (text) =>
  typeof Intl !== 'undefined' && Intl.Segmenter
    ? [...new Intl.Segmenter('th', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment)
    : Array.from(text);

const RevealText = ({ text, delay = 0, ready }) => (
  <span aria-label={text} className="inline-block">
    {splitGraphemes(text).map((ch, i) => (
      // padding + negative margin widens the mask so Thai marks above/below aren't clipped
      <span key={`${text}-${i}`} aria-hidden="true" className="inline-block overflow-hidden py-[0.2em] -my-[0.2em]">
        <motion.span
          className="inline-block"
          initial={{ y: '115%' }}
          animate={ready ? { y: 0 } : undefined}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.05 }}
        >
          {ch}
        </motion.span>
      </span>
    ))}
  </span>
);

const Hero = ({ personal, currentLang, socialIcons, t, containerRef }) => {
  const sectionRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);

  // hold the intro until the photo and fonts are in, then fade out the HTML boot loader (index.html)
  React.useEffect(() => {
    const finish = () => {
      setReady(true);
      const boot = document.getElementById('boot');
      if (boot) {
        boot.classList.add('done');
        setTimeout(() => boot.remove(), 700);
      }
    };
    const img = imgRef.current;
    const imgLoaded = !img || img.complete
      ? Promise.resolve()
      : new Promise((r) => {
          img.addEventListener('load', r, { once: true });
          img.addEventListener('error', r, { once: true });
        });
    Promise.all([imgLoaded, document.fonts?.ready]).then(finish);
    const fallback = setTimeout(finish, 8000); // never leave visitors stuck on the loader
    return () => clearTimeout(fallback);
  }, []);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // layers move at different speeds while the hero scrolls away
  const depth = (px) => (reduceMotion ? 0 : px);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, depth(250)]);
  const namesY = useTransform(scrollYProgress, [0, 1], [0, depth(-150)]);
  const namesOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduceMotion ? 1 : 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, depth(120)]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/video/background-poster.jpg"
          aria-hidden="true"
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/background.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-white/15" />

      {/* Names sit behind the photo; on phones the photo fills the width, so they move in front at the bottom */}
      <motion.div
        style={{ y: namesY, opacity: namesOpacity }}
        className="absolute inset-0 z-30 md:z-10 pointer-events-none"
      >
        <div className="absolute left-6 bottom-48 md:bottom-auto md:top-24 md:left-16">
          <h1 key={`fn-${currentLang}`} className={`${nameClass} text-slate-900 opacity-80`}>
            <RevealText text={personal.firstName[currentLang]} ready={ready} />
          </h1>
          <motion.p
            key={`pos-${currentLang}`}
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-slate-700"
          >
            {personal.jobPosition[currentLang]}
          </motion.p>
        </div>

        <div className="absolute right-6 bottom-24 md:bottom-auto md:top-60 lg:top-72 md:right-16 text-right">
          <span key={`ln-${currentLang}`} className={`block ${nameClass} outline-text`}>
            <RevealText text={personal.lastName[currentLang]} delay={0.35} ready={ready} />
          </span>
        </div>
      </motion.div>

      <motion.div style={{ y: photoY }} className="absolute inset-0 z-20">
        <motion.img
          ref={imgRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          src={personal.avatarLink}
          alt={`${personal.firstName[currentLang]} ${personal.lastName[currentLang]}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* fades the photo into the white page below */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 md:h-1/3 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-30 pb-10 md:pb-14"
      >
        <div className="px-6 md:px-16 flex flex-wrap items-center justify-between gap-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-brand hover:border-brand transition-colors"
          >
            {t('hero.view')}
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
          </a>
          <div className="flex gap-5">
            {personal.social?.map((s) => (
              <a
                key={s.label}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors text-lg"
                aria-label={s.label}
              >
                <FontAwesomeIcon icon={socialIcons[s.label]} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

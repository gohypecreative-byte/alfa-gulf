'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealLine {
  id?: string;
  prefix?: string;
  image?: string;
  alt?: string;
  suffix?: string;
  fullText?: string;
}

export interface ImageTextRevealProps {
  lines?: RevealLine[];
  revealWidthDesktop?: number;
  revealWidthMobile?: number;
  floatingWidth?: number;
  floatingHeight?: number;
  className?: string;
  textClassName?: string;
}

// Tailored construction, infrastructure, safety, and teamwork visuals generated specifically for Alfa Gulf:
const DEFAULT_LINES: RevealLine[] = [
  {
    prefix: 'We watch out',
    image: '/safety/safety_team_site.jpg',
    alt: 'We watch out for each other - Active infrastructure safety team',
    suffix: 'for each other.',
  },
  {
    prefix: 'Part of a',
    image: '/safety/common_good_infra.jpg',
    alt: 'Part of a common good - Sustainable infrastructure',
    suffix: 'common good',
  },
  {
    fullText: 'and cohesive team',
  },
  {
    prefix: 'emphasizing',
    image: '/safety/people_safety_culture.jpg',
    alt: 'Emphasizing people - Engineers and construction crew',
    suffix: 'people',
  },
  {
    prefix: 'and',
    image: '/safety/teamwork_structural.jpg',
    alt: 'Teamwork - High-rise structural steel builders',
    suffix: 'teamwork.',
  },
];

export const ImageTextReveal: React.FC<ImageTextRevealProps> = ({
  lines = DEFAULT_LINES,
  revealWidthDesktop = 320,
  revealWidthMobile = 120,
  className = '',
  textClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseImgRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const lineElements = containerRef.current.querySelectorAll('.reveal-line');
    const isMobile = window.innerWidth < 768;
    const revealWidth = isMobile ? revealWidthMobile : revealWidthDesktop;

    const anims: gsap.core.Tween[] = [];

    lineElements.forEach((line) => {
      const imgSpan = line.querySelector('.img-reveal-span');
      if (imgSpan) {
        const anim = gsap.fromTo(
          imgSpan,
          { width: 0 },
          {
            width: revealWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
        anims.push(anim);
      }
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    const moveMouse = (e: MouseEvent) => {
      if (mouseImgRef.current) {
        gsap.to(mouseImgRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', moveMouse);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', moveMouse);
      anims.forEach((a) => {
        if (a.scrollTrigger) a.scrollTrigger.kill();
        a.kill();
      });
    };
  }, [revealWidthDesktop, revealWidthMobile]);

  // Reduced font weight from font-black to font-semibold/font-bold, stretched clamp scale across the screen width
  const defaultTextClass =
    'text-[clamp(1.6rem,4.6vw,4.8rem)] font-semibold md:font-bold tracking-tight leading-none whitespace-nowrap uppercase select-none text-zinc-900';

  const combinedTextClass = textClassName
    ? `${defaultTextClass} ${textClassName}`
    : defaultTextClass;

  const fallbackFirstImage = lines.find((l) => l.image)?.image || '';

  return (
    <div
      className={`relative w-full bg-white text-zinc-900 overflow-x-hidden selection:bg-black selection:text-white cursor-default pt-8 md:pt-12 pb-10 md:pb-14 ${className}`}
    >
      {/* FLOATING IMAGE FOLLOWER */}
      <div
        ref={mouseImgRef}
        className={`fixed top-0 left-0 
          w-[290px] h-[195px]          
          md:w-[520px] md:h-[345px]    
          pointer-events-none z-[999] overflow-hidden rounded-2xl 
          transition-all duration-300 -translate-x-1/2 -translate-y-1/2 
          shadow-[0_30px_70px_-10px_rgba(0,0,0,0.32)] ring-1 ring-black/10 bg-zinc-100
          ${activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
      >
        <img
          src={activeImage || fallbackFirstImage}
          className="w-full h-full object-cover"
          alt="preview follower"
        />
      </div>

      {/* TEXT LINES CONTAINER (STRETCHED WIDE ACROSS VIEWPORT) */}
      <div
        ref={containerRef}
        className="w-full max-w-[96vw] xl:max-w-[1400px] mx-auto flex flex-col justify-center items-center space-y-4 md:space-y-7 px-2 sm:px-4"
      >
        {lines.map((line, idx) => {
          if (line.fullText) {
            return (
              <div
                key={line.id || `line-${idx}`}
                className="reveal-line flex justify-center items-center w-full text-center"
              >
                <span className={combinedTextClass}>{line.fullText}</span>
              </div>
            );
          }

          return (
            <div
              key={line.id || `line-${idx}`}
              className="reveal-line flex justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap md:flex-nowrap"
            >
              {line.prefix && (
                <span className={combinedTextClass}>{line.prefix}</span>
              )}

              {line.image && (
                <span
                  onMouseEnter={() => setActiveImage(line.image!)}
                  onMouseLeave={() => setActiveImage(null)}
                  className="img-reveal-span inline-block align-middle h-10 sm:h-12 md:h-16 lg:h-20 w-0 rounded-lg md:rounded-2xl overflow-hidden relative bg-zinc-200 cursor-pointer shadow-inner shrink-0"
                >
                  <img
                    src={line.image}
                    alt={line.alt || 'reveal visual'}
                    className="h-full w-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300 min-w-[120px] md:min-w-[320px]"
                  />
                </span>
              )}

              {line.suffix && (
                <span className={combinedTextClass}>{line.suffix}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* ACTION LINKS (LEARN MORE | CAREERS AT ALFA GULF) */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
        <a
          href="/about-us"
          className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 hover:text-sky-600 transition-colors uppercase cursor-pointer"
        >
          LEARN MORE
        </a>
        <span className="w-[1px] h-4 sm:h-5 bg-zinc-300"></span>
        <a
          href="#careers"
          className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 hover:text-sky-600 transition-colors uppercase cursor-pointer"
        >
          CAREERS AT ALFA GULF
        </a>
      </div>
    </div>
  );
};

export default ImageTextReveal;

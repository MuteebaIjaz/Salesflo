import { useEffect, useRef, useState, useCallback } from 'react';

export interface UseScrollRevealOptions {
  /**
   * Viewport intersection threshold (0.0 to 1.0).
   * Default is 0.15 (triggers when ~15–20% of target enters viewport).
   */
  threshold?: number;
  /**
   * Root margin offset for intersection calculation.
   * Default is '0px 0px -40px 0px'.
   */
  rootMargin?: string;
  /**
   * Whether to run the animation only once (default: true).
   * When true, disconnects observer after the element is revealed.
   */
  once?: boolean;
  /**
   * Whether to trigger the reveal immediately upon mount (e.g. for hero section).
   * Default: false.
   */
  immediate?: boolean;
  /**
   * Optional callback when element intersects and reveals.
   */
  onReveal?: () => void;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    once = true,
    immediate = false,
    onReveal,
  } = options;

  const elementRef = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(immediate);
  const revealedRef = useRef(immediate);

  const markRevealed = useCallback(() => {
    if (revealedRef.current && once) return;
    revealedRef.current = true;
    setIsRevealed(true);
    if (elementRef.current) {
      elementRef.current.classList.add('is-revealed');
    }
    onReveal?.();
  }, [once, onReveal]);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // 1. Accessibility: Respect prefers-reduced-motion immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      node.classList.add('is-revealed');
      markRevealed();
      return;
    }

    // 2. Immediate mode (e.g. Hero section visible on initial page load)
    if (immediate) {
      const rafId = requestAnimationFrame(() => {
        node.classList.add('is-revealed');
        markRevealed();
      });
      return () => cancelAnimationFrame(rafId);
    }

    // 3. Graceful fallback if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      node.classList.add('is-revealed');
      markRevealed();
      return;
    }

    // 4. If already revealed once and once === true, keep revealed
    if (revealedRef.current && once) {
      node.classList.add('is-revealed');
      return;
    }

    // 5. Setup IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-revealed');
            markRevealed();
            if (once) {
              observer.unobserve(node);
              observer.disconnect();
            }
            break;
          } else if (!once) {
            node.classList.remove('is-revealed');
            revealedRef.current = false;
            setIsRevealed(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, immediate, markRevealed]);

  return { ref: elementRef, isRevealed };
}

export default useScrollReveal;

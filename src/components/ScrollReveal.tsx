import React, { createContext, useContext, forwardRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface ScrollRevealGroupContextValue {
  isGroupRevealed: boolean;
  baseStagger?: number;
}

const ScrollRevealGroupContext = createContext<ScrollRevealGroupContextValue | null>(null);

export interface ScrollRevealGroupProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  immediate?: boolean;
  stagger?: number; // default stagger delay per item in ms (e.g. 100ms)
  className?: string;
  children: React.ReactNode;
}

/**
 * ScrollRevealGroup observes a section or container element.
 * When the group enters viewport (~15-20%), all nested ScrollReveal items reveal
 * with their respective staggered delays.
 */
export const ScrollRevealGroup = forwardRef<HTMLElement, ScrollRevealGroupProps>(
  (
    {
      as: Component = 'div',
      threshold = 0.15,
      rootMargin = '0px 0px -40px 0px',
      once = true,
      immediate = false,
      stagger = 100,
      className = '',
      style,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const { ref: internalRef, isRevealed } = useScrollReveal<HTMLElement>({
      threshold,
      rootMargin,
      once,
      immediate,
    });

    const setRef = (node: HTMLElement | null) => {
      internalRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    };

    return (
      <ScrollRevealGroupContext.Provider
        value={{ isGroupRevealed: isRevealed, baseStagger: stagger }}
      >
        <Component
          ref={setRef}
          className={`${isRevealed ? 'is-revealed' : ''} ${className}`.trim()}
          style={style}
          {...rest}
        >
          {children}
        </Component>
      </ScrollRevealGroupContext.Provider>
    );
  }
);

ScrollRevealGroup.displayName = 'ScrollRevealGroup';

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: RevealVariant;
  /** Explicit delay in milliseconds */
  delay?: number;
  /** Stagger index (delay = index * stagger) */
  index?: number;
  /** Stagger increment in milliseconds (default: 100ms) */
  stagger?: number;
  /** Transition duration in milliseconds (default: 720ms) */
  duration?: number;
  /** Observer threshold (0 - 1). Default: 0.15 */
  threshold?: number;
  /** Observer root margin */
  rootMargin?: string;
  /** One-time reveal (default: true) */
  once?: boolean;
  /** Trigger immediately without waiting for scroll */
  immediate?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variantClassMap: Record<RevealVariant, string> = {
  'fade-up': 'reveal-fade-up',
  'fade-in': 'reveal-fade-in',
  'slide-left': 'reveal-slide-left',
  'slide-right': 'reveal-slide-right',
};

/**
 * Reusable ScrollReveal component for smooth, scroll-triggered section
 * and element transitions.
 */
export const ScrollReveal = forwardRef<HTMLElement, ScrollRevealProps>(
  (
    {
      as: Component = 'div',
      variant = 'fade-up',
      delay,
      index,
      stagger,
      duration = 720,
      threshold = 0.15,
      rootMargin = '0px 0px -40px 0px',
      once = true,
      immediate = false,
      className = '',
      style,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const groupContext = useContext(ScrollRevealGroupContext);

    // Calculate delay: either explicit delay, or index * stagger (from props or group context)
    const effectiveStagger = stagger ?? groupContext?.baseStagger ?? 100;
    const computedDelay =
      delay !== undefined
        ? delay
        : index !== undefined
        ? index * effectiveStagger
        : 0;

    // If inside a group, the group controls the intersection triggering
    const isStandalone = !groupContext;

    const { ref: internalRef, isRevealed: standaloneRevealed } = useScrollReveal<HTMLElement>({
      threshold,
      rootMargin,
      once,
      immediate,
    });

    const isRevealed = groupContext ? groupContext.isGroupRevealed : standaloneRevealed;

    const setRef = (node: HTMLElement | null) => {
      if (isStandalone) {
        internalRef.current = node;
      }
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    };

    const variantClass = variantClassMap[variant] || 'reveal-fade-up';

    const mergedStyle: React.CSSProperties = {
      ...style,
      // Pass CSS custom properties for performant CSS transition control
      ['--reveal-delay' as string]: `${computedDelay}ms`,
      ['--reveal-duration' as string]: `${duration}ms`,
    };

    return (
      <Component
        ref={setRef}
        className={`reveal-init ${variantClass} ${isRevealed ? 'is-revealed' : ''} ${className}`.trim()}
        style={mergedStyle}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;

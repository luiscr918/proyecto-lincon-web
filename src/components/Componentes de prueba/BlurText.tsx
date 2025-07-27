import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, type Transition, type Variants } from 'framer-motion';

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, number | string>;
    animationTo?: Record<string, number | string>[];
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
    stepDuration?: number;
}

const buildKeyframes = (
    from: Record<string, number | string>,
    steps: Record<string, number | string>[]
): Record<string, (number | string)[]> => {
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((s) => Object.keys(s)),
    ]);

    const keyframes: Record<string, (number | string)[]> = {};
    keys.forEach((k) => {
        keyframes[k] = [from[k], ...steps.map((s) => s[k])];
    });
    return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
    text,
    delay = 200,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = (t) => t,
    onAnimationComplete,
    stepDuration = 0.35,
}) => {
    const elements =
        animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current!);
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo(
        () =>
            direction === 'top'
                ? { filter: 'blur(10px)', opacity: 0, y: -50 }
                : { filter: 'blur(10px)', opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            {
                filter: 'blur(5px)',
                opacity: 0.5,
                y: direction === 'top' ? 5 : -5,
            },
            { filter: 'blur(0px)', opacity: 1, y: 0 },
        ],
        [direction]
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;

    const keyframes = buildKeyframes(fromSnapshot, toSnapshots);

    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({ length: stepCount }, (_, i) =>
        stepCount === 1 ? 0 : i / (stepCount - 1)
    );

    const variants: Variants = {
        hidden: fromSnapshot,
        visible: keyframes,
    };

    return (
        <p
            ref={ref}
            className={className}
            style={{ display: 'flex', flexWrap: 'wrap' }}
        >
            {elements.map((segment, index) => {
                const transition: Transition = {
                    duration: totalDuration,
                    times,
                    delay: (index * delay) / 1000,
                    ease: easing,
                };

                return (
                    <motion.span
                        key={index}
                        className="inline-block will-change-[transform,filter,opacity]"
                        variants={variants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={transition}
                        onAnimationComplete={
                            index === elements.length - 1 ? onAnimationComplete : undefined
                        }
                    >
                        {segment === ' ' ? '\u00A0' : segment}
                        {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                    </motion.span>
                );
            })}
        </p>
    );
};

export default BlurText;
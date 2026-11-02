import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Trailing lerp loop
    let animationFrame: number;
    let currX = position.x;
    let currY = position.y;

    const loop = () => {
      currX += (position.x - currX) * 0.18;
      currY += (position.y - currY) * 0.18;
      setTrailing({ x: currX, y: currY });
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    // Detect clickable elements for magnetic expansion
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision inner center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isMouseDown ? 0.7 : 1})`,
        }}
      />

      {/* Outer interactive tracking ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovering
            ? 'w-12 h-12 border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
            : 'w-7 h-7 border-white/30'
        }`}
        style={{
          transform: `translate3d(${trailing.x - (isHovering ? 24 : 14)}px, ${
            trailing.y - (isHovering ? 24 : 14)
          }px, 0) scale(${isMouseDown ? 0.85 : 1})`,
        }}
      />
    </>
  );
};

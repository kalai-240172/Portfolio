import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices that support hover and fine pointers
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny cyan follower dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '12px' : '6px',
          height: isPointer ? '12px' : '6px',
          backgroundColor: '#00f2fe',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #00f2fe, 0 0 20px #00f2fe',
        }}
      />
      {/* Outer subtle glow ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '44px' : '28px',
          height: isPointer ? '44px' : '28px',
          border: `1.5px solid ${isPointer ? 'rgba(0, 242, 254, 0.8)' : 'rgba(79, 172, 254, 0.35)'}`,
          transform: 'translate(-50%, -50%)',
          background: isPointer ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};


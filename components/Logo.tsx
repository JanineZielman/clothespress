"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only enable scroll effect on homepage
  const shouldEnableScroll = pathname === '/';

  useEffect(() => {
    // Mark as mounted
    setMounted(true);

    // Only handle scroll if effect is enabled
    if (shouldEnableScroll) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };

      // Check initial scroll position after mount
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [shouldEnableScroll]);

  // Determine position based on scroll state and whether effect is enabled
  const positionClass = shouldEnableScroll
    ? isScrolled
      ? 'top-0 left-1/2 -translate-x-1/2 w-42 h-24'
      : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-68 h-40 center-logo'
    : 'top-0 left-1/2 -translate-x-1/2 w-42 h-24';

  const colorClass = shouldEnableScroll && !isScrolled ? 'logo-white' : 'logo-black';

  const logoImage = (
    <img
      src="/clothespresslogo-General.svg"
      alt="Clothes Press"
      className="block h-full w-full object-contain"
    />
  );

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <a href="/" className={`main-logo fixed z-50 ${colorClass} ${positionClass} opacity-0`}>
        {logoImage}
      </a>
    );
  }

  return (
    <a href="/" className={`main-logo fixed z-50 transition-all duration-700 ${colorClass} ${positionClass}`}>
      {logoImage}
    </a>
  );
}
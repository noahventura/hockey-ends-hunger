import { useEffect, useRef } from 'react';

// sizes text so its longest line spans its container's content box exactly,
// at any width and again once the web font has loaded
export function useFitText({ max = Infinity } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    const fit = () => {
      const cs = getComputedStyle(parent);
      const room = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.fontSize = '100px';
      const size = Math.min(max, Math.floor((100 * room * 10) / el.scrollWidth) / 10);
      el.style.fontSize = `${size}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [max]);

  return ref;
}

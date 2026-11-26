import { useState } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from './useOverlay';

// open and close through a view transition when the browser has one,
// so the poster grows out of its thumbnail and shrinks back into it
export function useViewTransitionState(initial = false) {
  const [value, setValue] = useState(initial);
  const set = (v) => {
    if (document.startViewTransition && !prefersReducedMotion()) {
      document.startViewTransition(() => flushSync(() => setValue(v)));
    } else {
      setValue(v);
    }
  };
  return [value, set];
}

import { useCallback, useEffect, useRef, useState } from 'react';

function copyWithFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand?.('copy');
  document.body.removeChild(textarea);
  return copied;
}

export default function useClipboard(resetAfter = 2500) {
  const [status, setStatus] = useState('idle');
  const resetTimerRef = useRef(null);

  const copy = useCallback(async (text) => {
    window.clearTimeout(resetTimerRef.current);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (!copyWithFallback(text)) {
        throw new Error('Clipboard API is unavailable');
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }

    resetTimerRef.current = window.setTimeout(() => setStatus('idle'), resetAfter);
  }, [resetAfter]);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  return { copy, status };
}

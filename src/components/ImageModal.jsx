import React, { useCallback, useEffect, useRef } from 'react';
import Button from './Button';

const focusableSelector = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

export default function ImageModal({ images, selectedIndex, setSelectedIndex }) {
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const isOpen = selectedIndex !== null;
  const activeImage = isOpen ? images[selectedIndex] : null;

  const close = useCallback(() => setSelectedIndex(null), [setSelectedIndex]);
  const selectPrevious = useCallback(() => {
    setSelectedIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length, setSelectedIndex]);
  const selectNext = useCallback(() => {
    setSelectedIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length, setSelectedIndex]);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocusedRef.current = document.activeElement;
    const focusable = dialogRef.current?.querySelectorAll(focusableSelector);
    focusable?.[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        close();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        event.stopPropagation();
        selectPrevious();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        selectNext();
        return;
      }

      if (event.key !== 'Tab') return;

      const elements = Array.from(dialogRef.current?.querySelectorAll(focusableSelector) || []);
      if (!elements.length) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, close, selectNext, selectPrevious]);

  if (!isOpen || !activeImage) return null;

  return (
    <div className="image_modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) close();
    }}>
      <div
        ref={dialogRef}
        className="modal_contents_arrowWrap"
        role="dialog"
        aria-modal="true"
        aria-label={`${activeImage.label} 확대 보기`}
      >
        <div className="image_modal_content">
          <img src={activeImage.src} alt={`${activeImage.label} 확대 이미지`} decoding="async" />
          <Button className="btn_modalClose" onClick={close} aria-label="확대 이미지 닫기">
            ✕
          </Button>
        </div>

        <Button className="btn_prev" onClick={selectPrevious} aria-label="이전 작업 화면">
          이전으로
        </Button>
        <Button className="btn_next" onClick={selectNext} aria-label="다음 작업 화면">
          다음으로
        </Button>
      </div>
    </div>
  );
}

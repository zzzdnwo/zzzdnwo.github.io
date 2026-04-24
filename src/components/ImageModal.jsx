import React from 'react';
import Button from './Button';

export default function ImageModal({
  images,
  selectedIndex,
  setSelectedIndex,
}) {
  if (selectedIndex === null) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="image_modal"
      onClick={() => setSelectedIndex(null)}
    >
      <div
        className="modal_contents_arrowWrap"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="image_modal_content"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={images[selectedIndex]} alt="확대 이미지" />

          <Button
            className="btn_modalClose"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </Button>
        </div>

        <Button className="btn_prev" onClick={handlePrev}>
          이전으로
        </Button>

        <Button className="btn_next" onClick={handleNext}>
          다음으로
        </Button>
      </div>
    </div>
  );
}
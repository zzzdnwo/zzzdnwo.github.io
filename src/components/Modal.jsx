import React, { useRef, useEffect } from 'react';
import '../assets/scss/modal.scss';


export default function Modal({ isOpen, onClose, title, children }) {
const overlayRef = useRef(null);
const contentRef = useRef(null);


useEffect(() => {
function onKey(e) { if (e.key === 'Escape') onClose(); }


if (isOpen) {
document.addEventListener('keydown', onKey);
document.body.style.overflow = 'hidden';
if (contentRef.current) contentRef.current.focus();
}


return () => {
document.removeEventListener('keydown', onKey);
document.body.style.overflow = '';
};
}, [isOpen, onClose]);


if (!isOpen) return null;


return (
    <div
    ref={overlayRef}
    className="modal_overlay"
    onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
    role="dialog"
    aria-modal="true"
    aria-label={title}
    >
        <div className="modal_wrapper">
            <div ref={contentRef} tabIndex={-1} className="modal_content">
                <header className="modal_header">
                <h2>{title}</h2>                
                </header>
                <div className="modal_body">{children}</div>
            </div>
            <div className="modal_snb">
                <button className='btn_modalClose' onClick={onClose} aria-label="닫기">✕</button>
            </div>
        </div>        
    </div>
);
}
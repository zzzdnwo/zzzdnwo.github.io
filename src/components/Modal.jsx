import React, { useRef, useEffect } from 'react';
import '../assets/scss/modal.scss';
import Button from '../components/Button';

export default function Modal({ isOpen, onClose, children, project }) {
    const overlayRef = useRef(null);
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const previouslyFocusedRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        previouslyFocusedRef.current = document.activeElement;

        function onKey(e) {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key !== 'Tab') return;

            const focusable = wrapperRef.current?.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }

        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        contentRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
            previouslyFocusedRef.current?.focus?.();
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
        aria-labelledby="project-modal-title"
        >
            <div 
                ref={wrapperRef}
                className="modal_wrapper"
                onMouseDown={(e) => { if (e.target === wrapperRef.current) onClose(); }}
            >
                <div 
                    className="modal_content"
                    ref={contentRef}
                    tabIndex={-1}
                >
                    <header className={`detail_header ${project?.file || 'default'}`}>
                        <div className="project_tag">
                            {project?.tag?.map((tag, idx) => (
                                <span key={idx} className="tag_item">
                                    {tag}
                                </span>
                            ))}                    
                        </div>                    
                        <h1 id="project-modal-title" className="project_title">{project?.title}</h1>
                        <div className="project_info">
                            <p className="info_period">{project?.period}</p>
                            <p className="info_divide">|</p>
                            <p className="info_member">{project?.member}</p>
                        </div>               
                    </header>                          
                    <div className="modal_body">{children}</div>
                </div>
                <div className="modal_snb">
                    <>
                        <Button 
                            className='btn_modalClose' 
                            onClick={onClose} 
                        >
                            모달 닫기
                        </Button>
                        {project?.goUrl && (
                            <div className="btnWrap">
                                <Button 
                                    className='btn_modalGo' 
                                    onClick={onClose} 
                                    href={project?.goUrl} target="_blank"
                                >                                    
                                </Button>
                                <p className="btn_text">링크 이동</p>
                            </div>                            
                        )}
                    </>                    
                </div>
            </div>        
        </div>
    );
}

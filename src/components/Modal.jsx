import React, { useRef, useEffect } from 'react';
import '../assets/scss/modal.scss';
import Button from '../components/Button';

export default function Modal({ isOpen, onClose, children, project }) {
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
        aria-label={project?.title}
        >
            <div className="modal_wrapper">
                <div ref={contentRef} tabIndex={-1} className="modal_content">
                    <header className={`detail_header ${project?.file || 'default'}`}>
                        <div className="project_tag">
                            {project.tag?.map((tag, idx) => (
                                <span key={idx} className="tag_item">
                                    {tag}
                                </span>
                            ))}                    
                        </div>                    
                        <h1 className="project_title">{project?.title}</h1>
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
                            ✕
                        </Button>
                        {project?.goUrl && (
                            <Button 
                                className='btn_modalClose' 
                                onClick={onClose} 
                                href={project?.goUrl} target="_blank"
                            >
                                ✕
                            </Button>
                        )}
                    </>                    
                </div>
            </div>        
        </div>
    );
}
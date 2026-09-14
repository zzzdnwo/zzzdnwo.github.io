import Button from './Button';

const copyMessages = {
  success: '메일 주소를 복사했습니다.',
  error: '메일 주소를 복사하지 못했습니다. 직접 복사해 주세요.',
};

export default function ContactSection({ contactRef, copyStatus, onCopy }) {
  return (
    <section className="contact" ref={contactRef}>
      <div className="contact_contents">
        <h3>Contact</h3>
        <div className="contact_info">
          <p>+82 10-4027-1487</p>
          <Button className="mail" onClick={onCopy} aria-describedby="copy-feedback">
            seosson@naver.com
            <span className="copyBtn" aria-hidden="true">메일 복사</span>
          </Button>
          <span id="copy-feedback" className="copy_feedback" role="status" aria-live="polite">
            {copyMessages[copyStatus] || ''}
          </span>
        </div>
        <h5 className="copyright">@Copyright 2026. shinwoojae All rights reserved.</h5>
      </div>
    </section>
  );
}

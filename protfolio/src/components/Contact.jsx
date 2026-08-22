import React, { useState } from 'react';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 shrink-0 stroke-linecap-round stroke-linejoin-round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 shrink-0 stroke-linecap-round stroke-linejoin-round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2.5 shrink-0 stroke-linecap-round stroke-linejoin-round text-emerald-700">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 shrink-0 stroke-linecap-round stroke-linejoin-round opacity-60 group-hover:opacity-100 transition-opacity">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    copyToClipboard('eyerusalem.tsegaye.38@gmail.com', 'email');
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    copyToClipboard('+251904137138', 'phone');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link to automatically launch user's mail app prefilled to user's email
    const mailtoLink = `mailto:eyerusalem.tsegaye.38@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="w-full max-w-2xl px-2 md:px-6 py-1 normal-case tracking-normal transition-all duration-500">
      
      {/* Contact Information Cards with Copy on Click */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        
        {/* Email Copy Card */}
        <button
          type="button"
          onClick={handleCopyEmail}
          title="Click to copy email address"
          className="flex items-center justify-between gap-3 bg-[#ebdcd0] hover:bg-[#e4d3c5] p-3.5 rounded-2xl border border-[#61263d]/15 text-[#61263d] transition-all duration-300 shadow-sm group text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#61263d]/40"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-[#61263d]/10 group-hover:bg-[#61263d] group-hover:text-[#f5f0e6] flex items-center justify-center shrink-0 transition-colors">
              <MailIcon />
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#61263d]/70">
                <span>Email</span>
                {copiedType === 'email' && (
                  <span className="text-emerald-700 font-extrabold flex items-center gap-0.5 animate-pulse">
                    • Copied! <CheckIcon />
                  </span>
                )}
              </div>
              <div className="text-xs md:text-sm font-semibold truncate text-[#2b2024]">
                eyerusalem.tsegaye.38@gmail.com
              </div>
            </div>
          </div>
          <div className="shrink-0 text-[#61263d]">
            {copiedType === 'email' ? <CheckIcon /> : <CopyIcon />}
          </div>
        </button>

        {/* Phone Copy Card */}
        <button
          type="button"
          onClick={handleCopyPhone}
          title="Click to copy phone number"
          className="flex items-center justify-between gap-3 bg-[#ebdcd0] hover:bg-[#e4d3c5] p-3.5 rounded-2xl border border-[#61263d]/15 text-[#61263d] transition-all duration-300 shadow-sm group text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#61263d]/40"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-[#61263d]/10 group-hover:bg-[#61263d] group-hover:text-[#f5f0e6] flex items-center justify-center shrink-0 transition-colors">
              <PhoneIcon />
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#61263d]/70">
                <span>Phone</span>
                {copiedType === 'phone' && (
                  <span className="text-emerald-700 font-extrabold flex items-center gap-0.5 animate-pulse">
                    • Copied! <CheckIcon />
                  </span>
                )}
              </div>
              <div className="text-xs md:text-sm font-semibold truncate text-[#2b2024]">
                +251 904 137 138
              </div>
            </div>
          </div>
          <div className="shrink-0 text-[#61263d]">
            {copiedType === 'phone' ? <CheckIcon /> : <CopyIcon />}
          </div>
        </button>
      </div>

      {/* Copied Toast Banner */}
      {copiedType && (
        <div className="mb-4 p-2.5 bg-emerald-800 text-[#f5f0e6] text-xs font-semibold rounded-xl text-center shadow-md animate-fade-in flex items-center justify-center gap-2">
          <CheckIcon />
          <span>
            {copiedType === 'email' ? 'Email address' : 'Phone number'} copied to clipboard!
          </span>
        </div>
      )}

      {/* Success Notification Banner */}
      {submitted && (
        <div className="mb-4 p-3.5 bg-[#61263d] text-[#f5f0e6] text-xs md:text-sm font-semibold rounded-xl text-center shadow-md animate-fade-in">
          ✓ Your message draft has been prepared! Opening your email app to send...
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        <div>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#ebdcd0] border border-[#61263d]/20 rounded-xl p-3.5 text-sm text-[#2b2024] placeholder-[#4a3a3f]/60 focus:outline-none focus:border-[#61263d] focus:ring-1 focus:ring-[#61263d] transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#ebdcd0] border border-[#61263d]/20 rounded-xl p-3.5 text-sm text-[#2b2024] placeholder-[#4a3a3f]/60 focus:outline-none focus:border-[#61263d] focus:ring-1 focus:ring-[#61263d] transition-all"
          />
        </div>
        <div>
          <textarea
            required
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#ebdcd0] border border-[#61263d]/20 rounded-xl p-3.5 text-sm text-[#2b2024] placeholder-[#4a3a3f]/60 focus:outline-none focus:border-[#61263d] focus:ring-1 focus:ring-[#61263d] transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-[#61263d] text-[#f5f0e6] font-bold rounded-xl shadow-md hover:bg-[#4a1c2e] active:scale-[0.99] transition-all uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <MailIcon />
          Send Message
        </button>
      </form>
    </div>
  );
}

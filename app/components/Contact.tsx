"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", budget: "", phone: "",
    website: "", projectType: "", timeline: "", message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap');

        .contact-root {
          position: relative;
          z-index: 10;
          background-color: #f2e6d2;
          font-family: 'DM Sans', sans-serif;
          color: #333333;
          width: 100%;
        }

        .contact-container {
          display: flex;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 100vh;
        }

        /* ── LEFT COLUMN ── */
        .contact-left {
          flex: 1;
          padding: 4rem 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .left-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 3.5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2rem;
          max-width: 550px;
          color: #1a1a1a;
        }

        .info-block {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .info-block:hover { transform: translateX(8px); }

        .info-icon {
          width: 36px;
          height: 36px;
          background: #EAE4D8;
          color: #6B7BFF;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .info-label { font-weight: 700; font-size: 0.9rem; margin-bottom: 0.1rem; display: block; }
        .info-text { font-size: 0.9rem; color: #666; line-height: 1.4; }

        /* ── RIGHT COLUMN ── */
        .contact-right {
          flex: 1;
          padding: 4rem 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f7f2e8;
        }

        .right-heading {
          font-size: clamp(1.6rem, 3vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field.full-width { grid-column: span 2; }

        .field label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #777;
          padding-left: 4px;
        }

        .field label span { color: #6B7BFF; }

        .field input,
        .field textarea,
        .field select {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid transparent;
          border-radius: 12px;
          background-color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          outline: none;
          box-sizing: border-box;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          color: #333;
        }

        .field input:focus,
        .field textarea:focus,
        .field select:focus {
          border-color: #6B7BFF;
          box-shadow: 0 0 0 4px rgba(107, 123, 255, 0.1);
        }

        .field textarea { resize: none; height: 100px; }

        .char-count {
          position: absolute;
          bottom: 12px;
          right: 15px;
          font-size: 0.7rem;
          color: #aaa;
        }

        .btn-send {
          align-self: flex-end;
          background: #6B7BFF;
          color: #fff;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          border: none;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 1.2rem;
        }

        .btn-send:hover {
          background: #5A6BFF;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(107, 123, 255, 0.3);
        }

        .btn-send.success { background: #2ecc71; }
        .arrow-icon { transition: transform 0.3s ease; }
        .btn-send:hover .arrow-icon { transform: translateX(5px); }

        /* ── LARGE SCREENS ── */
        @media (max-width: 1100px) {
          .contact-left,
          .contact-right { padding: 3rem 4%; }
        }

        /* ── TABLETS (stack columns) ── */
        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
          }
          .contact-left {
            padding: 3rem 6%;
            align-items: center;
            text-align: center;
          }
          .left-heading {
            text-align: center;
            margin-bottom: 1.75rem;
          }
          .info-block {
            justify-content: flex-start;
            text-align: left;
          }
          .info-blocks-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem 2rem;
            justify-content: center;
          }
          .info-block {
            margin-bottom: 0;
          }
          .contact-right {
            padding: 2.5rem 6%;
          }
          .right-heading { text-align: center; }
          .btn-send { align-self: center; }
        }

        /* ── SMALL PHONES ── */
        @media (max-width: 600px) {
          .contact-left {
            padding: 2rem 1.25rem 1.5rem;
          }
          .contact-right {
            padding: 1.5rem 1.25rem 2.5rem;
          }
          .left-heading {
            font-size: 1.65rem;
            margin-bottom: 1.25rem;
          }
          .right-heading {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .info-blocks-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            width: 100%;
          }
          .info-block {
            width: 100%;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .field.full-width {
            grid-column: span 1;
          }
          .field input,
          .field textarea,
          .field select {
            font-size: 1rem; /* Prevents iOS zoom on focus */
            padding: 0.75rem 0.9rem;
          }
          .btn-send {
            width: 100%;
            justify-content: center;
            padding: 0.9rem 1.5rem;
            font-size: 1rem;
          }
        }

        /* ── VERY SMALL PHONES (≤380px) ── */
        @media (max-width: 380px) {
          .contact-left,
          .contact-right {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .left-heading {
            font-size: 1.45rem;
          }
          .info-label { font-size: 0.85rem; }
          .info-text { font-size: 0.82rem; }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-container">
          <div className="contact-left">
            <h1 className="left-heading">
              Let&rsquo;s build an awesome project together!
            </h1>
            <div className="info-blocks-wrapper">
              <div className="info-block">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <span className="info-label">Call us</span>
                  <span className="info-text">+1 (234) 999 888 7<br />+1 (987) 111 222 3</span>
                </div>
              </div>
              <div className="info-block">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <span className="info-label">Find us</span>
                  <span className="info-text">4140 Parker Rd. New York,<br />New York 31134</span>
                </div>
              </div>
              <div className="info-block">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <span className="info-label">Visit us</span>
                  <span className="info-text">Monday – Friday<br />9AM – 5PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2 className="right-heading">Get in touch.</h2>

            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="field">
                <label>Your name <span>*</span></label>
                <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Your email <span>*</span></label>
                <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Your company</label>
                <input type="text" name="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Budget Range</label>
                <input type="text" name="budget" placeholder="In USD" value={formData.budget} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 (000) 000-0000" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Website URL</label>
                <input type="url" name="website" placeholder="www.company.com" value={formData.website} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option value="branding">Branding</option>
                  <option value="web">Web Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label>Timeline</label>
                <select name="timeline" value={formData.timeline} onChange={handleChange}>
                  <option value="">When do you start?</option>
                  <option value="immediate">Immediately</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">3+ Months</option>
                </select>
              </div>
              <div className="field full-width">
                <label>Message</label>
                <div style={{ position: "relative" }}>
                  <textarea name="message" placeholder="Type here..." value={formData.message} onChange={handleChange} />
                  <span className="char-count">{formData.message.length}/250</span>
                </div>
              </div>
              <button className={`btn-send ${isSubmitted ? "success" : ""}`} onClick={handleSubmit}>
                {isSubmitted ? "Message Sent!" : "Send Message"}
                <span className="arrow-icon">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
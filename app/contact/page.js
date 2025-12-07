'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation, Footer, colors } from '../components';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('RediHome Inquiry');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sales@redihome.io?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="headline-font" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: colors.text }}>Get In <span style={{ color: colors.primary }}>Touch</span></h1>
          <p style={{ fontSize: 20, color: colors.textLight, lineHeight: 1.7 }}>Questions about RediHome? Ready to start your journey? We'd love to hear from you.</p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="grid-2-col" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          
          {/* Contact Form */}
          <div>
            <h2 className="headline-font" style={{ fontSize: 28, color: colors.text, marginBottom: 24 }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: colors.text, marginBottom: 8 }}>Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: `1px solid ${colors.backgroundAlt}`, background: colors.background, fontSize: 16 }}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: colors.text, marginBottom: 8 }}>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: `1px solid ${colors.backgroundAlt}`, background: colors.background, fontSize: 16 }}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: colors.text, marginBottom: 8 }}>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: `1px solid ${colors.backgroundAlt}`, background: colors.background, fontSize: 16 }}
                  placeholder="(205) 555-1234"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: colors.text, marginBottom: 8 }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: `1px solid ${colors.backgroundAlt}`, background: colors.background, fontSize: 16, resize: 'vertical' }}
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              <button type="submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '16px 32px', fontSize: 16 }}>
                Send Message →
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="headline-font" style={{ fontSize: 28, color: colors.text, marginBottom: 24 }}>Contact Info</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              <div className="hover-lift" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: colors.background, padding: 24, borderRadius: 16 }}>
                <div style={{ width: 48, height: 48, background: `${colors.primary}15`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>📧</div>
                <div>
                  <div style={{ fontSize: 14, color: colors.textLight, marginBottom: 4 }}>Email</div>
                  <a href="mailto:sales@redihome.io" style={{ fontSize: 18, fontWeight: 600, color: colors.primary }}>sales@redihome.io</a>
                </div>
              </div>
              
              <div className="hover-lift" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: colors.background, padding: 24, borderRadius: 16 }}>
                <div style={{ width: 48, height: 48, background: `${colors.primary}15`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>📱</div>
                <div>
                  <div style={{ fontSize: 14, color: colors.textLight, marginBottom: 4 }}>Phone</div>
                  <a href="tel:205-612-5445" style={{ fontSize: 18, fontWeight: 600, color: colors.primary }}>205-612-5445</a>
                </div>
              </div>
              
              <div className="hover-lift" style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: colors.background, padding: 24, borderRadius: 16 }}>
                <div style={{ width: 48, height: 48, background: `${colors.primary}15`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>📍</div>
                <div>
                  <div style={{ fontSize: 14, color: colors.textLight, marginBottom: 4 }}>Location</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: colors.text }}>Birmingham, Alabama</div>
                </div>
              </div>
            </div>
            
            {/* Quick FAQs */}
            <div style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, padding: 28, borderRadius: 20, color: 'white' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Quick Answers</h3>
              <div style={{ fontSize: 14, lineHeight: 1.8, opacity: 0.9 }}>
                <p style={{ marginBottom: 12 }}><strong>Ready to see lots?</strong><br />Visit <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>homepoint.co/redihome</a></p>
                <p style={{ marginBottom: 12 }}><strong>What's the minimum credit score?</strong><br />620+ to qualify for financing</p>
                <p><strong>How long does it take?</strong><br />8 weeks from approval to keys</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section style={{ padding: '80px 24px', background: colors.backgroundAlt, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 18, color: colors.textLight, marginBottom: 32 }}>Skip the form—go design your home right now.</p>
          <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ fontSize: 16 }}>Find a Lot Near You →</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

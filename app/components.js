'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const colors = {
  primary: '#4A5FA8',
  primaryDark: '#3A4A8A',
  primaryLight: '#5A6FB8',
  accent: '#E09145',
  accentDark: '#C87D35',
  accentLight: '#F0A155',
  background: '#F8F9FC',
  backgroundAlt: '#EEF1F8',
  text: '#1a1a1a',
  textLight: '#555',
};

export function Logo({ size = 44 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M50 15L10 45V48H18V85H42V60H58V85H82V48H90V45L50 15Z" stroke={colors.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M42 85V60H58V85" stroke={colors.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <span style={{ fontSize: size * 0.55, fontWeight: 500, letterSpacing: '-0.5px' }}>
        <span style={{ color: colors.primary }}>Redi</span>
        <span style={{ color: colors.accent }}>Home</span>
      </span>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Homes', href: '/homes' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Financing', href: '/financing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '16px 24px',
        background: isScrolled ? 'rgba(248, 249, 252, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid rgba(74, 95, 168, 0.1)' : 'none'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/"><Logo /></Link>
          <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{ color: colors.text, textDecoration: 'none', fontSize: 15, fontWeight: 500, opacity: 0.8 }}>{link.label}</Link>
            ))}
            <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ padding: '12px 24px', fontSize: 14 }}>Find a Lot</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
            <span style={{ width: 24, height: 2, background: colors.text, borderRadius: 2 }} />
            <span style={{ width: 24, height: 2, background: colors.text, borderRadius: 2 }} />
            <span style={{ width: 24, height: 2, background: colors.text, borderRadius: 2 }} />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(248, 249, 252, 0.98)', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ color: colors.text, textDecoration: 'none', fontSize: 24, fontWeight: 500 }}>{link.label}</Link>
          ))}
          <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ marginTop: 16 }}>Find a Lot</a>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer style={{ padding: '60px 24px 48px', background: colors.primaryDark, color: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ marginBottom: 16 }}><Logo size={36} /></div>
            <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7, maxWidth: 280 }}>Building affordable homeownership for Birmingham's working families. Built Better. Built Faster. Built for You.</p>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 4 }}><a href="mailto:sales@redihome.io" style={{ color: 'white' }}>sales@redihome.io</a></div>
              <div style={{ fontSize: 14, opacity: 0.9 }}><a href="tel:205-612-5445" style={{ color: 'white' }}>205-612-5445</a></div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Company</div>
            <Link href="/about" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>About Us</Link>
            <Link href="/about" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Our Mission</Link>
            <Link href="/contact" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Contact</Link>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Resources</div>
            <Link href="/homes" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Our Homes</Link>
            <Link href="/how-it-works" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>How It Works</Link>
            <Link href="/financing" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Financing</Link>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Get Started</div>
            <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Find a Lot</a>
            <Link href="/contact" style={{ display: 'block', color: 'white', opacity: 0.65, fontSize: 14, marginBottom: 10 }}>Schedule a Call</Link>
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 13, opacity: 0.5 }}>© 2025 RediHome Corporation. All rights reserved.</div>
          <div style={{ fontSize: 13, opacity: 0.7 }}>Birmingham, Alabama</div>
        </div>
      </div>
    </footer>
  );
}

export function CTASection() {
  return (
    <section style={{ padding: '100px 24px', background: colors.primary, color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: 400, height: 400, background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 60%)`, borderRadius: '50%' }} />
      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
        <h2 className="headline-font" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: 20 }}>Ready to See What's Possible?</h2>
        <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>Find a lot near you, scan the QR code, and design your future home. No pressure, no salespeople—just you, exploring what homeownership could look like.</p>
        <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" style={{ background: colors.accent, color: 'white', padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: `0 10px 30px ${colors.accent}50`, textDecoration: 'none' }}>Find a Lot Near You →</a>
          <Link href="/contact" style={{ background: 'transparent', color: 'white', padding: '16px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

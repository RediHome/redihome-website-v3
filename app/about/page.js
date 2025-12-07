'use client';

import Link from 'next/link';
import { Navigation, Footer, CTASection, colors } from '../components';

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="headline-font" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: colors.text }}>About <span style={{ color: colors.primary }}>RediHome</span></h1>
          <p style={{ fontSize: 20, color: colors.textLight, lineHeight: 1.7 }}>We're on a mission to make homeownership accessible for Birmingham's working families—without subsidies, without gimmicks, just better building.</p>
        </div>
      </section>
      
      {/* Founder Story */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 100, height: 100, background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>👤</div>
            <h2 className="headline-font" style={{ fontSize: 32, color: colors.text, marginBottom: 8 }}>The Founder's Story</h2>
            <p style={{ color: colors.accent, fontWeight: 600 }}>5 Years of Research. One Clear Mission.</p>
          </div>
          
          <div style={{ fontSize: 17, color: colors.textLight, lineHeight: 1.9 }}>
            <p style={{ marginBottom: 24 }}>After five years researching housing construction methods, financing models, and what actually makes homeownership accessible, I kept coming back to the same conclusion: the problem isn't that affordable homes can't be built profitably. The problem is that no one's doing it right.</p>
            <p style={{ marginBottom: 24 }}>Most "affordable housing" relies on subsidies, tax credits, or cutting corners. Families get homes that cost less upfront but drain them with high energy bills, constant repairs, and builder-grade finishes that feel institutional rather than personal.</p>
            <p style={{ marginBottom: 24 }}>RediHome takes a different approach. We've built a system—from lot preparation to construction to financing—that delivers genuinely quality homes at prices working families can afford. No subsidies required. No charity. Just innovation applied to an industry that's been doing things the same way for decades.</p>
            <p>When a teacher or nurse or tradesperson walks into a RediHome, I want them to feel like they got the same quality as someone who paid twice as much. Because they did.</p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section style={{ padding: '80px 24px', background: colors.background }}>
        <div className="grid-2-col" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div className="hover-lift" style={{ background: 'white', padding: 40, borderRadius: 20, boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
            <div style={{ width: 56, height: 56, background: `${colors.primary}15`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20 }}>🎯</div>
            <h3 className="headline-font" style={{ fontSize: 24, color: colors.primary, marginBottom: 16 }}>Our Mission</h3>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.7 }}>To make homeownership accessible for working families through innovation in construction, financing, and customer experience—proving that quality and affordability aren't mutually exclusive.</p>
          </div>
          <div className="hover-lift" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, padding: 40, borderRadius: 20, color: 'white' }}>
            <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20 }}>🔭</div>
            <h3 className="headline-font" style={{ fontSize: 24, marginBottom: 16 }}>Our Vision</h3>
            <p style={{ fontSize: 16, opacity: 0.9, lineHeight: 1.7 }}>To transform Birmingham's rental-heavy neighborhoods into homeownership communities—shifting from 80% renters to 80% owners, one family at a time.</p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text }}>What We Believe</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { icon: '🏠', title: 'Owner-Occupants Only', desc: "We sell exclusively to families who will live in their homes. No investors, no flippers, no speculation." },
              { icon: '🏗️', title: 'Quality Over Shortcuts', desc: "2x6 framing, spray foam insulation, air-tight construction. We build homes we'd want to live in." },
              { icon: '🤝', title: 'Dignity, Not Charity', desc: "We're not a nonprofit. We built a profitable model that treats working families as customers, not beneficiaries." },
              { icon: '📍', title: 'Infill, Not Sprawl', desc: "We develop empty lots in established neighborhoods, strengthening communities rather than building at the edge of town." },
              { icon: '💰', title: 'Transparent Pricing', desc: "No hidden fees, no surprises. What you see is what you pay." },
              { icon: '📈', title: 'Community Wealth', desc: "Every home we sell is an opportunity for a family to build generational wealth through homeownership." }
            ].map(value => (
              <div key={value.title} className="hover-lift" style={{ background: colors.background, padding: 28, borderRadius: 16 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{value.icon}</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 10 }}>{value.title}</h4>
                <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How We're Different */}
      <section style={{ padding: '80px 24px', background: colors.backgroundAlt }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 16 }}>The RediHome Approach</h2>
            <p style={{ fontSize: 18, color: colors.textLight }}>What makes us different from traditional builders</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { title: 'Presale Model', desc: "You design your home before we build it. No spec homes sitting empty. Your deposit secures your specific home on your specific lot." },
              { title: 'Strategic Partnerships', desc: "Our banking partner's 0% down, no PMI program removes the biggest barrier to homeownership. Our supply chain partnerships keep costs low without sacrificing quality." },
              { title: 'Standardized Design, Personal Choice', desc: "We offer a curated set of floor plans with 20+ customization options. You get choice without the chaos of full custom building." },
              { title: 'Infill Development', desc: "We purchase clusters of lots in established neighborhoods, prepare them in advance, and build homes that fit the community." },
              { title: 'Vertical Integration', desc: "From lot acquisition to closing, we control the process. That means faster timelines, better quality control, and a smoother experience for you." }
            ].map((item, idx) => (
              <div key={item.title} className="hover-lift" style={{ background: 'white', padding: 28, borderRadius: 16, display: 'flex', gap: 20, alignItems: 'flex-start', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <div style={{ width: 44, height: 44, background: `${colors.primary}12`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: colors.primary, flexShrink: 0 }}>{idx + 1}</div>
                <div>
                  <h4 style={{ fontSize: 18, fontWeight: 600, color: colors.text, marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navigation, Footer, CTASection, colors } from './components';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { num: '01', title: 'Find Your Lot', desc: 'Scan the QR code on any prepared lot in Birmingham', icon: '📍' },
    { num: '02', title: 'Design Your Home', desc: 'Customize your home with 20+ design options', icon: '🏠' },
    { num: '03', title: 'Get Qualified', desc: 'Quick questions connect you with our lending partner', icon: '✓' },
    { num: '04', title: 'Secure Your Spot', desc: '$500 refundable deposit holds your home', icon: '🔒' },
    { num: '05', title: 'Get Your Keys', desc: '8 weeks later, move into your new home', icon: '🔑' },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh', overflowX: 'hidden' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)` }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: 300, height: 300, background: `radial-gradient(circle, ${colors.accent}15 0%, transparent 70%)`, borderRadius: '50%' }} />
        
        <div className="grid-2-col" style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="animate-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${colors.accent}18`, padding: '8px 16px', borderRadius: 100, marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, background: colors.accent, borderRadius: '50%' }} />
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.accentDark }}>Now Building in Birmingham</span>
            </div>
            
            <h1 className="headline-font animate-in animate-delay-1" style={{ fontSize: 'clamp(42px, 5vw, 64px)', lineHeight: 1.1, fontWeight: 600, color: colors.text, marginBottom: 24 }}>
              Built Better.<br />Built Faster.<br /><span style={{ color: colors.primary }}>Built for You.</span>
            </h1>
            
            <p className="animate-in animate-delay-2" style={{ fontSize: 18, lineHeight: 1.7, color: colors.textLight, marginBottom: 32, maxWidth: 480 }}>
              Quality homes for Birmingham's working families. 0% down, no PMI, and keys in 8 weeks. Find a lot, design your home, and move in—it's that simple.
            </p>
            
            <div className="animate-in animate-delay-3 cta-buttons" style={{ display: 'flex', gap: 16, marginBottom: 48 }}>
              <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent">Find a Lot Near You <span>→</span></a>
              <Link href="/how-it-works" className="btn-secondary">See How It Works</Link>
            </div>
            
            <div className="animate-in animate-delay-4 stats-row" style={{ display: 'flex', gap: 40 }}>
              {[{ value: '$240K', label: 'Starting Price' }, { value: '0%', label: 'Down Payment' }, { value: '8 Weeks', label: 'To Move In' }].map(stat => (
                <div key={stat.label}>
                  <div className="headline-font" style={{ fontSize: 32, fontWeight: 700, color: colors.primary }}>{stat.value}</div>
                  <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div className="float" style={{ background: `linear-gradient(145deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, borderRadius: 24, padding: 32, color: 'white', position: 'relative', overflow: 'hidden', boxShadow: `0 30px 60px ${colors.primary}40` }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '2px dashed rgba(255,255,255,0.3)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 64, marginBottom: 8 }}>🏡</div>
                  <div style={{ opacity: 0.8, fontSize: 14 }}>Your Future Home Preview</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{ opacity: 0.7, fontSize: 13, marginBottom: 4 }}>The Magnolia</div>
                  <div style={{ fontSize: 24, fontWeight: 600 }}>1,472 sq ft • 3 BD / 2 BA</div>
                </div>
                <Link href="/homes" style={{ background: colors.accent, color: 'white', padding: '10px 18px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>View Homes →</Link>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'white', padding: 16, borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 56, height: 56, background: `${colors.accent}15`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📱</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>Scan to Start</div>
                <div style={{ fontSize: 12, color: '#888' }}>QR on every lot</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Build For */}
      <section style={{ padding: '100px 24px', background: colors.primary, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 16 }}>Homes for the People Who Power Birmingham</h2>
            <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: '0 auto' }}>We build for working families earning around $65,000 a year. The people who deserve to own, not rent.</p>
          </div>
          
          <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[{ icon: '👩‍🏫', title: 'Teachers', desc: 'Shaping the next generation' }, { icon: '👨‍⚕️', title: 'Nurses', desc: 'Caring for our community' }, { icon: '👷', title: 'Tradespeople', desc: 'Building our city' }, { icon: '👨‍👩‍👧‍👦', title: 'Working Families', desc: 'Growing roots here' }].map(person => (
              <div key={person.title} className="hover-lift" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: 28, borderRadius: 16, textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: 44, marginBottom: 14 }}>{person.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{person.title}</div>
                <div style={{ fontSize: 14, opacity: 0.75 }}>{person.desc}</div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: 48, padding: 24, background: `${colors.accent}25`, borderRadius: 14, border: `1px solid ${colors.accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 28 }}>🚫</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 17, fontWeight: 600 }}>No Investors. No Flippers. No Speculation.</div>
              <div style={{ fontSize: 14, opacity: 0.85, marginTop: 4 }}>We sell exclusively to owner-occupants. Building community wealth, one family at a time.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section style={{ padding: '100px 24px', background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${colors.accent}18`, padding: '8px 16px', borderRadius: 100, marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.accentDark }}>Simple Process</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text, marginBottom: 16 }}>From QR Scan to Keys in Hand</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 600, margin: '0 auto' }}>We've eliminated the complexity. See a lot, design your home, move in 8 weeks later.</p>
          </div>
          
          <div className="steps-grid" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {steps.map((step, idx) => (
              <div key={step.num} className="hover-lift" onClick={() => setActiveStep(idx)} style={{ flex: '1 1 180px', padding: 20, borderRadius: 16, cursor: 'pointer', transition: 'all 0.4s ease', background: idx === activeStep ? colors.primary : 'white', color: idx === activeStep ? 'white' : colors.text, boxShadow: idx === activeStep ? `0 20px 40px ${colors.primary}30` : '0 4px 20px rgba(0,0,0,0.05)', border: idx === activeStep ? 'none' : '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: idx === activeStep ? 'rgba(255,255,255,0.2)' : `${colors.primary}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 12 }}>{step.icon}</div>
                <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 6, fontWeight: 600 }}>{step.num}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontSize: 13, opacity: 0.75, lineHeight: 1.4 }}>{step.desc}</div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/how-it-works" className="btn-secondary">Learn More About Our Process →</Link>
          </div>
        </div>
      </section>
      
      {/* 3 Pillars */}
      <section style={{ padding: '100px 24px', background: `linear-gradient(180deg, ${colors.backgroundAlt} 0%, ${colors.background} 100%)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text }}>The RediHome Difference</h2>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Built Better', icon: '🏗️', color: colors.primary, points: ['2x6 framing, not builder-grade 2x4', 'Air-tight construction', 'Closed-cell spray foam insulation', 'Low energy bills'] },
              { title: 'Built Faster', icon: '⚡', color: colors.accent, points: ['Lots already prepared', 'Permits done in advance', '8 weeks from contract to keys', 'Move in while others wait'] },
              { title: 'Built for You', icon: '❤️', color: colors.primaryLight, points: ['Multiple floor plans', '20+ customizations', 'Easy design process', 'Personal, not cookie-cutter'] }
            ].map(pillar => (
              <div key={pillar.title} className="hover-lift" style={{ background: 'white', borderRadius: 20, padding: 32, boxShadow: '0 4px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${pillar.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20 }}>{pillar.icon}</div>
                <h3 className="headline-font" style={{ fontSize: 24, color: pillar.color, marginBottom: 16 }}>{pillar.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {pillar.points.map(point => (
                    <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, fontSize: 14, color: colors.textLight }}>
                      <span style={{ color: pillar.color, fontWeight: 700 }}>✓</span>{point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Financing Section */}
      <section style={{ padding: '100px 24px', background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 50%, ${colors.primaryLight} 100%)`, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: '-10%', width: 600, height: 600, background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 60%)`, borderRadius: '50%', transform: 'translateY(-50%)' }} />
        
        <div className="grid-2-col" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: 100, marginBottom: 20 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>Financing Partnership</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 20 }}>Financing That Actually Makes Sense</h2>
            <p style={{ fontSize: 17, opacity: 0.9, lineHeight: 1.7, marginBottom: 28 }}>Through our banking partner's Right@Home program, we've created a path to homeownership that doesn't require years of saving or perfect credit.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[{ value: '0%', label: 'Down Payment', desc: 'Keep your savings' }, { value: 'No', label: 'PMI Required', desc: 'More in your pocket' }, { value: '620+', label: 'Credit Score', desc: 'Real pathways' }, { value: '~1 Week', label: 'Approval Time', desc: 'Know fast' }].map(item => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.1)', padding: 18, borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="headline-font" style={{ fontSize: 28, fontWeight: 700 }}>{item.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}><Link href="/financing" className="btn-white">Learn More About Financing →</Link></div>
          </div>
          
          <div style={{ background: 'white', borderRadius: 20, padding: 32, color: colors.text, boxShadow: '0 40px 80px rgba(0,0,0,0.25)' }}>
            <div style={{ fontSize: 13, color: colors.accent, fontWeight: 600, marginBottom: 6 }}>EXAMPLE MONTHLY PAYMENT</div>
            <div className="headline-font" style={{ fontSize: 42, fontWeight: 700, color: colors.primary, marginBottom: 20 }}>~$1,650<span style={{ fontSize: 18, fontWeight: 400, color: '#888' }}>/month</span></div>
            <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
              {[{ label: 'Home Price', value: '$240,000', highlight: false }, { label: 'Down Payment', value: '$0', highlight: true }, { label: 'PMI', value: '$0', highlight: true }, { label: 'Energy Costs', value: 'Low', highlight: false }].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ color: '#666' }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: row.highlight ? colors.accent : colors.text }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: 14, background: `${colors.primary}08`, borderRadius: 10, fontSize: 13, color: colors.textLight, lineHeight: 1.5, border: `1px solid ${colors.primary}15` }}>💡 If 30% of your take-home pay covers this payment, you likely qualify. Not there yet? We have resources to help.</div>
          </div>
        </div>
      </section>
      
      {/* Community Impact Section */}
      <section style={{ padding: '100px 24px', background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text, marginBottom: 16 }}>Building Communities, Not Just Houses</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 700, margin: '0 auto' }}>RediHome develops infill lots—empty or underutilized properties in Birmingham's established neighborhoods. We're not building subdivisions at the edge of town. We're filling in the gaps where good homes are needed most.</p>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: '🏘️', title: 'Revitalizing Neighborhoods', desc: 'We transform vacant lots into beautiful homes, strengthening blocks that need investment and bringing new energy to established communities.' },
              { icon: '📈', title: 'Building Generational Wealth', desc: 'Homeownership is the #1 way working families build wealth. Every home we build is an opportunity for a family to invest in their future.' },
              { icon: '🤝', title: 'Strengthening Community', desc: "Owner-occupied neighborhoods are safer, more stable, and more connected. We're helping shift rental-heavy areas to homeownership communities." }
            ].map(item => (
              <div key={item.title} className="hover-lift" style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 30px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }}>
            <div className="hover-lift" style={{ background: 'white', padding: 36, borderRadius: 20, boxShadow: '0 4px 30px rgba(0,0,0,0.06)', textAlign: 'left' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 16 }}>For You</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Shorter commutes to work', 'Established schools and services', 'Real neighborhood character', 'Appreciation in proven locations'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, color: colors.textLight, fontSize: 15 }}><span style={{ color: colors.primary, fontWeight: 700 }}>✓</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="hover-lift" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, padding: 36, borderRadius: 20, textAlign: 'left', color: 'white' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>For Birmingham</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Revitalizing blocks that need investment', 'Shifting renters to owners', 'Building generational wealth', 'Strengthening community roots'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, opacity: 0.9, fontSize: 15 }}><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
}

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
    { num: '01', title: 'Find Your Lot', desc: 'Visit a prepared lot in Birmingham and scan the QR code', icon: '📍' },
    { num: '02', title: 'Design Your Home', desc: 'Customize everything—it becomes YOUR home the moment you start', icon: '🏠' },
    { num: '03', title: 'Get Qualified', desc: 'Quick questions connect you with 0% down financing', icon: '✓' },
    { num: '04', title: 'Secure Your Spot', desc: '$500 refundable deposit—your home is built specifically for you', icon: '🔒' },
    { num: '05', title: 'Get Your Keys', desc: '8 weeks later, move into the home you designed', icon: '🔑' },
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
            
            <h1 className="headline-font animate-in animate-delay-1" style={{ fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 1.1, fontWeight: 600, color: colors.text, marginBottom: 24 }}>
              Own a New Home.<br />
              <span style={{ color: colors.primary }}>For Less Than You're Paying in Rent.</span>
            </h1>
            
            <p className="animate-in animate-delay-2" style={{ fontSize: 18, lineHeight: 1.7, color: colors.textLight, marginBottom: 32, maxWidth: 480 }}>
              A $240,000 path to your first home. 0% down. No PMI. Keys in 8 weeks. Built for Birmingham's nurses, teachers, and tradespeople—the people who make our city run.
            </p>
            
            <div className="animate-in animate-delay-3 cta-buttons" style={{ display: 'flex', gap: 16, marginBottom: 48 }}>
              <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent">Find a Lot Near You <span>→</span></a>
              <Link href="/how-it-works" className="btn-secondary">See How It Works</Link>
            </div>
            
            <div className="animate-in animate-delay-4 stats-row" style={{ display: 'flex', gap: 40 }}>
              {[{ value: '$240K', label: 'Your Investment' }, { value: '$0', label: 'Down Payment' }, { value: '8 Weeks', label: 'To Move In' }].map(stat => (
                <div key={stat.label}>
                  <div className="headline-font" style={{ fontSize: 32, fontWeight: 700, color: colors.primary }}>{stat.value}</div>
                  <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div className="float" style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', boxShadow: `0 30px 60px ${colors.primary}30` }}>
              <img 
                src="/exterior.jpg" 
                alt="RediHome exterior - The Magnolia floor plan" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '40px 24px 24px' }}>
                <div style={{ color: 'white' }}>
                  <div style={{ opacity: 0.8, fontSize: 13, marginBottom: 4 }}>The Magnolia</div>
                  <div style={{ fontSize: 20, fontWeight: 600 }}>1,472 sq ft • 3 BD / 2 BA</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'white', padding: 16, borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 56, height: 56, background: `${colors.accent}15`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📱</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>Scan. Design. Own.</div>
                <div style={{ fontSize: 12, color: '#888' }}>QR code on every lot</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Build For */}
      <section style={{ padding: '100px 24px', background: colors.primary, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 16 }}>Built for Birmingham's Essential Workers</h2>
            <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: '0 auto' }}>The nurses, teachers, and tradespeople who make our city run deserve to own where they live. We build homes that match what they actually earn.</p>
          </div>
          
          <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[{ icon: '👩‍🏫', title: 'Teachers', desc: 'The kitchen where your kids will remember Thanksgiving' }, { icon: '👨‍⚕️', title: 'Nurses', desc: 'A home close to work, not an hour commute away' }, { icon: '👷', title: 'Tradespeople', desc: 'Walls you can paint any color without asking permission' }, { icon: '👨‍👩‍👧‍👦', title: 'Working Families', desc: 'A yard for your kids, equity for your future' }].map(person => (
              <div key={person.title} className="hover-lift" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: 28, borderRadius: 16, textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: 44, marginBottom: 14 }}>{person.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{person.title}</div>
                <div style={{ fontSize: 14, opacity: 0.75 }}>{person.desc}</div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: 48, padding: 28, background: `${colors.accent}30`, borderRadius: 14, border: `2px solid ${colors.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 36 }}>🚫</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>We've Said No to Over $2 Million in Investor Purchases.</div>
              <div style={{ fontSize: 15, opacity: 0.9, marginTop: 6 }}>Every RediHome is reserved for families who will actually live there. Neighborhoods belong to the people in them—not California investors.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interior Preview */}
      <section style={{ padding: '100px 24px', background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text, marginBottom: 16 }}>The Home You'll Show Your Parents</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 600, margin: '0 auto' }}>Open floor plans, vaulted ceilings, modern finishes. This isn't "starter home" quality—it's the home you'll be proud to host Thanksgiving in.</p>
          </div>
          
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="hover-lift" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <img src="/interior-1.jpg" alt="RediHome living room and kitchen" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="hover-lift" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <img src="/interior-2.jpg" alt="RediHome kitchen with island" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/homes" className="btn-primary">Explore Floor Plans →</Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section style={{ padding: '100px 24px', background: colors.backgroundAlt }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${colors.accent}18`, padding: '8px 16px', borderRadius: 100, marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.accentDark }}>Simple Process</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text, marginBottom: 16 }}>Your Home is Built Specifically for You</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 650, margin: '0 auto' }}>Unlike mass builders, we don't start until you design it. Every home is built for its owner—not sitting empty waiting for a buyer.</p>
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
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text }}>Why RediHome is Different</h2>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Built Better', icon: '🏗️', color: colors.primary, points: ['2x6 framing (not builder-grade 2x4)', 'Closed-cell spray foam insulation', 'Air-tight construction tested', 'Energy bills that won\'t break you'] },
              { title: 'Built Faster', icon: '⚡', color: colors.accent, points: ['Lots prepared before you arrive', 'Permits already approved', '8 weeks from deposit to keys', 'Move in while others wait months'] },
              { title: 'Built for You', icon: '❤️', color: colors.primaryLight, points: ['Your kitchen layout, your choice', 'Your cabinets, your counters', '20+ ways to make it yours', 'Not a cookie-cutter copy'] }
            ].map(pillar => (
              <div key={pillar.title} className="hover-lift" style={{ background: colors.background, borderRadius: 20, padding: 32, boxShadow: '0 4px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)' }}>
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
              <span style={{ fontSize: 14, fontWeight: 500 }}>Financing That Makes Sense</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 20 }}>Build $40,000+ in Equity Over Five Years</h2>
            <p style={{ fontSize: 17, opacity: 0.9, lineHeight: 1.7, marginBottom: 28 }}>For less than Birmingham rent, you could be building wealth instead of paying someone else's mortgage. Our banking partner makes it possible with 0% down and no PMI.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[{ value: '0%', label: 'Down Payment', desc: 'Keep your savings' }, { value: 'No', label: 'PMI Required', desc: 'More in your pocket' }, { value: '620+', label: 'Credit Score', desc: 'Good credit, not perfect' }, { value: '~1 Week', label: 'Approval Time', desc: 'Know fast' }].map(item => (
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
            <div style={{ fontSize: 13, color: colors.accent, fontWeight: 600, marginBottom: 6 }}>YOUR MONTHLY INVESTMENT</div>
            <div className="headline-font" style={{ fontSize: 42, fontWeight: 700, color: colors.primary, marginBottom: 20 }}>~$1,650<span style={{ fontSize: 18, fontWeight: 400, color: '#888' }}>/month</span></div>
            <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
              {[{ label: 'Home Value', value: '$240,000', highlight: false }, { label: 'Your Down Payment', value: '$0', highlight: true }, { label: 'PMI', value: '$0', highlight: true }, { label: 'vs. Average Birmingham Rent', value: '$1,400+', highlight: false }].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ color: '#666' }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: row.highlight ? colors.accent : colors.text }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, padding: 14, background: `${colors.primary}08`, borderRadius: 10, fontSize: 13, color: colors.textLight, lineHeight: 1.5, border: `1px solid ${colors.primary}15` }}>💡 For ~$250 more than rent, you're building equity instead of making someone else rich.</div>
          </div>
        </div>
      </section>
      
      {/* Community Impact Section */}
      <section style={{ padding: '100px 24px', background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: colors.text, marginBottom: 16 }}>Neighborhoods Belong to the People Who Live in Them</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 750, margin: '0 auto' }}>Neighborhoods where 60% of homes are rentals are neighborhoods in decline. We're here to reverse that—building on vacant lots in established communities, turning renters into owners, one family at a time.</p>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: '🏘️', title: 'Filling the Gaps', desc: 'We build on vacant lots in your neighborhood—not sprawling subdivisions 45 minutes from work.' },
              { icon: '📈', title: 'Building Wealth', desc: 'Every mortgage payment builds YOUR equity. In 5 years, you could have $40,000+ in home value.' },
              { icon: '🤝', title: 'Stabilizing Communities', desc: 'Owner-occupied neighborhoods are safer, better maintained, and more connected.' }
            ].map(item => (
              <div key={item.title} className="hover-lift" style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 30px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.6 }}>{item.desc}</p>
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

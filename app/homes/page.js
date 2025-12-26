'use client';

import Link from 'next/link';
import { Navigation, Footer, CTASection, colors } from '../components';

export default function HomesPage() {
  const availablePlans = [
    {
      name: 'The Magnolia',
      sqft: '1,472',
      beds: 3,
      baths: 2,
      features: ['Open floor plan with vaulted ceilings', 'Dedicated office or flex room', 'Primary suite with walk-in closet', 'Covered front porch'],
      price: 'From $240,000',
      popular: true,
      image: '/exterior.jpg'
    },
    {
      name: 'The Dogwood',
      sqft: '1,425',
      beds: 3,
      baths: 2,
      features: ['Efficient layout', 'Split bedroom design', 'Spacious kitchen', 'Rear patio option'],
      price: 'From $235,000',
      popular: false,
      image: null
    }
  ];

  const comingSoon = [
    { name: 'The Redbud', sqft: '1,200', beds: 2, baths: 2, desc: 'Perfect starter home' },
    { name: 'The Live Oak', sqft: '1,650', beds: 4, baths: 2, desc: 'Room for growing families' },
    { name: 'The Longleaf', sqft: '1,800', beds: 4, baths: 2.5, desc: 'Our largest floor plan' }
  ];

  const customizations = {
    exterior: ['Siding color & material', 'Roof color', 'Front door style & color', 'Porch options', 'Shutters'],
    interior: ['Flooring (LVP options)', 'Cabinet color & style', 'Countertop selection', 'Fixture finishes', 'Paint colors']
  };

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="headline-font" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: colors.text }}>Homes That Match <span style={{ color: colors.primary }}>What You Earn</span></h1>
          <p style={{ fontSize: 20, color: colors.textLight, lineHeight: 1.7 }}>Floor plans named after Alabama's trees. Each one designed for how families actually live—with 20+ ways to make it yours. Not a cookie-cutter in sight.</p>
        </div>
      </section>
      
      {/* Interior Gallery */}
      <section style={{ padding: '0 24px 60px', background: colors.backgroundAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="hover-lift" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <img src="/interior-1.jpg" alt="RediHome open living room and kitchen with vaulted ceilings" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="hover-lift" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
              <img src="/interior-2.jpg" alt="RediHome modern kitchen with island and pendant lights" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: colors.textLight }}>Open floor plans • Vaulted ceilings • Modern finishes • The home you'll show your parents</p>
        </div>
      </section>
      
      {/* Available Plans */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${colors.accent}18`, padding: '8px 16px', borderRadius: 100, marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.accentDark }}>Available Now</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text }}>Current Floor Plans</h2>
          </div>
          
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {availablePlans.map(plan => (
              <div key={plan.name} className="hover-lift" style={{ background: colors.background, borderRadius: 20, overflow: 'hidden', border: plan.popular ? `2px solid ${colors.accent}` : '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: 16, right: 16, background: colors.accent, color: 'white', padding: '6px 12px', borderRadius: 100, fontSize: 12, fontWeight: 600, zIndex: 10 }}>Most Popular</div>
                )}
                <div style={{ height: 260, background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primaryLight}15 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {plan.image ? (
                    <img src={plan.image} alt={plan.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 64, marginBottom: 8 }}>🏠</div>
                      <div style={{ color: colors.primary, fontWeight: 500 }}>Rendering Coming Soon</div>
                    </div>
                  )}
                </div>
                <div style={{ padding: 28 }}>
                  <h3 className="headline-font" style={{ fontSize: 26, color: colors.text, marginBottom: 8 }}>{plan.name}</h3>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 16, color: colors.textLight, fontSize: 15 }}>
                    <span>{plan.sqft} sq ft</span>
                    <span>•</span>
                    <span>{plan.beds} BD / {plan.baths} BA</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                    {plan.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 14, color: colors.textLight }}>
                        <span style={{ color: colors.primary }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="headline-font" style={{ fontSize: 22, color: colors.primary, fontWeight: 600 }}>{plan.price}</div>
                    <a href="https://homepoint.co/redihome" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ padding: '10px 20px', fontSize: 14 }}>Find a Lot →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section style={{ padding: '80px 24px', background: colors.backgroundAlt }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 12 }}>Coming Soon</h2>
            <p style={{ fontSize: 17, color: colors.textLight }}>More options on the way—from starter homes to family-sized</p>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {comingSoon.map(plan => (
              <div key={plan.name} className="hover-lift" style={{ background: 'white', padding: 28, borderRadius: 16, textAlign: 'center', opacity: 0.85 }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🌳</div>
                <h4 className="headline-font" style={{ fontSize: 20, color: colors.text, marginBottom: 8 }}>{plan.name}</h4>
                <div style={{ fontSize: 14, color: colors.textLight, marginBottom: 8 }}>{plan.sqft} sq ft • {plan.beds} BD / {plan.baths} BA</div>
                <div style={{ fontSize: 14, color: colors.primary, fontWeight: 500 }}>{plan.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customizations */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 12 }}>Your Home, Your Choices</h2>
            <p style={{ fontSize: 17, color: colors.textLight }}>20+ customization options. Walls you can paint any color. Cabinets you actually picked out.</p>
          </div>
          
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="hover-lift" style={{ background: colors.background, padding: 32, borderRadius: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 28 }}>🏡</span> Exterior Options
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {customizations.exterior.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 15, color: colors.textLight }}>
                    <span style={{ color: colors.accent }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hover-lift" style={{ background: colors.background, padding: 32, borderRadius: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 28 }}>🛋️</span> Interior Options
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {customizations.interior.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: 15, color: colors.textLight }}>
                    <span style={{ color: colors.accent }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: 40, background: `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.accent}08 100%)`, padding: 28, borderRadius: 16, border: `1px solid ${colors.primary}15`, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.7, maxWidth: 700, margin: '0 auto' }}>
              <strong style={{ color: colors.primary }}>The moment you start designing, it's YOUR home.</strong> Not a model unit. Not a spec build. Every choice you make is saved to your specific lot—and that's exactly what gets built.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quality Section */}
      <section style={{ padding: '80px 24px', background: colors.primary, color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 20 }}>Built Better. Every Single Home.</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 40, maxWidth: 700, margin: '0 auto 40px' }}>This isn't "starter home" quality. Every RediHome includes construction standards that big builders charge extra for—or skip entirely.</p>
          
          <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { icon: '🪵', label: '2x6 Framing', desc: 'Stronger, better insulated' },
              { icon: '🌡️', label: 'Spray Foam', desc: 'Closed-cell insulation' },
              { icon: '💨', label: 'Air-Tight', desc: 'Tested construction' },
              { icon: '⚡', label: 'Low Bills', desc: 'Energy efficient' }
            ].map(item => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.1)', padding: 24, borderRadius: 14, border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison */}
      <section style={{ padding: '80px 24px', background: colors.background }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 12 }}>You Have Three Choices</h2>
            <p style={{ fontSize: 17, color: colors.textLight }}>And only one of them builds wealth</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'white', padding: 24, borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, border: '1px solid rgba(0,0,0,0.05)' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: colors.text }}>Keep Renting</div>
                <div style={{ fontSize: 14, color: colors.textLight }}>$1,400+/month in Birmingham</div>
              </div>
              <div style={{ color: '#999', fontWeight: 500 }}>$0 equity after 5 years</div>
            </div>
            
            <div style={{ background: 'white', padding: 24, borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, border: '1px solid rgba(0,0,0,0.05)' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: colors.text }}>Buy in Mountain Brook</div>
                <div style={{ fontSize: 14, color: colors.textLight }}>$450,000+ average price</div>
              </div>
              <div style={{ color: '#999', fontWeight: 500 }}>$90,000 down payment needed</div>
            </div>
            
            <div style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, padding: 24, borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, color: 'white' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Own a RediHome</div>
                <div style={{ fontSize: 14, opacity: 0.9 }}>~$1,650/month, $0 down</div>
              </div>
              <div style={{ fontWeight: 600, color: colors.accent }}>$40,000+ equity in 5 years</div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
}

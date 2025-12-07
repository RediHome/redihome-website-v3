'use client';

import Link from 'next/link';
import { Navigation, Footer, CTASection, colors } from '../components';

export default function FinancingPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="headline-font" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: colors.text }}>Financing That <span style={{ color: colors.primary }}>Works</span></h1>
          <p style={{ fontSize: 20, color: colors.textLight, lineHeight: 1.7 }}>0% down. No PMI. A real path to homeownership—not another door slammed shut.</p>
        </div>
      </section>
      
      {/* Right@Home Program */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${colors.accent}18`, padding: '8px 16px', borderRadius: 100, marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: colors.accentDark }}>Our Banking Partner</span>
            </div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 16 }}>The Right@Home Program</h2>
            <p style={{ fontSize: 18, color: colors.textLight, maxWidth: 700, margin: '0 auto' }}>Through our partnership with Cadence Bank, we've unlocked financing that removes the biggest barriers to homeownership.</p>
          </div>
          
          <div className="grid-4-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 48 }}>
            {[
              { value: '0%', label: 'Down Payment', desc: 'Keep your savings for moving, furniture, or emergencies', icon: '💰' },
              { value: 'No', label: 'PMI Required', desc: 'More money in your pocket every month', icon: '🚫' },
              { value: '620+', label: 'Credit Score', desc: 'Good credit, not perfect credit', icon: '📊' },
              { value: '~1 Week', label: 'Approval Time', desc: 'Know fast so you can plan', icon: '⚡' }
            ].map(item => (
              <div key={item.label} className="hover-lift" style={{ background: colors.background, padding: 28, borderRadius: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div className="headline-font" style={{ fontSize: 32, color: colors.primary, fontWeight: 700 }}>{item.value}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: colors.text, marginTop: 4 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: colors.textLight, marginTop: 8, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Payment Example */}
      <section style={{ padding: '80px 24px', background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, color: 'white' }}>
        <div className="grid-2-col" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 20 }}>What Does It Actually Cost?</h2>
            <p style={{ fontSize: 17, opacity: 0.9, lineHeight: 1.7, marginBottom: 24 }}>Let's be real about numbers. Here's what a typical RediHome payment looks like—and why it's probably less than you're paying in rent.</p>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>The 30% Rule</div>
              <p style={{ fontSize: 15, lineHeight: 1.6 }}>If 30% of your take-home pay covers the monthly payment, you likely qualify. For a ~$1,650 payment, that's around $5,500/month take-home, or roughly $65,000-$70,000 annual salary.</p>
            </div>
          </div>
          
          <div style={{ background: 'white', borderRadius: 20, padding: 32, color: colors.text, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: 13, color: colors.accent, fontWeight: 600, marginBottom: 8 }}>EXAMPLE MONTHLY PAYMENT</div>
            <div className="headline-font" style={{ fontSize: 48, fontWeight: 700, color: colors.primary, marginBottom: 24 }}>~$1,650<span style={{ fontSize: 20, fontWeight: 400, color: '#888' }}>/month</span></div>
            
            <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
              {[
                { label: 'Home Price', value: '$240,000' },
                { label: 'Down Payment', value: '$0', highlight: true },
                { label: 'PMI', value: '$0', highlight: true },
                { label: 'Est. Principal & Interest', value: '~$1,400' },
                { label: 'Est. Taxes & Insurance', value: '~$250' }
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ color: '#666' }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: row.highlight ? colors.accent : colors.text }}>{row.value}</span>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: 16, padding: 14, background: `${colors.primary}08`, borderRadius: 10, fontSize: 13, color: colors.textLight, lineHeight: 1.5, border: `1px solid ${colors.primary}15` }}>
              *Example based on current rates. Your actual payment may vary based on credit, rates, and final home price.
            </div>
          </div>
        </div>
      </section>
      
      {/* Qualification */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 16 }}>Do You Qualify?</h2>
            <p style={{ fontSize: 18, color: colors.textLight }}>Here's what our banking partner looks for</p>
          </div>
          
          <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                title: 'Credit Score',
                requirement: '620 or higher',
                icon: '📊',
                note: "Don't know your score? Check free at Credit Karma or Rocket Money."
              },
              {
                title: 'Income',
                requirement: '30% rule',
                icon: '💵',
                note: 'Your monthly take-home pay × 30% should cover the payment (PITI).'
              },
              {
                title: 'Intent',
                requirement: 'Owner-occupant',
                icon: '🏠',
                note: "You must plan to live in the home. We don't sell to investors."
              }
            ].map(item => (
              <div key={item.title} className="hover-lift" style={{ background: colors.background, padding: 28, borderRadius: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                <h4 style={{ fontSize: 18, fontWeight: 600, color: colors.text, marginBottom: 8 }}>{item.title}</h4>
                <div style={{ fontSize: 20, fontWeight: 700, color: colors.primary, marginBottom: 12 }}>{item.requirement}</div>
                <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.5 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Not Qualified Yet */}
      <section style={{ padding: '80px 24px', background: colors.backgroundAlt }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 16 }}>Not Qualified Yet?</h2>
            <p style={{ fontSize: 18, color: colors.textLight }}>That's okay. We have resources to help you get there.</p>
          </div>
          
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="hover-lift" style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📈</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>Credit Below 620?</h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7, marginBottom: 16 }}>Our banking partner offers credit counseling resources. Many people improve their scores significantly within 6-12 months with the right guidance.</p>
              <p style={{ fontSize: 14, color: colors.accent, fontWeight: 500 }}>We'll stay in touch and reach out when you're ready.</p>
            </div>
            <div className="hover-lift" style={{ background: 'white', padding: 32, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>💼</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>Income Too Low?</h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7, marginBottom: 16 }}>We partner with workforce development programs like BuildUp Birmingham. We'll connect you with career resources and training opportunities.</p>
              <p style={{ fontSize: 14, color: colors.accent, fontWeight: 500 }}>Your path to homeownership might just need a career boost first.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text }}>RediHome vs. Traditional</h2>
          </div>
          
          <div style={{ background: colors.background, borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: colors.primary, color: 'white', padding: '16px 24px', fontWeight: 600, fontSize: 14 }}>
              <div></div>
              <div style={{ textAlign: 'center' }}>Traditional</div>
              <div style={{ textAlign: 'center' }}>RediHome</div>
            </div>
            {[
              { label: 'Down Payment', traditional: '3-20%', redi: '0%', better: true },
              { label: 'PMI Required', traditional: 'Usually yes', redi: 'No', better: true },
              { label: 'Credit Score', traditional: '680+ typical', redi: '620+', better: true },
              { label: 'Approval Time', traditional: '30-45 days', redi: '~1 week', better: true },
              { label: 'Time to Move In', traditional: '3-6 months', redi: '8 weeks', better: true },
              { label: 'Customization', traditional: 'Limited/expensive', redi: '20+ options included', better: true }
            ].map((row, idx) => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '16px 24px', borderBottom: idx < 5 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                <div style={{ fontWeight: 500, color: colors.text }}>{row.label}</div>
                <div style={{ textAlign: 'center', color: colors.textLight }}>{row.traditional}</div>
                <div style={{ textAlign: 'center', color: colors.primary, fontWeight: 600 }}>{row.redi}</div>
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

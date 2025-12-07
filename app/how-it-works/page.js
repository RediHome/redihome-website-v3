'use client';

import Link from 'next/link';
import { Navigation, Footer, CTASection, colors } from '../components';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Find Your Lot',
      desc: 'Browse available lots at homepoint.co/redihome or drive through Birmingham neighborhoods and look for our signs. Each prepared lot has a QR code that takes you directly to the design experience.',
      icon: '📍',
      details: ['Lots already have utilities run', 'Concrete slab poured and ready', 'Permits pre-approved', 'QR code links to that specific lot']
    },
    {
      num: '02',
      title: 'Design Your Home',
      desc: "Scan the QR code and you're instantly in our design platform. Choose your floor plan, then customize everything from siding color to cabinet style. See your choices come to life in real-time.",
      icon: '🏠',
      details: ['Multiple floor plans available', '20+ customization options', 'See real-time price updates', 'Save and return anytime']
    },
    {
      num: '03',
      title: 'Get Qualified',
      desc: "Answer a few quick questions about your credit score, income, and intentions. If you're likely to qualify, you'll move forward immediately. If not, we'll connect you with resources to get there.",
      icon: '✓',
      details: ['620+ credit score needed', '30% of take-home covers payment', 'Owner-occupants only', 'Know in minutes, not days']
    },
    {
      num: '04',
      title: 'Secure Your Spot',
      desc: "Ready to move forward? A $500 refundable deposit holds your specific lot and home design. First deposit wins—this protects you from someone else claiming your lot.",
      icon: '🔒',
      details: ['$500 fully refundable deposit', 'Secures your specific lot', '3 days to complete bank application', 'Deposit returned if not approved']
    },
    {
      num: '05',
      title: 'Bank Approval',
      desc: "Our banking partner contacts you directly to complete the application. With their Right@Home program, you get 0% down and no PMI. Most approvals happen within a week.",
      icon: '🏦',
      details: ['0% down payment', 'No PMI required', 'Approval in ~1 week', 'Closing date set 2 months out']
    },
    {
      num: '06',
      title: 'Get Your Keys',
      desc: "Once approved, we start building. Eight weeks later, you're walking into your brand new home. Track progress through our build updates. Then—keys in hand.",
      icon: '🔑',
      details: ['8-week build time', 'Progress updates throughout', 'Final walkthrough', 'Move-in day!']
    }
  ];

  const faqs = [
    {
      q: 'What if my credit score is below 620?',
      a: "We'll connect you with credit counseling resources through our banking partner. Many people improve their scores within 6-12 months. We'll stay in touch and reach out when you're ready."
    },
    {
      q: 'What if my income is too low right now?',
      a: "We partner with workforce development programs like BuildUp Birmingham. We'll connect you with career resources and check back as your situation improves."
    },
    {
      q: 'Is the $500 deposit really refundable?',
      a: "Yes, 100%. If you're not approved by the bank, or if you simply change your mind before the bank application is submitted, you get your full deposit back."
    },
    {
      q: 'Why do you only sell to owner-occupants?',
      a: "We believe homeownership builds community wealth. When families own their homes, neighborhoods become more stable, more invested, and more connected. We're building communities, not rental portfolios."
    },
    {
      q: "What's included in the home price?",
      a: "Everything you need to move in: complete home construction, all standard finishes, appliances, landscaping, driveway, and closing costs are transparent. No hidden fees."
    }
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", background: colors.background, color: colors.text, minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', background: `linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundAlt} 100%)`, textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="headline-font" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: colors.text }}>How It <span style={{ color: colors.primary }}>Works</span></h1>
          <p style={{ fontSize: 20, color: colors.textLight, lineHeight: 1.7 }}>From scanning a QR code to holding your keys—here's exactly what to expect.</p>
        </div>
      </section>
      
      {/* Timeline Steps */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <div key={step.num} style={{ display: 'flex', gap: 32, marginBottom: idx < steps.length - 1 ? 48 : 0, position: 'relative' }}>
              {/* Timeline line */}
              {idx < steps.length - 1 && (
                <div style={{ position: 'absolute', left: 35, top: 80, width: 2, height: 'calc(100% - 40px)', background: `${colors.primary}20` }} />
              )}
              
              {/* Number bubble */}
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 10px 30px ${colors.primary}30` }}>
                <span style={{ color: 'white', fontSize: 24, fontWeight: 700 }}>{step.num}</span>
              </div>
              
              {/* Content */}
              <div className="hover-lift" style={{ flex: 1, background: colors.background, padding: 28, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{step.icon}</span>
                  <h3 className="headline-font" style={{ fontSize: 24, color: colors.text }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.7, marginBottom: 16 }}>{step.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                  {step.details.map(detail => (
                    <div key={detail} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: colors.textLight }}>
                      <span style={{ color: colors.accent }}>✓</span> {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Timeline Visual */}
      <section style={{ padding: '60px 24px', background: colors.primary, color: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="headline-font" style={{ fontSize: 28, marginBottom: 32 }}>Your Timeline</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            {[
              { label: 'Day 1', desc: 'Find & Design' },
              { label: 'Day 1-3', desc: 'Qualify & Deposit' },
              { label: 'Week 1-2', desc: 'Bank Approval' },
              { label: 'Week 2-10', desc: 'Construction' },
              { label: 'Week 10', desc: '🔑 Keys!' }
            ].map((item, idx) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{item.desc}</div>
                </div>
                {idx < 4 && <div style={{ fontSize: 20, opacity: 0.5, margin: '0 8px' }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section style={{ padding: '80px 24px', background: colors.background }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="headline-font" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text, marginBottom: 12 }}>Common Questions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(faq => (
              <div key={faq.q} className="hover-lift" style={{ background: 'white', padding: 28, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>{faq.q}</h4>
                <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7 }}>{faq.a}</p>
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

function PricingCard({ name, price, popular, bullets }) {
  const [hover, setHover] = React.useState(false);
  const isMobile = window.useIsMobile();
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'var(--bg-white)',
        border: popular ? '2px solid var(--forest)' : '1px solid var(--border-white)',
        borderRadius: 12, padding: isMobile ? '24px 18px 20px' : '36px 28px 28px',
        boxShadow: popular ? 'var(--shadow-md)' : (hover ? 'var(--shadow-md)' : 'var(--shadow-sm)'),
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
      {popular && (
        <div style={{
          position: 'absolute', top: -13, left: 18,
          background: 'var(--forest)', color: 'var(--bg-cream)',
          fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
          padding: '5px 12px', borderRadius: 999,
        }}>Most Popular</div>
      )}
      <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{name}</div>
      <div style={{ fontSize: isMobile ? 32 : 36, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        ${price} <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-soft)' }}>/ mo</span>
      </div>
      <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '2px 0' }} />
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--forest)', fontWeight: 700, marginTop: -1 }}>✓</span>{b}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 4 }}>
        <Button variant={popular ? 'primary' : 'secondary'} as="a" href="#contact" style={{ width: '100%', justifyContent: 'center' }}>Get Started</Button>
      </div>
    </div>
  );
}

function Pricing() {
  const isMobile = window.useIsMobile();
  return (
    <Section id="pricing" eyebrow="Pricing" background="var(--bg-cream-soft)">
      <h2 style={{
        fontFamily: 'var(--font-sans)', fontSize: isMobile ? '26px' : 'clamp(32px,4vw,44px)',
        lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.01em',
        color: 'var(--ink)', margin: '0 0 8px', maxWidth: 720,
      }}>
        Straightforward pricing, <Punch>no surprises</Punch>.
      </h2>
      <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: isMobile ? '0 0 28px' : '0 0 48px' }}>
        <span style={{ color: 'var(--gold)' }}>★</span> Love your first month of books, <Punch>or it's on me</Punch>.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? 14 : 20 }}>
        <PricingCard name="Essential" price="300"
          bullets={['Up to 75 monthly transactions', 'Monthly reconciliation', 'P&L delivered by the 20th']} />
        <PricingCard name="Core" price="500" popular
          bullets={['Up to 200 monthly transactions', 'Monthly reconciliation', 'P&L by the 15th', 'Quarterly review call']} />
        <PricingCard name="Strategic" price="800"
          bullets={['Unlimited transactions', 'Monthly reconciliation', 'P&L by the 10th', 'Monthly strategy call', 'Cash-flow forecasting']} />
      </div>
    </Section>
  );
}

window.Pricing = Pricing;
window.PricingCard = PricingCard;

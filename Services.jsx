function ServiceCard({ glyph, name, desc, bullets }) {
  const [hover, setHover] = React.useState(false);
  const isMobile = window.useIsMobile();
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--bg-white)',
        border: '1px solid var(--border-white)',
        borderRadius: 12, padding: isMobile ? '20px 18px' : 28,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 250ms var(--ease), transform 250ms var(--ease)',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
      <div style={{ fontSize: 36, lineHeight: 1 }}>{glyph}</div>
      <h3 style={{
        fontSize: isMobile ? 18 : 22, lineHeight: '28px', fontWeight: 600,
        color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em',
      }}>{name}</h3>
      <p style={{ fontSize: isMobile ? 14 : 15, lineHeight: '22px', color: 'var(--ink-soft)', margin: 0 }}>{desc}</p>
      <ul style={{ margin: '2px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--ink-mute)' }}>–</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const isMobile = window.useIsMobile();
  return (
    <Section id="services" eyebrow="What I Do">
      <h2 style={{
        fontFamily: 'var(--font-sans)', fontSize: isMobile ? '26px' : 'clamp(32px,4vw,44px)',
        lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.01em',
        color: 'var(--ink)', margin: isMobile ? '0 0 28px' : '0 0 48px', maxWidth: 720,
      }}>
        Three ways I help small businesses <Punch>stay clean</Punch>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? 14 : 20 }}>
        <ServiceCard
          glyph="📅"
          name="Monthly Bookkeeping"
          desc="Books closed on schedule, every month."
          bullets={['P&L by the 15th', 'Categorization rules built for you', 'Direct line for questions']}
        />
        <ServiceCard
          glyph="🧹"
          name="Cleanup & Catch-Up"
          desc="From a year of receipts to clean books — quickly."
          bullets={['Reconciliation back to day one', 'Fixed-fee scoping', 'Tax-ready handoff']}
        />
        <ServiceCard
          glyph="🎓"
          name="1:1 Consulting & Advisory"
          desc="Run your own books with confidence."
          bullets={['QuickBooks setup', '1:1 walkthroughs', 'Quarterly check-ins']}
        />
      </div>
    </Section>
  );
}

window.Services = Services;
window.ServiceCard = ServiceCard;

function Contact() {
  const isMobile = window.useIsMobile();

  const Row = ({ emoji, label, text, href, last }) => {
    const [hover, setHover] = React.useState(false);
    const inner = (
      <div
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 16,
          padding: isMobile ? '16px 0' : '20px 0',
          borderBottom: last ? 'none' : '1px solid var(--border)',
          transition: 'opacity 150ms var(--ease)',
          opacity: href && hover ? 0.62 : 1,
        }}>
        <div style={{
          flexShrink: 0, width: 44, height: 44, borderRadius: 10,
          background: 'var(--bg-cream-soft)', border: '1px solid var(--border)',
          display: 'grid', placeItems: 'center', fontSize: 20, lineHeight: 1,
        }}>{emoji}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 3 }}>{label}</div>
          <div style={{ fontSize: isMobile ? 15 : 17, fontWeight: 600, color: 'var(--ink)', wordBreak: 'break-word' }}>{text}</div>
        </div>
        {href && (
          <span aria-hidden="true" style={{ marginLeft: 'auto', color: 'var(--ink-mute)', fontSize: 18, flexShrink: 0 }}>→</span>
        )}
      </div>
    );
    return href ? <a href={href} style={{ textDecoration: 'none', display: 'block' }}>{inner}</a> : inner;
  };

  return (
    <Section id="contact" eyebrow="Contact">
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
        gap: isMobile ? 36 : 72, alignItems: 'start',
      }}>
        {/* Left — pitch + reassurances */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontSize: isMobile ? '26px' : 'clamp(32px,4vw,44px)',
            lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.01em',
            color: 'var(--ink)', margin: isMobile ? '0 0 16px' : '0 0 20px',
          }}>
            Let's talk. <Punch>No forms, no fuss.</Punch>
          </h2>
          <p style={{
            fontSize: isMobile ? 15 : 17, lineHeight: isMobile ? '24px' : '28px',
            color: 'var(--ink-soft)', margin: '0 0 28px', maxWidth: 440,
          }}>
            Call or email me directly — you'll reach me, not a queue. Tell me where your books are and I'll tell you exactly how I can help.
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <li><Check>Reply within one business day</Check></li>
            <li><Check>Your first month is on me</Check></li>
            <li><Check>A direct line to me — never a call center</Check></li>
          </ul>
          {!isMobile && (
            <div style={{ marginTop: 36 }}>
              <Button as="a" href="tel:+19733936805">Book a Free Call</Button>
            </div>
          )}
        </div>

        {/* Right — contact panel */}
        <div style={{
          background: 'var(--bg-white)', border: '1px solid var(--border-white)',
          borderRadius: 16, padding: isMobile ? '8px 20px' : '8px 28px',
          boxShadow: 'var(--shadow-md)',
        }}>
          <Row emoji="📞" label="Phone" text="(973) 393-6805" href="tel:+19733936805" />
          <Row emoji="✉️" label="Email" text="khalid@bensmatbookkeeping.com" href="mailto:khalid@bensmatbookkeeping.com" />
          <Row emoji="📅" label="Schedule" text="Book a 30-min intro call" href="#" />
          <Row emoji="📍" label="Location" text="Newark, NJ · Serving nationwide" last />
        </div>

        {isMobile && (
          <Button as="a" href="tel:+19733936805" style={{ justifyContent: 'center', padding: '15px 22px', fontSize: 16 }}>Book a Free Call</Button>
        )}
      </div>
    </Section>
  );
}

window.Contact = Contact;

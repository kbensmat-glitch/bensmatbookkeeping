function Footer() {
  const isMobile = window.useIsMobile();
  return (
    <footer style={{ background: 'var(--bg-forest)', color: 'var(--bg-cream)', padding: isMobile ? '44px 0 28px' : '64px 0 40px' }}>
      <Container>
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          gap: isMobile ? 28 : 56, paddingBottom: isMobile ? 28 : 40,
          borderBottom: '1px solid rgba(244,239,228,0.12)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Logo size={28} light />
              <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--bg-cream)' }}>Bensmat Bookkeeping</span>
            </div>
            <p style={{ color: 'var(--moss)', fontSize: 14, lineHeight: '22px', margin: 0, maxWidth: 340 }}>
              Clean books. Accurate numbers. Real communication.
            </p>
          </div>
          <div>
            <h4 style={{
              fontSize: 12, color: 'var(--moss)', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 12px',
            }}>Contact</h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
              <li><a href="tel:+19733936805" style={{ color: 'var(--bg-cream)', textDecoration: 'none' }}>(973) 393-6805</a></li>
              <li><a href="mailto:khalid@bensmatbookkeeping.com" style={{ color: 'var(--bg-cream)', textDecoration: 'none', wordBreak: 'break-all' }}>khalid@bensmatbookkeeping.com</a></li>
              <li style={{ color: 'var(--moss)' }}>Newark, NJ · Serving businesses nationwide</li>
            </ul>
          </div>
        </div>
        <div style={{
          paddingTop: 20, color: 'var(--moss)', fontSize: 12,
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', gap: 6,
        }}>
          <span>© 2026 Bensmat Bookkeeping · Khalid Bensmat</span>
          <span>Built with care in Newark, NJ.</span>
        </div>
      </Container>
    </footer>
  );
}

window.Footer = Footer;

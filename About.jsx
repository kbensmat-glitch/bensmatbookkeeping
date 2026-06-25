function About() {
  const isMobile = window.useIsMobile();
  return (
    <section id="about" style={{
      padding: isMobile ? '52px 0' : 'clamp(80px,12vw,160px) 0',
      scrollMarginTop: 64,
    }}>
      <Container style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
        gap: isMobile ? 36 : 80, alignItems: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: isMobile ? 140 : 320, height: isMobile ? 140 : 320,
            borderRadius: 999, overflow: 'hidden',
            border: '1px solid var(--border)', background: 'var(--bg-cream-soft)',
          }}>
            <img src="assets/khalid-headshot.jpg" alt="Khalid Bensmat — Bensmat Bookkeeping"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: isMobile ? 12 : 24 }}><Eyebrow>About Me</Eyebrow></div>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontSize: isMobile ? '26px' : 'clamp(32px,4vw,44px)',
            lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.01em',
            color: 'var(--ink)', margin: isMobile ? '0 0 20px' : '0 0 32px',
          }}>
            I'm the bookkeeper. <Punch>Just me.</Punch>
          </h2>
          <div style={{
            fontSize: isMobile ? 15 : 17, lineHeight: isMobile ? '26px' : '28px',
            color: 'var(--ink)', display: 'flex', flexDirection: 'column', gap: isMobile ? 14 : 18,
          }}>
            <p style={{ margin: 0 }}>
              Hi, I'm Khalid. I run Bensmat Bookkeeping out of Newark, NJ — a one-person practice serving small businesses across the country.
            </p>
            <p style={{ margin: 0 }}>
              When you work with Bensmat, you work directly with me. No account managers, no ticket systems, and no handoffs.
            </p>
            <p style={{ margin: 0 }}>
              I'm Intuit Certified and a QuickBooks ProAdvisor, focused on helping business owners stay organized and keep accurate financial records month after month.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: isMobile ? 20 : 32, flexWrap: 'wrap' }}>
            <Check>Intuit Certified Bookkeeper</Check>
            <Check>QuickBooks ProAdvisor</Check>
            <Check>Newark, NJ</Check>
          </div>
          <div style={{
            marginTop: isMobile ? 24 : 40, paddingTop: isMobile ? 20 : 32,
            borderTop: '1px solid var(--border)',
          }}>
            <div style={{ marginBottom: 16 }}><Eyebrow>Certifications</Eyebrow></div>
            <div style={{ display: 'flex', gap: isMobile ? 16 : 28, alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="assets/cert-intuit.png" alt="Intuit Bookkeeping Trained"
                style={{ width: isMobile ? 72 : 92, height: 'auto', display: 'block' }} />
              <img src="assets/cert-level2.png" alt="QuickBooks ProAdvisor — Level 2 Certified"
                style={{ width: isMobile ? 72 : 92, height: 'auto', display: 'block' }} />
              <img src="assets/cert-level1.png" alt="QuickBooks ProAdvisor — Level 1 Certified"
                style={{ width: isMobile ? 72 : 92, height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.About = About;

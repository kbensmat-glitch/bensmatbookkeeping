function Hero() {
  const isMobile = window.useIsMobile();
  return (
    <section id="top" style={{
      padding: isMobile ? '52px 0 48px' : 'clamp(64px,10vw,128px) 0 clamp(64px,8vw,96px)',
      scrollMarginTop: 64,
    }}>
      <Container>
        {isMobile ? (
          /* ── Mobile: clean centered text block, no photo ── */
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 12 }}><Eyebrow>Intuit Certified · Newark, NJ</Eyebrow></div>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 34,
              lineHeight: 1.1, fontWeight: 700, letterSpacing: '-0.02em',
              color: 'var(--ink)', margin: '0 0 16px',
            }}>
              Love your first month,<br /><Punch>or it's free.</Punch>
            </h1>
            <p style={{
              fontSize: 16, lineHeight: '26px', color: 'var(--ink-soft)',
              margin: '0 auto 28px', maxWidth: 320,
            }}>
              Clean books. Accurate numbers. Real communication.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              <Button as="a" href="#contact" style={{ justifyContent: 'center', padding: '15px 22px', fontSize: 16 }}>Book a Free Call</Button>
              <Button variant="secondary" as="a" href="#contact" style={{ justifyContent: 'center', padding: '14px 22px', fontSize: 16 }}>Send a Message</Button>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--ink-soft)',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Stars size={12} /> <b style={{ color: 'var(--ink)', fontWeight: 600 }}>Google · 5.0</b>
              </span>
              <span style={{ color: 'var(--border)' }}>|</span>
              <Check>QuickBooks ProAdvisor</Check>
            </div>
          </div>
        ) : (
          /* ── Desktop: two-column with photo ── */
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: 24 }}><Eyebrow>Newark, NJ</Eyebrow></div>
              <h1 style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(40px,5.5vw,64px)',
                lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em',
                color: 'var(--ink)', margin: '0 0 24px',
              }}>
                Love your first month, <Punch>or it's free</Punch>.
              </h1>
              <p style={{
                fontSize: 19, lineHeight: '30px', color: 'var(--ink-soft)',
                maxWidth: 520, margin: '0 0 32px',
              }}>
                Clean books. Accurate numbers. Real communication.
              </p>
              <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
                <Button as="a" href="#contact">Book a Free Call</Button>
                <Button variant="secondary" as="a" href="#contact">Send a Message</Button>
              </div>
              <div style={{
                display: 'flex', gap: 18, alignItems: 'center',
                flexWrap: 'wrap', color: 'var(--ink-soft)', fontSize: 14,
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Stars /> <b style={{ color: 'var(--ink)', fontWeight: 500 }}>Google · 5.0</b>
                </span>
                <span style={{ color: 'var(--ink-mute)' }}>·</span>
                <Check>Intuit Certified</Check>
                <span style={{ color: 'var(--ink-mute)' }}>·</span>
                <Check>QuickBooks ProAdvisor</Check>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 24, flexWrap: 'wrap' }}>
                <img src={(window.__resources && window.__resources.certIntuit) || "assets/cert-intuit.png"} alt="Intuit Bookkeeping Trained"
                  style={{ display: 'block', width: 110, height: 110 }} />
                <img src={(window.__resources && window.__resources.certLevel2) || "assets/cert-level2.png"} alt="QuickBooks ProAdvisor — Level 2 Certified"
                  style={{ display: 'block', width: 110, height: 110 }} />
                <img src={(window.__resources && window.__resources.certLevel1) || "assets/cert-level1.png"} alt="QuickBooks ProAdvisor — Level 1 Certified"
                  style={{ display: 'block', width: 110, height: 110 }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 320, height: 320, borderRadius: 999, overflow: 'hidden',
                border: '1px solid var(--border)', background: 'var(--bg-cream-soft)',
              }}>
                <img src={(window.__resources && window.__resources.khalidPhoto) || "assets/khalid-about.jpg"} alt="Khalid Bensmat — Bensmat Bookkeeping"
                  style={{ width: '100%', height: '100%', objectPosition: 'center 25%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

window.Hero = Hero;

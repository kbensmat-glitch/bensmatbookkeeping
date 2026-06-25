function CTA() {
  const isMobile = window.useIsMobile();
  return (
    <section style={{
      background: 'var(--bg-forest)',
      padding: isMobile ? '52px 0' : 'clamp(72px,10vw,120px) 0',
      color: 'var(--bg-cream)', textAlign: 'center',
    }}>
      <Container>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontSize: isMobile ? '28px' : 'clamp(36px,5vw,56px)',
          lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em',
          color: 'var(--bg-cream)', margin: isMobile ? '0 auto 28px' : '0 auto 40px', maxWidth: 600,
        }}>
          Every month you wait <Punch>costs you clarity</Punch>.
        </h2>
        <div style={{
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          gap: 10, justifyContent: 'center', alignItems: 'center',
        }}>
          <Button variant="forest" as="a" href="#contact"
            style={isMobile ? { width: '100%', maxWidth: 340, justifyContent: 'center', padding: '15px 22px' } : {}}>Book a Free Call</Button>
          <Button variant="ghost" as="a" href="#contact"
            style={isMobile ? { width: '100%', maxWidth: 340, justifyContent: 'center', padding: '14px 22px' } : {}}>Send a Message</Button>
        </div>
      </Container>
    </section>
  );
}

window.CTA = CTA;

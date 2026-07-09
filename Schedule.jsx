function Schedule() {
  const isMobile = window.useIsMobile();
  const ref = React.useRef(null);

  React.useEffect(() => {
    function init() {
      if (window.Calendly && ref.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/khalid-bensmatbookkeeping/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
          parentElement: ref.current,
        });
      }
    }
    if (window.Calendly) {
      init();
    } else {
      // Calendly script still loading — wait for it
      const script = document.querySelector('script[src*="calendly"]');
      if (script) script.addEventListener('load', init);
      return () => script && script.removeEventListener('load', init);
    }
  }, []);

  return (
    <Section id="schedule" eyebrow="Book a Call" background="var(--bg-cream-soft)">
      <h2 style={{
        fontFamily: 'var(--font-sans)', fontSize: isMobile ? '26px' : 'clamp(32px,4vw,44px)',
        lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.01em',
        color: 'var(--ink)', margin: '0 0 8px',
      }}>
        Pick a time that <Punch>works for you</Punch>.
      </h2>
      <p style={{
        fontSize: 15, color: 'var(--ink-soft)',
        margin: isMobile ? '0 0 28px' : '0 0 40px',
      }}>
        Free 30-minute intro call — no commitment, just a conversation about your books.
      </p>
      <div ref={ref} style={{ minWidth: 320, height: isMobile ? 660 : 700 }} />
    </Section>
  );
}

window.Schedule = Schedule;

// Sticky nav with cream backdrop-blur + mobile hamburger menu
const { useState: useStateNav, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [open, setOpen] = useStateNav(false);
  const isMobile = window.useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever we grow back to desktop.
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const NavLink = ({ href, children, block }) => {
    const [hover, setHover] = useStateNav(false);
    return (
      <a href={href}
         onClick={() => setOpen(false)}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           fontSize: block ? 16 : 14,
           color: hover ? 'var(--ink)' : 'var(--ink-soft)',
           textDecoration: 'none', transition: 'color 150ms var(--ease)',
           padding: block ? '10px 0' : 0,
           display: block ? 'block' : 'inline',
         }}>{children}</a>
    );
  };

  const cta = (
    <a href="mailto:khalid@bensmatbookkeeping.com" style={{
      background: 'var(--ink)', color: 'var(--bg-cream)',
      padding: '10px 16px', borderRadius: 999,
      fontSize: 13, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap',
    }}>Book a Free Call</a>
  );

  const links = ['services', 'pricing', 'about', 'schedule', 'contact'];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(244, 246, 250, 0.8)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: (scrolled || open) ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'border-color 250ms var(--ease)',
    }}>
      <Container style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px var(--container-pad)',
      }}>
        <a href="#top" onClick={() => setOpen(false)} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: 'var(--ink)',
        }}>
          <Logo size={28} />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>
            Bensmat Bookkeeping
          </span>
        </a>

        {isMobile ? (
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, padding: 0,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'var(--ink)', marginRight: -10,
            }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <NavLink key={l} href={'#' + l}>{l.charAt(0).toUpperCase() + l.slice(1)}</NavLink>
            ))}
            {cta}
          </div>
        )}
      </Container>

      {isMobile && open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'rgba(244, 246, 250, 0.96)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}>
          <Container style={{
            padding: '12px var(--container-pad) 20px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {links.map(l => (
              <NavLink key={l} href={'#' + l} block>{l.charAt(0).toUpperCase() + l.slice(1)}</NavLink>
            ))}
            <div style={{ marginTop: 12 }}>{cta}</div>
          </Container>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;

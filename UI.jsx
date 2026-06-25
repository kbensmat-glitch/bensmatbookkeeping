// UI primitives — Button, Eyebrow, Punch, Stars, Check, Logo, Container, Section
const { useState } = React;

// Responsive helper: true when viewport is phone-width.
function useIsMobile(bp = 760) {
  const get = () => typeof window !== 'undefined' ? window.innerWidth <= bp : false;
  const [mobile, setMobile] = React.useState(get);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width:' + bp + 'px)');
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on);
  }, [bp]);
  return mobile;
}
window.useIsMobile = useIsMobile;

function Button({ variant = 'primary', children, onClick, as = 'button', href, type, style: extraStyle }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '-0.005em',
    padding: '13px 22px',
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'background 150ms var(--ease), color 150ms var(--ease), transform 150ms var(--ease)',
    transform: press ? 'translateY(1px)' : 'translateY(0)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    border: 'none',
  };

  const variants = {
    primary: {
      background: hover ? 'var(--forest-deep)' : 'var(--forest)',
      color: 'var(--bg-cream)',
    },
    secondary: {
      background: hover ? 'var(--ink)' : 'transparent',
      color: hover ? 'var(--bg-cream)' : 'var(--ink)',
      border: '1px solid var(--ink)',
      padding: '12px 21px',
    },
    forest: {
      background: hover ? '#F4F6FA' : 'var(--gold)',
      color: 'var(--ink)',
    },
    ghost: {
      background: hover ? 'rgba(255,255,255,0.08)' : 'transparent',
      color: '#F4F6FA',
      border: '1px solid rgba(244,239,228,0.4)',
    },
  };

  const merged = { ...base, ...variants[variant], ...(extraStyle || {}) };

  const props = {
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick,
    type,
  };

  if (as === 'a') return <a href={href} {...props}>{children}</a>;
  return <button {...props}>{children}</button>;
}

function Eyebrow({ children, color = 'var(--ink-mute)' }) {
  return (
    <div style={{
      fontSize: 13, lineHeight: '16px', fontWeight: 500,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color,
    }}>{children}</div>
  );
}

function Punch({ children }) {
  return (
    <em style={{
      fontFamily: 'var(--font-italic)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontOpticalSizing: 'auto',
      letterSpacing: 0,
    }}>{children}</em>
  );
}

function Stars({ size = 14, color = 'var(--gold)' }) {
  return <span style={{ color, fontSize: size, letterSpacing: 1 }}>★★★★★</span>;
}

function Check({ children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--ink)' }}>
      <span style={{ color: 'var(--forest)', fontWeight: 700 }}>✓</span>
      {children}
    </span>
  );
}

function Logo({ size = 28, light = false }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      background: light ? 'var(--bg-cream)' : 'var(--forest)',
      color: light ? 'var(--bg-forest)' : 'var(--bg-cream)',
      display: 'grid', placeItems: 'center',
      fontWeight: 600, fontSize: size * 0.55, letterSpacing: '-0.02em',
      flexShrink: 0,
    }}>B</div>
  );
}

function Container({ children, style }) {
  return (
    <div style={{
      maxWidth: 'var(--container-max)', margin: '0 auto',
      padding: '0 var(--container-pad)', ...style,
    }}>{children}</div>
  );
}

function Section({ children, id, background, eyebrow, style }) {
  return (
    <section id={id} style={{
      background,
      padding: 'clamp(52px,8vw,120px) 0',
      scrollMarginTop: 64,
      ...style,
    }}>
      <Container>
        {eyebrow && <div style={{ marginBottom: 24 }}><Eyebrow>{eyebrow}</Eyebrow></div>}
        {children}
      </Container>
    </section>
  );
}

window.Button = Button;
window.Eyebrow = Eyebrow;
window.Punch = Punch;
window.Stars = Stars;
window.Check = Check;
window.Logo = Logo;
window.Container = Container;
window.Section = Section;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a, button');
    focusable?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return <header className="site-header">
    <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={42} height={42}/><span>{site.name}</span></Link>
    <p className="powered">Powered by StealthAgents</p>
    <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen((value) => !value)}><span>Menu</span><i aria-hidden="true"/></button>
    <nav ref={panelRef} id="primary-menu" className={open ? 'is-open' : ''} aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
  </header>;
}

export function Footer() {
  return <footer>
    <div className="footer-brand"><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={48} height={48}/><span>{site.name}</span></Link><p>Careful coordination for the recurring work around your people.</p><div className="parent-mark"><Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={132} height={34} loading="eager"/><strong>Powered by StealthAgents</strong></div></div>
    <div><h2>Explore</h2><nav className="footer-links" aria-label="Footer navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link></nav></div>
    <div><h2>Policies</h2><nav className="footer-links" aria-label="Policy navigation"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div>
    <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}

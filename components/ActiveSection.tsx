'use client';

import { useEffect, useState } from 'react';

type Item = { id: string; label: string };

export function ActiveSection({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const nodes = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);
  return <nav className="toc" aria-label="On this page"><h2>On this page</h2>{items.map((item) => <a className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined} href={`#${item.id}`} onClick={() => setActive(item.id)} key={item.id}>{item.label}</a>)}</nav>;
}

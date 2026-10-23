import Image from 'next/image';
import type { ReactNode } from 'react';
import { site } from '@/lib/site';

type PageHeroBaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

type PageHeroProps = PageHeroBaseProps & (
  | { image: string; imageAlt: string }
  | { image?: never; imageAlt?: never }
);

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  const media = image === undefined
    ? { src: site.heroImage, alt: site.heroAlt }
    : { src: image, alt: imageAlt };

  return <header className="page-hero split-page-hero">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
    <Image src={media.src} alt={media.alt} width={1200} height={630} priority />
  </header>;
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ActiveSection } from '@/components/ActiveSection';
import { MobileToc } from '@/components/MobileToc';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const fallbackImages = site.services.map((service) => service.heroImage);
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = blogBySlug(slug); return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { images: [post.thumbnail || fallbackImages[blogPosts.findIndex((item) => item.slug === post.slug) % fallbackImages.length]] } } : {}; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);
  const image = post.thumbnail || fallbackImages[blogPosts.findIndex((item) => item.slug === post.slug) % fallbackImages.length];
  const toc = [...post.sections.map((section) => ({ id: slugify(section.heading), label: section.heading })), { id: 'common-questions', label: 'Common questions' }, { id: 'next-step', label: 'Next step' }];
  return <main id="main-content"><header className="article-hero"><div><p className="eyebrow">{post.category} field note</p><h1>{post.title}</h1><p className="dek">{post.description}</p><p className="meta">{site.name} Editorial Team · <time dateTime={post.publishedAt}>{`Published ${new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${post.publishedAt}T00:00:00Z`))}`}</time> · {post.readTime}</p></div><Image src={image} alt={`Editorial illustration for ${post.title}`} width={1200} height={630} priority/></header>
    <section className="article-layout content-wrap"><MobileToc items={toc}/><article className="article-body">{post.sections.map((section, index) => <section key={section.heading} id={slugify(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 2 && <p>Use the <Link href={post.internalService}>related service scope</Link> to connect these ideas to a practical role boundary.</p>}{index === 4 && <p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance your team can use when checking workflow assumptions.</p>}</section>)}<section id="common-questions"><h2>Common questions answered</h2>{post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section><section id="next-step"><h2>Build the next handoff carefully</h2><p>Bring one recurring workflow, its approved sources, and its review owner. We can help you define where coordination begins and where accountable judgment remains.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></section></article>
      <aside className="article-sidebar" data-toc-label="On this page"><ActiveSection items={toc}/><section><h2>Article context</h2><dl><div><dt>Publisher</dt><dd>{site.name} Editorial Team</dd></div><div><dt>Topic</dt><dd>{post.category}</dd></div><div><dt>Reading time</dt><dd>{post.readTime}</dd></div></dl></section><section><h2>Related reading</h2>{related.length ? related.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.title}</Link>) : <Link href={post.internalSibling}>Continue to a related workflow</Link>}</section><section><h2>Apply the guidance</h2><p>Connect the operating ideas in this article to a focused support scope.</p><Link href={post.internalService}>View the related service</Link></section></aside>
    </section>
  </main>;
}

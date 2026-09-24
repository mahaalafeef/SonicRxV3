'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'

const navItems = [
  ['Technology', 'technology'],
  ['Leadership', 'leadership'],
  ['Vision', 'vision'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="SonicRx home">
          <span className="brandMark"><span /></span>
          <span>SONIC<span>RX</span></span>
        </a>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /> <span /> <span />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>Connect</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroGlow" />
        <div className="heroContent">
          <p className="eyebrow">PRECISION DELIVERY · INTELLIGENT THERAPEUTICS</p>
          <h1>Delivering therapy<br /><em>where it matters.</em></h1>
          <p className="heroText">
            SonicRx is building smart, site-responsive drug delivery technologies designed to improve how therapeutic payloads reach disease tissue.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#technology">Explore the technology <span>↘</span></a>
            <a className="button ghost" href="#leadership">Meet the team</a>
          </div>
        </div>
        <div className="orbital" aria-hidden="true">
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" /><div className="core" />
          <div className="particle p1" /><div className="particle p2" /><div className="particle p3" />
        </div>
        <div className="scrollHint">SCROLL <span>↓</span></div>
      </section>

      <section id="technology" className="section technologySection">
        <Reveal>
          <div className="sectionIntro">
            <p className="eyebrow">THE SONICRX PLATFORM</p>
            <h2>Smarter delivery.<br /><span>More control.</span></h2>
            <p>We are developing a technology platform that connects nanoparticle design, therapeutic payloads, and externally controlled activation to create more precise delivery strategies.</p>
          </div>
        </Reveal>
        <div className="featureGrid">
          {[
            ['01', 'Intelligent design', 'Data-guided optimization of particle characteristics, ligands, payloads, and release behavior.'],
            ['02', 'Site-responsive activation', 'External energy can be used to activate delivery at the desired location, supporting spatial control.'],
            ['03', 'Multi-payload potential', 'A platform designed to support RNA, small molecules, proteins, and other therapeutic payloads.'],
          ].map(([number, title, text]) => (
            <Reveal key={number} className="featureCard">
              <span className="cardNumber">{number}</span>
              <div className="cardIcon">✦</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="vision" className="statementSection">
        <Reveal>
          <p className="eyebrow">OUR VISION</p>
          <blockquote>“Therapy should be designed not only for what it carries, but for <em>where and when it acts.</em>”</blockquote>
          <p className="statementSub">SonicRx aims to advance precision delivery by combining responsive nanotechnology with data-driven optimization.</p>
        </Reveal>
      </section>

      <section id="leadership" className="section leadershipSection">
        <Reveal>
          <div className="sectionIntro centered">
            <p className="eyebrow">LEADERSHIP</p>
            <h2>Science with<br /><span>an entrepreneurial drive.</span></h2>
          </div>
        </Reveal>
        <div className="teamGrid">
          <Reveal className="personCard">
            <div className="portraitPlaceholder mahaPortrait">MA</div>
            <div className="personMeta"><span>CO-FOUNDER / SCIENTIFIC LEAD</span><h3>Dr. Maha Alafeef</h3><p>Bioengineer and postdoctoral researcher focused on diagnostic and therapeutic nanotechnology, with a background spanning biomaterials, cancer gene therapy, and technology translation.</p></div>
          </Reveal>
          <Reveal className="personCard">
            <div className="portraitPlaceholder hayesPortrait">DH</div>
            <div className="personMeta"><span>CO-FOUNDER / ADVISOR</span><h3>Dr. Daniel Hayes</h3><p>Research leader in biomedical engineering whose mentorship and collaborative research environment support the development of next-generation therapeutic technologies.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="founderSection">
        <Reveal className="founderCopy">
          <p className="eyebrow">THE TEAM</p>
          <h2>From discovery<br />to translation.</h2>
          <p>Our work sits at the intersection of biomedical engineering, nanotechnology, therapeutics, and data-driven innovation. The goal is to transform promising laboratory concepts into technologies with a clear path toward real-world impact.</p>
          <a href="#contact" className="textLink">Start a conversation <span>↗</span></a>
        </Reveal>
        <Reveal className="metrics">
          <div><strong>01</strong><span>Precision<br />delivery</span></div>
          <div><strong>02</strong><span>Responsive<br />nanotechnology</span></div>
          <div><strong>03</strong><span>Data-driven<br />optimization</span></div>
        </Reveal>
      </section>

      <section id="contact" className="contactSection">
        <Reveal>
          <p className="eyebrow">CONNECT WITH SONICRX</p>
          <h2>Let’s explore<br /><em>what’s possible.</em></h2>
          <p>Interested in collaborating, learning more about the technology, or discussing opportunities?</p>
          <a className="button primary" href="mailto:hello@sonicrx.com">Contact SonicRx <span>↗</span></a>
          <p className="contactNote">Replace <strong>hello@sonicrx.com</strong> with your company email in <code>app/page.tsx</code>.</p>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="brand small"><span className="brandMark"><span /></span><span>SONIC<span>RX</span></span></div>
        <p>© {new Date().getFullYear()} SonicRx. All rights reserved.</p>
        <p>Building the future of precision delivery.</p>
      </footer>
    </main>
  )
}

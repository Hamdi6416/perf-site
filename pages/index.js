import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Performance Marketing 101</title>
        <meta name="description" content="Interactive guide to performance marketing & customer acquisition" />
      </Head>

      <header>
        <h1>Performance & Acquisition Command Center</h1>
        <p>Digital ad spend to hit <strong>$646 B by 2024</strong>. Learn how to grab your slice.</p>
      </header>

      <section className="card">
        <h2>What is Performance Marketing?</h2>
        <p>Pay only when a desired action is completed (sale, lead, download).</p>
        <ul>
          <li>Retailers set goals & pay after results</li>
          <li>Affiliates drive traffic via blogs, influencers, coupons</li>
          <li>Networks track everything (CJ, AWIN, Impact…)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Key Metrics</h2>
        <ul>
          <li><b>CPA / PPS</b> – Cost per acquisition</li>
          <li><b>PPL</b> – Cost per lead</li>
          <li><b>LTV : CAC</b> – ideal ratio is 3 : 1</li>
        </ul>
      </section>

      <section className="card">
        <h2>Top Acquisition Tools</h2>
        <ol>
          <li>Contentsquare – session replays & funnels</li>
          <li>Google Analytics 4 – traffic attribution</li>
          <li>Unbounce – landing-page builder</li>
          <li>HubSpot – CRM & automation</li>
          <li>Optimizely – A/B testing</li>
        </ol>
      </section>

      <footer>
        <p>Copy-paste this site, edit, and redeploy anywhere.</p>
      </footer>
    </>
  );
}

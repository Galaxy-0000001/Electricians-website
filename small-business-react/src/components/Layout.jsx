import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';
import ScrollManager from './ScrollManager';
import PageTransition from './PageTransition';

/** Shared frame for every page: header, page content, footer and floating buttons. */
export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageTransition />
      </main>
      <Footer />
      <WhatsAppButton floating />
      <BackToTop />
    </>
  );
}

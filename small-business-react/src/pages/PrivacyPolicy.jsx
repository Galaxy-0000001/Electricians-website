import { Link } from 'react-router-dom';
import config from '../config/businessConfig';
import useSeo from '../hooks/useSeo';
import PageHeader from '../components/PageHeader';
import { formatAddress, mailLink, telLink } from '../utils/links';

// NOTE: This is a general-purpose starting template, not legal advice.
// Ask each client to review it (or have a lawyer review it) before launch,
// especially if they collect more data than this simple contact form does.

export default function PrivacyPolicy() {
  const { contact, legal } = config;
  useSeo({
    title: 'Privacy Policy',
    description: `How ${config.name} collects, uses and protects the information you share through this website.`,
  });

  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" text={`Last updated: ${legal.lastUpdated}`} />

      <section className="section">
        <div className="container container--narrow prose">
          <p>
            This Privacy Policy explains how <strong>{legal.legalName}</strong> ("we", "us", "our") handles personal
            information collected through this website. We keep things simple: we only collect what we need to respond
            to your enquiry and provide our services.
          </p>

          <h2>1. Information we collect</h2>
          <p>When you fill in our contact form, call us or message us on WhatsApp, we may receive:</p>
          <ul>
            <li>Your name, phone number and (optionally) email address</li>
            <li>The service you're interested in and the details you write in your message</li>
            <li>Your address or area, if you share it so we can visit or quote</li>
          </ul>
          <p>
            Like most websites, our hosting provider may automatically record basic technical data such as your IP
            address, browser type and the pages you visit, for security and performance purposes.
          </p>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To reply to your enquiry and give you a quote</li>
            <li>To schedule, carry out and follow up on the work you book</li>
            <li>To keep basic records for accounting, warranty and legal purposes</li>
          </ul>
          <p>We do not sell, rent or trade your personal information, and we do not send marketing spam.</p>

          <h2>3. Third-party services we use</h2>
          <p>This website relies on a few trusted services, each with its own privacy policy:</p>
          <ul>
            <li>
              <strong>Formspree</strong> — delivers contact-form messages to our inbox.
            </li>
            <li>
              <strong>WhatsApp (Meta)</strong> — if you choose to chat with us on WhatsApp.
            </li>
            <li>
              <strong>Google Maps</strong> — shows our location on the map. Google may set cookies when the map loads.
            </li>
            <li>
              <strong>Google Fonts</strong> — provides the typefaces used on this site.
            </li>
            <li>
              <strong>Our hosting provider</strong> — serves this website securely over HTTPS.
            </li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            Our own website does not use advertising or tracking cookies. Embedded services such as Google Maps may set
            their own cookies, which you can control through your browser settings.
          </p>

          <h2>5. How long we keep your data</h2>
          <p>
            We keep enquiry details only as long as needed to respond and to provide our services, and job records for
            as long as required for warranty, tax and legal obligations. After that, we delete them.
          </p>

          <h2>6. Your choices and rights</h2>
          <p>
            You can ask us at any time to see, correct or delete the personal information we hold about you, or to stop
            contacting you. Where applicable law (such as India's Digital Personal Data Protection Act, 2023) gives you
            additional rights, we will respect them.
          </p>

          <h2>7. Security</h2>
          <p>
            This site is served over an encrypted HTTPS connection, and we limit access to your information to the
            people who need it to serve you.
          </p>

          <h2>8. Contact us about privacy</h2>
          <p>For any privacy question or request, contact:</p>
          <address>
            <strong>{legal.legalName}</strong>
            <br />
            {formatAddress(contact.address)}
            <br />
            Email: <a href={mailLink(contact.email, 'Privacy request')}>{contact.email}</a>
            <br />
            Phone: <a href={telLink(contact.phone)}>{contact.phoneDisplay}</a>
          </address>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be on this page, with the
            "last updated" date at the top.
          </p>

          <p>
            <Link to="/contact">Go to the contact page →</Link>
          </p>
        </div>
      </section>
    </>
  );
}

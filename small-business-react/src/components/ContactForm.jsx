import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import config from '../config/businessConfig';
import { telLink, whatsappLink } from '../utils/links';
import SocialIcon from './SocialIcon';

const EMPTY_FORM = { name: '', phone: '', email: '', service: '', message: '', consent: false };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!phoneDigits) errors.phone = 'Please enter your phone number.';
  else if (phoneDigits.length < 10 || phoneDigits.length > 13) errors.phone = 'Please enter a valid phone number.';

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, or leave it blank.';
  }
  if (values.message.trim().length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  if (!values.consent) errors.consent = 'Please agree so we can contact you about your enquiry.';
  return errors;
}

function buildWhatsAppMessage(values) {
  return [
    `Hi ${config.shortName}, I'd like to make an enquiry.`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email && `Email: ${values.email}`,
    values.service && `Service: ${values.service}`,
    `Message: ${values.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Contact form with validation.
 * Sends to Formspree when `formspreeEndpoint` is set in the config (free plan: 50 submissions/month).
 * If it isn't set yet, the visitor can send the same details on WhatsApp instead.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | not-configured
  const formRef = useRef(null);
  const endpoint = config.formspreeEndpoint;

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    const next = { ...values, [name]: type === 'checkbox' ? checked : value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const markTouched = (event) => {
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, message: true, consent: true });

    if (Object.keys(found).length > 0) {
      formRef.current.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    if (!endpoint) {
      setStatus('not-configured');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      });
      if (!response.ok) throw new Error(`Form service responded with ${response.status}`);
      setStatus('success');
      setValues(EMPTY_FORM);
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: updateField,
    onBlur: markTouched,
    'aria-invalid': touched[name] && errors[name] ? 'true' : undefined,
    'aria-describedby': touched[name] && errors[name] ? `contact-${name}-error` : undefined,
  });

  const errorText = (name) =>
    touched[name] && errors[name] ? (
      <span className="form__error" id={`contact-${name}-error`}>
        {errors[name]}
      </span>
    ) : null;

  if (status === 'success') {
    return (
      <div className="form-status form-status--success" role="status">
        <CircleCheck size={40} aria-hidden="true" />
        <h3>Thank you, we've received your enquiry.</h3>
        <p>
          Our team will call you back within {config.responseTime}. For anything urgent, call{' '}
          <a href={telLink(config.contact.phone)}>{config.contact.phoneDisplay}</a>.
        </p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      {/* Spam trap for bots — real visitors never see this field. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value={`New website enquiry — ${config.name}`} />

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="contact-name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          {errorText('name')}
        </div>
        <div className="form__field">
          <label htmlFor="contact-phone">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" required placeholder="98765 43210" {...fieldProps('phone')} />
          {errorText('phone')}
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="contact-email">
            Email <span className="form__optional">(optional)</span>
          </label>
          <input type="email" autoComplete="email" {...fieldProps('email')} />
          {errorText('email')}
        </div>
        <div className="form__field">
          <label htmlFor="contact-service">Service needed</label>
          <select {...fieldProps('service')}>
            <option value="">Select a service</option>
            {config.services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="contact-message">
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <textarea rows={5} required placeholder="Tell us about the job, your area and a good time to call." {...fieldProps('message')} />
        {errorText('message')}
      </div>

      <div className="form__field form__field--checkbox">
        <input
          type="checkbox"
          id="contact-consent"
          name="consent"
          checked={values.consent}
          onChange={updateField}
          onBlur={markTouched}
          aria-invalid={touched.consent && errors.consent ? 'true' : undefined}
          aria-describedby={touched.consent && errors.consent ? 'contact-consent-error' : undefined}
        />
        <label htmlFor="contact-consent">
          I agree that {config.shortName} may contact me about this enquiry. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </label>
        {errorText('consent')}
      </div>

      {status === 'error' && (
        <div className="form-status form-status--error" role="alert">
          <CircleAlert size={20} aria-hidden="true" />
          <p>
            Sorry, your message couldn't be sent. Please check your internet connection and try again, or reach us on
            WhatsApp.
          </p>
        </div>
      )}

      {status === 'not-configured' && (
        <div className="form-status form-status--info" role="alert">
          <CircleAlert size={20} aria-hidden="true" />
          <div>
            <p>Our online form is being set up. Please send these details on WhatsApp instead and we'll reply quickly.</p>
            <a
              href={whatsappLink(config.contact.whatsapp, buildWhatsAppMessage(values))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--sm"
            >
              <SocialIcon name="whatsapp" size={16} /> Send on WhatsApp
            </a>
          </div>
        </div>
      )}

      <div className="form__actions">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <LoaderCircle size={18} className="spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" /> Send enquiry
            </>
          )}
        </button>
        <p className="form__note">We usually reply within {config.responseTime}.</p>
      </div>
    </form>
  );
}

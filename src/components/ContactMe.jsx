import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, Mail, Github, Linkedin } from 'lucide-react';

const ContactMe = () => {
const navigate = useNavigate();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);

const handleSubmit = async (e) => {
e.preventDefault();

if (!name.trim() || !email.trim() || !message.trim()) {
  setSubmitStatus('validation');
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
  setSubmitStatus('validation');
  return;
}

setIsSubmitting(true);
setSubmitStatus(null);

const formspreeEndpoint = 'https://formspree.io/f/mvgqaolj';

try {
  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    }),
  });

  if (response.ok) {
    setSubmitStatus('success');
    setName('');
    setEmail('');
    setMessage('');
  } else {
    setSubmitStatus('error');
  }
} catch {
  setSubmitStatus('error');
} finally {
  setIsSubmitting(false);
}

};

const contactLinks = [
{
label: 'WhatsApp',
description: 'For a quick conversation',
href: 'https://wa.me/254790463858',
display: 'Message on WhatsApp',
icon: MessageCircle,
external: true,
},
{
label: 'Email',
description: 'For enquiries and commissions',
href: 'mailto:josephbarasa622@gmail.com',
display: '[josephbarasa622@gmail.com](mailto:josephbarasa622@gmail.com)',
icon: Mail,
external: false,
},
{
label: 'LinkedIn',
description: 'Professional connections',
href: 'https://www.linkedin.com/in/joseph-barasa-0270972a9/',
display: 'View LinkedIn profile',
icon: Linkedin,
external: true,
},
{
label: 'GitHub',
description: 'Explore my development work',
href: 'https://github.com/JosephBarasa',
display: 'View GitHub profile',
icon: Github,
external: true,
},
];

return ( <section className="min-h-screen bg-[#faf9f6] px-4 py-20 text-neutral-900 sm:px-6 sm:py-24 md:py-28"> <div className="page-container max-w-6xl">
{/* Page introduction */} <div className="mb-14 max-w-3xl sm:mb-16"> <div className="mb-5 flex items-center gap-3"> <span className="h-px w-10 bg-[#8a735c]" /> <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
Get in touch </p> </div>

      <h1 className="font-serif text-5xl font-normal leading-tight tracking-tight sm:text-6xl md:text-7xl">
        Have something
        <br />
        <span className="italic text-[#8a735c]">in mind?</span>
      </h1>

      <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
        Whether it is a creative project, an art commission, a software
        opportunity, or a quiet idea you are still figuring out, I would
        love to hear from you.
      </p>
    </div>

    {/* Contact content */}
    <div className="grid gap-12 border-t border-[#e5e2dc] pt-10 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:pt-14">
      {/* Contact form */}
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8a735c]">
          Send a message
        </p>

        <h2 className="font-serif text-3xl font-normal sm:text-4xl">
          Let's start a conversation.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-500">
          Tell me a little about what you have in mind. I'll get back to
          you as soon as I can.
        </p>

        {/* Submission feedback */}
        {submitStatus === 'success' && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
          >
            Your message has been sent successfully. Thank you for reaching
            out — I'll respond as soon as I can.
          </div>
        )}

        {submitStatus === 'validation' && (
          <div
            role="alert"
            className="mt-6 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
          >
            Please enter your name, a valid email address, and a message.
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            role="alert"
            className="mt-6 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
          >
            Your message could not be sent. Please try again or contact me
            directly using one of the options provided.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-neutral-700"
            >
              Your name <span className="text-[#8a735c]">*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              disabled={isSubmitting}
              placeholder="Enter your name"
              className="w-full border border-[#e5e2dc] bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-[#8a735c] focus:outline-none focus:ring-1 focus:ring-[#8a735c] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-neutral-700"
            >
              Email address <span className="text-[#8a735c]">*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
              disabled={isSubmitting}
              placeholder="you@example.com"
              className="w-full border border-[#e5e2dc] bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-[#8a735c] focus:outline-none focus:ring-1 focus:ring-[#8a735c] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-neutral-700"
            >
              Your message <span className="text-[#8a735c]">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={5000}
              disabled={isSubmitting}
              placeholder="Tell me what you have in mind..."
              className="w-full resize-y border border-[#e5e2dc] bg-white px-4 py-3 text-sm leading-7 text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-[#8a735c] focus:outline-none focus:ring-1 focus:ring-[#8a735c] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-neutral-900 px-7 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#8a735c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a735c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? 'Sending message...' : 'Send message'}
            {!isSubmitting && <ArrowUpRight size={17} aria-hidden="true" />}
          </button>
        </form>
      </div>

      {/* Alternative contact methods */}
      <aside className="border-t border-[#e5e2dc] pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8a735c]">
          Elsewhere
        </p>

        <h2 className="font-serif text-3xl font-normal sm:text-4xl">
          Find me beyond the form.
        </h2>

        <p className="mt-4 text-sm leading-7 text-neutral-500">
          Prefer another way to connect? Reach me through any of these
          channels.
        </p>

        <div className="mt-8 divide-y divide-[#e5e2dc]">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 py-5 first:pt-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e5e2dc] text-[#8a735c] transition-colors group-hover:border-[#8a735c]">
                  <Icon size={18} aria-hidden="true" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-neutral-900">
                    {contact.label}
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-neutral-500">
                    {contact.description}
                  </span>

                  <span className="mt-2 block break-words text-sm text-neutral-600 transition-colors group-hover:text-[#8a735c]">
                    {contact.display}
                  </span>
                </span>

                {contact.external && (
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-neutral-400 transition-colors group-hover:text-[#8a735c]"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="mt-8 border-t border-[#e5e2dc] pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Based in
          </p>
          <p className="mt-2 text-sm text-neutral-700">Bungoma, Kenya</p>
        </div>
      </aside>
    </div>

    {/* Back navigation */}
    <div className="mt-14 border-t border-[#e5e2dc] pt-7">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-[#8a735c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a735c]"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Go back
      </button>
    </div>
  </div>
</section>

);
};

export default ContactMe;

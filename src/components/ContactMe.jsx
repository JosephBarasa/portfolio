import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ useNavigate replaces useHistory in v6
import { ArrowLeft, MessageCircle } from 'lucide-react';

const ContactMe = () => {
  const navigate = useNavigate(); // ✅ Setup navigation

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formspree_endpoint = 'https://formspree.io/f/mvgqaolj';

    try {
      const response = await fetch(formspree_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-neutral-950 py-16 flex flex-col items-center justify-center px-4">
      <div className="page-container max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light text-center text-neutral-50 mb-2">
          Talk To Me
        </h1>
        <p className="text-sm text-neutral-400 text-center mb-10 max-w-md mx-auto">
          Whether it is a project, a commission, or a quiet idea you are still figuring out — I would love to hear it.
        </p>
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl shadow-[0_22px_60px_rgba(15,23,42,0.7)] grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-10 backdrop-blur">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-neutral-50 mb-4">Share Your Thoughts</h2>
            {submitStatus === 'success' && (
              <p className="text-emerald-300 font-medium mb-4">
                Your note has found its place — I’ll respond soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 font-medium mb-4">
                Oops! Something went wrong. Please try again later or contact me directly.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium tracking-wide text-neutral-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/40 text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/80"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-wide text-neutral-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/40 text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/80"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium tracking-wide text-neutral-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/40 text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/80 resize-y"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full border border-neutral-100 bg-neutral-50 text-neutral-900 text-sm font-medium hover:bg-white hover:border-white transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Other contact options */}
          <div className="md:border-l md:border-neutral-800 md:pl-10">
            <h2 className="text-2xl font-light text-neutral-50 mb-4">Find Me Beyond The Form</h2>
            <div className="space-y-3">
              <p className="text-neutral-400 text-sm">
                Direct Contacts :
              </p>

              <div>
                <h3 className="text-sm font-medium text-neutral-100">WhatsApp</h3>
                <a
                  href="https://wa.me/254790463858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-200 hover:text-white hover:underline text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-100">Email</h3>
                <a href="mailto:josephbarasa622@gmail.com" className="text-neutral-200 hover:text-white hover:underline text-sm">
                  josephbarasa622@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-100">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/joseph-barasa-0270972a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white hover:underline text-sm"
                >
                  linkedin.com/in/joseph-barasa-0270972a9
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-100">GitHub</h3>
                <a
                  href="https://github.com/JosephBarasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white hover:underline text-sm"
                >
                  github.com/JosephBarasa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)} // ✅ Correct way in v6
            className="flex items-center text-neutral-300 hover:text-white hover:underline text-sm transition"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span className="text-md">Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

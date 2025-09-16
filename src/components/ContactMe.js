import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // ✅ Import useHistory for navigation
import { ArrowLeft, MessageCircle } from 'lucide-react'; // ✅ Added WhatsApp icon

const ContactMe = () => {
    const history = useHistory(); // ✅ Setup navigation

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
        <section className="min-h-screen bg-gray-300 py-16 flex flex-col items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-6">
                   Words as Bridges
                </h1>
                <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                    Have an idea, a vision, or simply a hello?  
                    Reach out — let’s turn imagination into creation.
                </p>

                <div className="bg-gray-400 p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-light text-gray-800 mb-4">Share Your Thoughts</h2>
                        {submitStatus === 'success' && (
                            <p className="text-green-900 font-medium mb-4">
                                Your note has found its place — I’ll respond soon.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600 font-medium mb-4">
                                Oops! Something went wrong. Please try again later or contact me directly.
                            </p>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows="3"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md resize-y"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 border border-black text-black font-light hover:bg-black hover:text-white transition-all duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className="md:border-l md:border-gray-200 md:pl-10">
                        <h2 className="text-2xl font-light text-gray-800 mb-4">Find Me Beyond The Form</h2>
                        <div className="space-y-3">
                            <p className="text-gray-600">
                                Here are my direct contact points :
                            </p>

                            <div>
                                <h3 className="text-lg font-medium text-gray-800">WhatsApp</h3>
                                <a
                                    href="https://wa.me/254790463858"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-800 hover:underline"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Message on WhatsApp
                                </a>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                <a href="mailto:josephbarasa622@gmail.com" className="text-gray-800 hover:underline">
                                    josephbarasa622@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/joseph-barasa-0270972a9/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:underline"
                                >
                                    linkedin.com/in/joseph-barasa-0270972a9
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">GitHub</h3>
                                <a
                                    href="https://github.com/JosephBarasa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:underline"
                                >
                                    github.com/JosephBarasa
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Back Button at the Bottom */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => history.goBack()}
                        className="flex items-center text-black hover:underline transition"
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
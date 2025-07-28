import { useState } from 'react';
// Removed: import { Link } from 'react-router-dom'; // No longer used in this component's JSX

const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        // basic client-side validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setSubmitStatus('error');
            console.error('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSubmitStatus('error');
            console.error('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        const formspree_endpoint = 'https://formspree.io/f/mvgqaolj'; // REMEMBER TO REPLACE WITH YOUR ACTUAL FORMSPREE ENDPOINT

        try {
            const response = await fetch(formspree_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                console.log('Form submitted successfully');
            } else {
                const errorData = await response.json();
                setSubmitStatus('error');
                console.error('Form submission failed:', errorData);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Network error during form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen bg-gray-300 py-16 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                    Have a question, a project idea, or just want to say hello? Fill out the form below or reach out directly!
                </p>

                <div className="bg-gray-400 p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Column: Contact Form */}
                    <div>
                        <h2 className="text-2xl font-light text-gray-800 mb-4">Send Me a Message</h2>

                        {/* --- Submission Status Feedback (shown after submission attempt) --- */}
                        {submitStatus === 'success' && (
                            <p className="text-green-600 font-medium mb-4">
                                Thank you for your message! I'll get back to you soon.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600 font-medium mb-4">
                                Oops! Something went wrong. Please try again later or contact me directly.
                            </p>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
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
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Email Field */}
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
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Message Field */}
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
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black transition duration-150 ease-in-out resize-y"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Alternative Contact Info */}
                    <div className="md:border-l md:border-gray-200 md:pl-10">
                        <h2 className="text-2xl font-light text-gray-800 mb-4">Or Connect Directly</h2>
                        <div className="space-y-3">
                            <p className="text-gray-600">
                                Prefer to reach out another way? Here are my direct contact points:
                            </p>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                <a
                                    href="mailto:josephbarasa622@gmail.com"
                                    className="text-gray-800 hover:text-black hover:underline transition-colors duration-300"
                                >
                                    josephbarasa622@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/joseph-barasa-0270972a9/" // 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:text-black hover:underline transition-colors duration-300"
                                >
                                    https://www.linkedin.com/in/joseph-barasa-0270972a9/
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">GitHub</h3>
                                <a
                                    href="https://github.com/JosephBarasa" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:text-black hover:underline transition-colors duration-300"
                                >
                                    github.com/JosephBarasa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
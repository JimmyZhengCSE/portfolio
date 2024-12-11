import React, { useEffect } from "react";

function Contact() {
    useEffect( () => {
        document.title = "Contact Page";
    }, []);

    return (
        <div className="contact-container max-w-3xl mx-auto p-6 mt-8">
        <div className="text-4xl font-semibold text-center mb-6">Contact</div>
        <p className="text-lg text-gray-700 text-center mb-8 dark:text-white">
            Have any questions or inquiries? Don't hesitate to reach out! You can find me on these platforms.
        </p>

        <div className="space-y-4">
            {/* LinkedIn */}
            <a 
                className="normal-link flex items-center justify-center p-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                href="https://www.linkedin.com/in/jimmy-zheng-16983724a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
            >
                Linkedin
            </a>

        </div>

        {/* Send Email */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center mb-4 dark:text-black">Or leave a message:</h3>
            <form action="https://formspree.io/f/xpwzeyno" method="POST" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                        required
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
        </div>

    );
}

export default Contact;

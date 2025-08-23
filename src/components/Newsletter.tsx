import React from 'react';
export function Newsletter() {
  return <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest collections, exclusive offers, and
            style tips.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
            <button type="submit" className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>;
}
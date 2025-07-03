import React from 'react';

const ContactSection = () => {
  return (
    <>
      <div className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">Contact With Me</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-10">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="p-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="p-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Tell me about your project"
              className="p-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            ></textarea>
          </form>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;

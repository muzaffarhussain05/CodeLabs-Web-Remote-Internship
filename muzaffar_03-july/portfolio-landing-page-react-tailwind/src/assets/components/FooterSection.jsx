import React from 'react'

const FooterSection = () => {
  return (
    <>
    <footer className="bg-[#0a0e2a] text-white py-16 px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
    
    <div>
      <h2 className="text-2xl font-bold mb-4">Let's Talk!</h2>
      <h3 className="text-lg font-semibold text-gray-300 mb-2">Contact Info</h3>
      <ul className="text-gray-400 space-y-1">
        <li className="transition-colors duration-300 hover:text-white">muzaffar.dev@email.com</li>
        <li className="transition-colors duration-300 hover:text-white">Karachi, Pakistan</li>
        <li className="transition-colors duration-300 hover:text-white">+92 300 1234567</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="text-gray-400 space-y-1">
        {['Web Development', 'Frontend Engineering', 'UI/UX Design', 'Performance Optimization'].map(service => (
          <li key={service}>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              {service}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Projects</h3>
      <ul className="text-gray-400 space-y-1">
        {['Portfolio Website', 'Job Portal', 'Restaurant App', 'Plant Care AI'].map(project => (
          <li key={project}>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              {project}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Social Links</h3>
      <ul className="text-gray-400 space-y-1">
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="mailto:muzaffar.dev@email.com"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Email Me
          </a>
        </li>
      </ul>
    </div>

  </div>

  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm transition-colors duration-300 hover:text-gray-300">
    &copy; {new Date().getFullYear()} Muzaffar Hussain. All rights reserved.
  </div>
</footer>

    </>
  )
}

export default FooterSection
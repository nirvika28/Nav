import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/navostra-official-logo.png" alt="Navostra Logo" className="w-16 h-10 object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Navigating your path to success with innovative solutions and strategic expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Core Offerings
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Creative & Branding Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-white transition-colors">
                  Our Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="https://www.linkedin.com/company/navostra-edunitive-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Navostra-Edunitive-Technologies/61577076234418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/navostraoffical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:founder.alphastrategix@gmail.com" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

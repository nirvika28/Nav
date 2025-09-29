import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/navostra-bg.png')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

      {/* Upper Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-3 relative z-20 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/navostra-official-logo.png"
                alt="Navostra Edunitive Technologies Logo"
                className="h-12 w-auto max-w-xs object-contain"
              />
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button variant="ghost" className="text-white hover:text-blue-200 font-medium">
                  Reach out to us
                </Button>
              </Link>
              <Link href="/demo">
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation with Dropdowns */}
      <nav className="bg-white/95 backdrop-blur-sm py-3 relative z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Navigation Links with Dropdowns */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Home
              </Link>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-lg border w-80">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <img
                          src="/educational-software-icon.jpg"
                          alt="Educational Software"
                          className="w-15 h-15 mx-auto mb-2 rounded-lg"
                        />
                        <Link
                          href="/products/educational-software"
                          className="text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          Educational Software
                        </Link>
                      </div>
                      <div className="text-center">
                        <img
                          src="/digital-solutions-icon.jpg"
                          alt="Digital Solutions"
                          className="w-15 h-15 mx-auto mb-2 rounded-lg"
                        />
                        <Link
                          href="/products/digital-solutions"
                          className="text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          Digital Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* About Us - Direct Link (no dropdown) */}
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                About Us
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-lg border w-80">
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <img
                          src="/consulting-services-icon.jpg"
                          alt="Consulting"
                          className="w-15 h-15 mx-auto mb-2 rounded-lg"
                        />
                        <Link href="/labs" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                          Our CORE offerings
                        </Link>
                      </div>
                      <div className="text-center">
                        <img
                          src="/software-development-icon.jpg"
                          alt="Development"
                          className="w-15 h-15 mx-auto mb-2 rounded-lg"
                        />
                        <Link
                          href="/services/itsols"
                          className="text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          IT Solutions
                        </Link>
                      </div>
                      <div className="text-center">
                        <img
                          src="/digital-transformation-icon.png"
                          alt="Digital Transformation"
                          className="w-15 h-15 mx-auto mb-2 rounded-lg"
                        />
                        <Link
                          href="/services/creative sold"
                          className="text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          Creative and branding solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Career at NET, Contact Us, and Feedback links */}
              <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Career at NET
              </Link>

              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Contact Us
              </Link>

              <Link
                href="/feedback"
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
              >
                Feedback
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block">
                  Providing Star-
                </span>
                <span className="bg-gradient-to-r from-teal-500 to-blue-700 bg-clip-text text-transparent block">
                  Class
                </span>
                <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent block">
                  Innovations in
                </span>
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent block">
                  Education &
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-teal-700 bg-clip-text text-transparent block">
                  Technology
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/labs">
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg border-0">
                  EXPLORE OUR LABS
                </Button>
              </Link>
              <Link href="/partners">
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold bg-transparent"
                >
                  PARTNER WITH US
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Empty space to let background image show */}
          <div className="relative flex items-center justify-center">
            {/* This space is intentionally left empty to showcase the background image */}
          </div>
        </div>
      </div>

      <Footer />

      {/* Contact Us Button - Bottom Right */}
      <Link href="/contact">
        <Button className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="font-semibold">Contact Us</span>
        </Button>
      </Link>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg">
          <div className="flex justify-around">
            <Link href="/">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-4">
                HOME
              </Button>
            </Link>
            <Link href="/products">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-3">
                PRODUCTS
              </Button>
            </Link>
            <Link href="/about">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-3">
                ABOUT
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full px-3">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

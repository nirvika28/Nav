import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  showContactButton?: boolean
}

export function PageLayout({ children, showContactButton = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-blue-300 to-blue-400 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-lg transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-20 bg-white/10 rounded-lg transform -rotate-6"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/15 rounded-lg transform rotate-45"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 py-3 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/navostra-official-logo.png"
                alt="Navostra Edunitive Technologies Logo"
                className="h-16 w-auto max-w-xs object-contain"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-teal-200 font-medium text-lg transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-white hover:text-teal-200 font-medium text-lg transition-colors">
                ABOUT US
              </Link>
              <Link href="/services" className="text-white hover:text-teal-200 font-medium text-lg transition-colors">
                SERVICES
              </Link>
              <Link href="/contact" className="text-white hover:text-teal-200 font-medium text-lg transition-colors">
                CONTACT
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      <Footer />

      {/* Contact Us Button - Bottom Right */}
      {showContactButton && (
        <Link href="/contact">
          <Button className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Contact Us</span>
          </Button>
        </Link>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg">
          <div className="flex justify-around">
            <Link href="/">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-4">
                HOME
              </Button>
            </Link>
            <Link href="/about">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-3">
                ABOUT
              </Button>
            </Link>
            <Link href="/services">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-3">
                SERVICES
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-full px-3">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-4">
            <Link href="/contact" className="text-sm hover:text-blue-200 transition-colors">
              Reach out to us
            </Link>
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg p-2 mr-3">
                <img
                  src="/navostra-logo-final.png"
                  alt="Navostra Logo"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                NAVOSTRA
              </div>
            </Link>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                              href="/products"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-blue-900">Our Products</div>
                              <p className="text-sm leading-tight text-blue-700">
                                Innovative educational technology solutions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/software"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
                          >
                            <div className="text-sm font-medium leading-none">Educational Software</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced software solutions for modern education
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/digital"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
                          >
                            <div className="text-sm font-medium leading-none">Digital Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comprehensive digital transformation tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none">
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[350px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-teal-100 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-teal-900">Our Services</div>
                            <p className="text-sm leading-tight text-teal-700">
                              Comprehensive solutions for educational institutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/consulting"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 hover:text-teal-600 focus:bg-teal-50 focus:text-teal-600"
                          >
                            <div className="text-sm font-medium leading-none">Educational Consulting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Expert guidance for educational institutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 hover:text-teal-600 focus:bg-teal-50 focus:text-teal-600"
                          >
                            <div className="text-sm font-medium leading-none">Our Core Offerings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Essential services that drive educational excellence
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/careers" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none">
                        Career at NET
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none">
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/feedback" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none">
                        Feedback
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  Home
                </Link>

                <div className="px-3 py-2">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Products</div>
                  <Link
                    href="/products/software"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Educational Software
                  </Link>
                  <Link
                    href="/products/digital"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Digital Solutions
                  </Link>
                </div>

                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  About Us
                </Link>

                <div className="px-3 py-2">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Services</div>
                  <Link
                    href="/services/consulting"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Educational Consulting
                  </Link>
                  <Link
                    href="/labs"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Our Core Offerings
                  </Link>
                </div>

                <Link
                  href="/careers"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  Career at NET
                </Link>

                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>

                <Link
                  href="/feedback"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  Feedback
                </Link>

                <div className="px-3 py-2 border-t mt-4 pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">Book a Demo</Button>
                  <Link href="/contact" className="block text-center text-sm text-blue-600 hover:text-blue-800">
                    Reach out to us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

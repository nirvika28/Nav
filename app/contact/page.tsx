import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <PageLayout showContactButton={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform education with innovative technology? We'd love to hear from you and discuss how we can
            help bring your educational vision to life.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">founder.alphastrategix@gmail.com</p>
                  <p className="text-gray-600">partnerships@navostra.com</p>
                  <p className="text-gray-600">labs@navostra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 123-4568 (Labs)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Innovation District
                    <br />
                    EdTech Plaza, Suite 500
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Global Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">San Francisco (HQ)</h4>
                    <p className="text-gray-600 text-sm">EdTech Plaza, Suite 500</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Boston</h4>
                    <p className="text-gray-600 text-sm">Education Hub, Floor 12</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">London</h4>
                    <p className="text-gray-600 text-sm">Tech Quarter, Level 18</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Singapore</h4>
                    <p className="text-gray-600 text-sm">Innovation District, Tower 2</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Arjun"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="arjun.sharma@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your school or organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Educational Technology Consultation</option>
                    <option value="services">Service Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="labs">Lab Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your educational technology needs, goals, or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for educational technology insights and updates
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

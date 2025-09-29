import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MessageSquare, ThumbsUp, Users } from "lucide-react"

export default function FeedbackPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Your Feedback Matters
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Help us improve our services and products. Your insights drive our innovation and help us serve you
              better.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Share Your Experience
              </div>
              <div className="flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Suggest Improvements
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                Join Our Community
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Share Your Feedback</CardTitle>
                <CardDescription className="text-gray-600">
                  We value your opinion and use your feedback to continuously improve our services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Rajesh Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="rajesh.kumar@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input id="organization" placeholder="ABC School" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Feedback Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Feedback</SelectItem>
                        <SelectItem value="service">Service Quality</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Overall Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your feedback" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Feedback</Label>
                  <Textarea
                    id="message"
                    placeholder="Please share your detailed feedback, suggestions, or concerns..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Submit Feedback</Button>
                  <Button variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Navostra's educational solutions have transformed our teaching methodology. The interactive content
                    keeps our students engaged."
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-gray-500">Principal, Delhi Public School</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The customer support team is exceptional. They understand our needs and provide tailored
                    solutions."
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">Amit Patel</p>
                    <p className="text-gray-500">IT Director, Modern Academy</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Innovative approach to education technology. Their products are user-friendly and effective."
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">Sunita Reddy</p>
                    <p className="text-gray-500">Teacher, Bangalore International School</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Have More Questions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to help. Reach out to us for any additional support or information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

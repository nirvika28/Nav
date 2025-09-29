"use client"

import type React from "react"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Zap, Calendar } from "lucide-react"

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    studentCount: "",
    interests: "",
    message: "",
    preferredTime: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Demo request submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <PageLayout showContactButton={false}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <Card className="w-full max-w-md text-center">
            <CardContent className="pt-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your demo request has been submitted successfully. Our team will contact you within 24 hours to schedule
                your personalized demonstration.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout showContactButton={false}>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Experience the Future of{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                    Educational Technology
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Discover how Navostra's innovative STEM solutions can transform learning in your institution. Book a
                  personalized demo and see our technology in action.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personalized Experience</h3>
                    <p className="text-white/80">
                      Tailored demonstration based on your institution's specific needs and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Solutions</h3>
                    <p className="text-white/80">
                      Explore our full range of STEM education tools, books, and digital resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Instant Implementation</h3>
                    <p className="text-white/80">
                      Learn how to integrate our solutions seamlessly into your existing curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">Book Your Demo</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll schedule a personalized demonstration for you.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="john.doe@school.edu"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Organization Details */}
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                        Organization/School Name *
                      </Label>
                      <Input
                        id="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="ABC Elementary School"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                        Your Role *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="principal">Principal</SelectItem>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="curriculum-coordinator">Curriculum Coordinator</SelectItem>
                          <SelectItem value="it-director">IT Director</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studentCount" className="text-sm font-medium text-gray-700">
                        Number of Students
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("studentCount", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select student count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 students</SelectItem>
                          <SelectItem value="51-200">51-200 students</SelectItem>
                          <SelectItem value="201-500">201-500 students</SelectItem>
                          <SelectItem value="501-1000">501-1000 students</SelectItem>
                          <SelectItem value="1000+">1000+ students</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Interests */}
                    <div className="space-y-2">
                      <Label htmlFor="interests" className="text-sm font-medium text-gray-700">
                        Areas of Interest
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("interests", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="What interests you most?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stem-education">STEM Education</SelectItem>
                          <SelectItem value="coding-robotics">Coding & Robotics</SelectItem>
                          <SelectItem value="navo-books">Navo Books</SelectItem>
                          <SelectItem value="digital-learning">Digital Learning Tools</SelectItem>
                          <SelectItem value="teacher-training">Teacher Training</SelectItem>
                          <SelectItem value="curriculum-development">Curriculum Development</SelectItem>
                          <SelectItem value="all">All Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime" className="text-sm font-medium text-gray-700">
                        Preferred Demo Time
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="When works best for you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                        placeholder="Tell us more about your specific needs or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book My Demo
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by our team regarding your demo request.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

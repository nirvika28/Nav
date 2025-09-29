import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Educational Technology Specialist",
      department: "Product Development",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Lead the development of innovative educational technology solutions that transform learning experiences.",
    },
    {
      title: "Content Development Manager",
      department: "Content & Curriculum",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create engaging educational content and curriculum materials for our digital learning platforms.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Design intuitive and engaging user interfaces for our educational technology products.",
    },
    {
      title: "Business Development Executive",
      department: "Sales & Marketing",
      location: "Chennai, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive business growth by building relationships with educational institutions and partners.",
    },
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Career at NET
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join Navostra Edunitive Technologies and be part of a team that's revolutionizing education through
              innovation and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
                <Users className="w-4 h-4 mr-2" />
                Growing Team
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-teal-100 text-teal-800">
                <Briefcase className="w-4 h-4 mr-2" />
                Innovative Projects
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
                <MapPin className="w-4 h-4 mr-2" />
                Multiple Locations
              </Badge>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Navostra?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Work on cutting-edge educational technology projects that make a real difference in students' lives.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-600">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Continuous learning and development opportunities to advance your career in the EdTech industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join a diverse team of passionate professionals working together to transform education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Current Openings</h2>
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">{job.description}</CardDescription>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-teal-500" />
                        {job.experience}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't see a position that fits? We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Send Your Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact HR
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

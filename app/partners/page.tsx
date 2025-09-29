import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Globe, TrendingUp, CheckCircle, ArrowRight, Building, Zap, Target, Award } from "lucide-react"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Partner With Us
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our ecosystem of innovative partners and unlock new opportunities for growth, collaboration, and mutual
            success in the educational technology landscape.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Why Partner With Navostra?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8">Discover the advantages of joining our partner ecosystem</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Accelerated Growth",
                description:
                  "Leverage our expertise and market presence to expand your reach in the education technology sector.",
              },
              {
                icon: Globe,
                title: "Global Network",
                description:
                  "Access our worldwide network of educational institutions, clients, and industry connections.",
              },
              {
                icon: Zap,
                title: "Innovation Access",
                description:
                  "Collaborate on cutting-edge research and gain early access to emerging educational technologies.",
              },
              {
                icon: Award,
                title: "Shared Success",
                description: "Benefit from joint marketing, co-development opportunities, and revenue sharing models.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Partnership Types
              </span>
            </h2>
            <p className="text-xl text-white/90">
              Choose the partnership model that best fits your educational technology objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technology Partners",
                description:
                  "Integrate and co-develop innovative educational solutions that combine our expertise with your technology.",
                features: [
                  "Joint EdTech development",
                  "Technical integration support",
                  "Shared intellectual property",
                  "Co-innovation projects",
                ],
                gradient: "from-blue-500 to-purple-600",
              },
              {
                title: "Educational Partners",
                description:
                  "Collaborate with schools, universities, and educational institutions to implement solutions.",
                features: [
                  "Curriculum integration",
                  "Teacher training programs",
                  "Student engagement initiatives",
                  "Academic research collaboration",
                ],
                gradient: "from-green-500 to-blue-500",
              },
              {
                title: "Strategic Partners",
                description:
                  "Long-term alliances focused on educational market leadership and industry transformation.",
                features: [
                  "Executive-level collaboration",
                  "Joint market strategy",
                  "Shared investment opportunities",
                  "Industry thought leadership",
                ],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Research Partners",
                description: "Collaborate on R&D initiatives and breakthrough educational innovation projects.",
                features: [
                  "Joint research projects",
                  "Access to lab facilities",
                  "Shared research funding",
                  "Academic publication opportunities",
                ],
                gradient: "from-orange-500 to-red-500",
              },
            ].map((partnership, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${partnership.gradient} text-white`}
                  >
                    {partnership.title}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{partnership.title}</h3>
                  <p className="text-white/80 mb-6">{partnership.description}</p>
                  <ul className="space-y-2">
                    {partnership.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Trusted by leading educational institutions and technology companies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "EduTech Solutions",
              "Learning Labs",
              "Smart Campus",
              "Digital Academy",
              "Future Schools",
              "AI Education",
              "Virtual Learning",
              "EdTech Innovations",
              "Smart Classroom",
              "Learning Analytics",
              "Education Cloud",
              "Teaching Tools",
            ].map((partner, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Building className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">{partner}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Partnership Success Stories
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8">Real results from our strategic educational partnerships</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                partner: "Global University Network",
                result: "500% Student Engagement",
                description:
                  "Joint AI-powered learning platform development led to unprecedented student engagement and learning outcomes.",
                metrics: ["50+ Universities", "100K+ Students", "95% Satisfaction"],
              },
              {
                partner: "EdTech Innovations Inc",
                result: "Market Leadership",
                description:
                  "Strategic technology alliance resulted in category-defining educational software and industry recognition.",
                metrics: ["#1 EdTech Platform", "25+ Awards", "300% Revenue Growth"],
              },
              {
                partner: "Future Learning Institute",
                result: "Research Breakthrough",
                description:
                  "Research collaboration produced groundbreaking adaptive learning algorithms and 5 published papers.",
                metrics: ["5 Research Papers", "3 Patents Filed", "90% Learning Improvement"],
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Target className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white">{story.partner}</h3>
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mt-2">
                      {story.result}
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">{story.description}</p>
                  <div className="space-y-2">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-white/80">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's explore how a strategic partnership can accelerate your growth in the educational technology sector
            and create new opportunities for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
            >
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

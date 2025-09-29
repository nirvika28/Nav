import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, BookOpen, Code, Palette, Users, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive educational technology solutions designed to transform learning experiences and drive
            innovation in education.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BookOpen,
              title: "Educational Software Development",
              description:
                "Custom learning management systems, educational apps, and interactive learning platforms tailored to your needs.",
              features: ["LMS Development", "Mobile Learning Apps", "Interactive Content", "Assessment Tools"],
              color: "from-blue-400 to-blue-600",
            },
            {
              icon: Code,
              title: "Technology Integration",
              description:
                "Seamlessly integrate cutting-edge technology into existing educational frameworks and curricula.",
              features: ["System Integration", "API Development", "Cloud Solutions", "Data Migration"],
              color: "from-purple-400 to-purple-600",
            },
            {
              icon: Palette,
              title: "UI/UX Design",
              description:
                "User-centered design solutions that make learning intuitive, engaging, and accessible for all users.",
              features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
              color: "from-pink-400 to-pink-600",
            },
            {
              icon: Users,
              title: "Training & Support",
              description:
                "Comprehensive training programs and ongoing support to ensure successful technology adoption.",
              features: ["Staff Training", "Technical Support", "Documentation", "Maintenance"],
              color: "from-green-400 to-green-600",
            },
            {
              icon: Zap,
              title: "Innovation Consulting",
              description:
                "Strategic guidance on emerging technologies and their applications in educational environments.",
              features: ["Technology Strategy", "Innovation Workshops", "Future Planning", "Best Practices"],
              color: "from-yellow-400 to-orange-500",
            },
            {
              icon: Globe,
              title: "Digital Transformation",
              description:
                "Complete digital transformation services to modernize educational institutions and processes.",
              features: ["Digital Strategy", "Process Automation", "Change Management", "Performance Analytics"],
              color: "from-cyan-400 to-blue-500",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-md border-white/50 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            A proven methodology that ensures successful outcomes for every project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your educational needs, current systems, and learning objectives to create a comprehensive understanding.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team develops customized solutions and prototypes that align with your educational goals and user requirements.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build and implement your educational technology solutions using cutting-edge tools and best practices.",
              },
              {
                step: "04",
                title: "Deployment",
                description:
                  "Complete deployment with training, support, and continuous optimization to ensure long-term success.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Education?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss your educational technology needs and create innovative solutions that make a difference.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

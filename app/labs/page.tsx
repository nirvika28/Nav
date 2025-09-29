import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { CheckCircle, Rocket, Settings, ArrowRight, Users, BookOpen, Download } from "lucide-react"
import Link from "next/link"

export default function LabsPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Where Innovation Meets Education
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our comprehensive lab solutions designed to transform educational experiences through hands-on
            learning and cutting-edge technology.
          </p>
        </div>

        {/* STEM & Robotics Labs */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  STEM & Robotics Labs
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                We design and establish fully-equipped STEM and Robotics Labs that promote hands-on learning,
                innovation, and 21st-century skills. Our labs are age-appropriate, NEP 2020-aligned, and delivered with
                structured curriculum, student kits, and teacher training.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-red-400" />
                  <span className="text-white/90">
                    Ideal For: Schools (Grades 6–12), Innovation Hubs, Talent Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/90">Includes: Equipment, Curriculum, Projects, Assessment Tools</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src="/robotics-lab-modern-classroom.png"
                alt="Modern STEM and Robotics Lab with colorful ROBOTICS wall mural and computer workstations"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Atal Tinkering Labs */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/atal-tinkering-lab-colorful-setup.png"
                alt="Atal Tinkering Lab with AIM branding, colorful educational posters and learning stations"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Atal Tinkering Labs (ATL) Setup
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                We assist schools in setting up ATL Labs under the NITI Aayog framework — from infrastructure planning
                and procurement to grant support, training, and mentoring.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">Services: ATL Proposal Support, Equipment, Training, Docs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-red-400" />
                  <span className="text-white/90">Add-on: ATL Innovation Challenges & Bootcamps</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>
          </div>
        </div>

        {/* Science Centres & Futuristic Labs */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Science Centres & Futuristic Labs
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Custom-designed Science Centres that immerse students in physical sciences, emerging tech, and
                real-world problem-solving using interactive exhibits, digital simulations, and hands-on experiments.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/90">
                    Features: Interactive Exhibits, Digital Simulations, VR/AR Integration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">
                    Focus: Physical Sciences, Emerging Technologies, Problem-Solving
                  </span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src="/science-centre-interactive-exhibits.png"
                alt="Science Centre with interactive transportation exhibits and hands-on learning displays"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* 21st Century Skills & Awareness */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/21st-century-skills-banner.png"
                alt="21st Century Skills banner with colorful hands and educational technology icons"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  21st-Century Skills & Awareness
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Workshops to develop coding, AI, design thinking, and entrepreneurship among students and educators.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-red-400" />
                  <span className="text-white/90">Includes: Workshops, Assessment Tools, Aids</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">Target Group: Grades 6–12, Teachers, NGOs, CSR Programs</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>
          </div>
        </div>

        {/* Training & Handholding */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Training & Handholding
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                We provide extensive teacher & student training, lab in-charge orientation, and ongoing support.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-red-400" />
                  <span className="text-white/90">Includes: Workshops, Assessment Tools, Aids</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">Modes: Onsite + Digital</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>

            <div className="flex justify-center">
              <img
                src="/professional-training-session-with-teacher-and-stu.jpg"
                alt="Professional training session with teacher and students"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Curriculum & Content Development */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/stack-of-colorful-books-with-graduation-cap-on-top.jpg"
                alt="Curriculum and content development with books and graduation cap"
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Curriculum & Content Development
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Our team builds NEP-aligned curricula, DIY guides, and multimedia learning content.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white/90">Subjects: Robotics, AI, STEM, Coding, Tinkering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                  <span className="text-white/90">Formats: Print, Digital, Simulation, Video</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                For info-Download
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Educational Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to create innovative learning environments that inspire curiosity, foster creativity, and
            prepare students for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

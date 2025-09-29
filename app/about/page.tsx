import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-800 bg-clip-text text-transparent">
              About Navostra
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to providing star-class innovations in education and
            technology, transforming the way we learn and interact with digital solutions.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                  Who We Are!
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our company is a forward-thinking education and technology company on a mission to deliver star-class
                  innovations in education and technology. We aim to bridge the gap between traditional learning methods
                  and the evolving needs of a future-ready world.
                </p>
                <p>
                  Our holistic integration of experiential education, intelligent technology, and creative design sets
                  us apart, tailored to spark curiosity, encourage problem-solving, and develop essential 21st-century
                  skills.
                </p>
                <p>
                  We specialize in setting up STEM and Robotics Labs, Atal Tinkering Labs, Science Centres, and skill
                  development programs, supported by custom training, content creation, and educational kits.
                </p>
                <p>
                  We also offer IT solutions like LMS, AI tools, ERP/CRM and more, empowering institutions with digital
                  efficiency.
                </p>
                <p>
                  Our creative design team enhances these with impactful branding, educational graphics, and visual
                  content.
                </p>
                <p className="font-semibold text-blue-700">
                  At Navostra, we don't just offer services—we co-create the future of learning.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/navostra-about-us-stem-education.png"
                  alt="STEM education illustration showing robotics, coding, and technology learning"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Heart of Navostra */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              The Heart of Navostra
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Our Vision Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-teal-700 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src="/vision-lightbulb-wordcloud-updated.png"
                    alt="Vision lightbulb word cloud with strategic business concepts"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be a pioneering force in transforming education by integrating innovation, technology, and
                  creativity – shaping a generation equipped with skills, curiosity, and a mindset to lead in the world
                  of tomorrow.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-teal-700 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src="/mission-lightbulb-wordcloud.png"
                    alt="Mission lightbulb word cloud with strategic business concepts"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower educational institutions with next-generation tools and experiential learning environments
                  by delivering cutting-edge STEM solutions, intelligent digital platforms, and impactful creative
                  services – enabling students and educators to thrive in the age of innovation.
                </p>
              </CardContent>
            </Card>

            {/* Technology Icons Card */}
            <Card className="bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src="/technology-innovation-icons.jpg"
                    alt="Modern technology and innovation icons"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Technology</h3>
                <p className="text-teal-100 leading-relaxed">
                  Cutting-edge AI, robotics, coding platforms, and digital tools that power the future of education and
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Brain Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/brain-network-technology-updated.png"
                alt="Brain with hexagonal network connections representing innovation and technology"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Core Values Content */}
            <div className="order-1 lg:order-2">
              <Card className="bg-gradient-to-br from-blue-600 to-teal-700 text-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-teal-300 mb-2">INNOVATION WITH PURPOSE</h3>
                      <p className="text-blue-100">
                        We create solutions that are not just advanced, but meaningful—built to spark curiosity, enhance
                        learning, and prepare students for a tech-driven world.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-teal-300 mb-2">INTEGRITY IN ACTION</h3>
                      <p className="text-blue-100">
                        We operate with honesty, transparency, and accountability, building trust through consistent
                        quality and ethical practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-teal-300 mb-2">CREATIVITY AS A CATALYST</h3>
                      <p className="text-blue-100">
                        We blend imagination with functionality—transforming learning materials, technologies, and labs
                        into engaging and inspiring experiences.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-teal-300 mb-2">COLLABORATION OVER COMPETITION</h3>
                      <p className="text-blue-100">
                        We believe in growing together. By partnering with educators, institutions, and change-makers,
                        we co-create impactful educational ecosystems.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-teal-300 mb-2">FUTURE-FIRST THINKING</h3>
                      <p className="text-blue-100">
                        We anticipate tomorrow's needs—designing tools, content, and skills training that prepare
                        learners for the world ahead.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

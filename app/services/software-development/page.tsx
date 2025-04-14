// pages/software-development.tsx

import Banner from "@/components/banner"
import Link from "next/link"


const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business needs and challenges.",
      features: ["Requirement Analysis", "Custom Architecture", "Scalable Solutions", "Ongoing Support"],
    },
    {
      title: "Enterprise Software",
      description:
        "Robust enterprise applications that streamline operations, improve efficiency, and drive growth.",
      features: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Workflow Automation"],
    },
    {
      title: "SaaS Development",
      description:
        "Cloud-based software-as-a-service solutions that provide flexibility, scalability, and accessibility.",
      features: ["Multi-tenant Architecture", "Subscription Management", "API Integration", "Analytics Dashboard"],
    },
    {
      title: "Legacy System Modernization",
      description: "Transform your outdated systems into modern, efficient, and secure applications.",
      features: ["Code Refactoring", "Platform Migration", "UI/UX Modernization", "Performance Optimization"],
    },
  ]

  const technologies = [
    "Java", "Python", "C#", ".NET", "Node.js", "React", "Angular", "Vue.js",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "MySQL",
  ]


  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
    },
  ]
  return (
    <div className="pt-14">
      <Banner  slides={bannerSlides}  />

      {/* Overview */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-3">
                Our software development team creates custom solutions that address your unique business challenges,
                streamline operations, and drive growth.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need an enterprise application, SaaS platform, or legacy system modernization, we deliver high-quality software with real business value.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Tailored Solutions",
                    desc: "We develop software that directly solves your unique business challenges.",
                  },
                  {
                    title: "Scalable Architecture",
                    desc: "Our systems are built to scale as your business grows.",
                  },
                  {
                    title: "Agile Development",
                    desc: "We use agile methodologies for speed, flexibility, and transparency.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <i className="bi bi-check-circle text-primary mt-1"></i>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary">
                Discuss Your Software Project
              </Link>
            </div>

            <div>
              <img
                src="https://via.placeholder.com/600x400?text=Software+Development"
                alt="Software Development"
                className="rounded w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Our Software Development Services</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We offer a comprehensive range of software development services to meet your specific needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded shadow p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="bi bi-check-circle text-primary mr-2 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Technologies We Use</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We leverage the latest technologies and tools to build robust, scalable software.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded shadow p-4 text-center">
                <h3 className="font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Our Development Process</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            A structured approach ensures successful delivery of every project.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Discovery & Planning",
                desc: "Understand your goals, define scope, and plan the project roadmap.",
              },
              {
                title: "Design & Architecture",
                desc: "Build a strong foundation with clear system design and architecture.",
              },
              {
                title: "Development & Testing",
                desc: "Iterative development with continuous testing for quality and performance.",
              },
              {
                title: "Deployment & Support",
                desc: "Smooth deployment and long-term maintenance and support.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded shadow p-6 relative">
                <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Contact us today to discuss your software development needs and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn btn-light text-primary">
              Contact Us
            </Link>
            <Link href="/services" className="btn btn-outline-light border-white">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareDevelopment

import Banner from "@/components/banner";
import Link from "next/link";
import {BiBox,BiCreditCard,BiGroup,BiBarChartAlt2,BiCodeAlt} from 'react-icons/bi';
  import { FaCalendarAlt } from "react-icons/fa";
const TravelSoftware = () => {
    const features = [
        {
          title: "Booking Management",
          description: " Efficiently manage bookings for flights, hotels, car rentals, and travel packages with real-time availability updates",
          icon: <FaCalendarAlt  className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Inventory Management",
          description: " Manage your inventory of rooms, seats, and travel packages with real-time updates.",
          icon: <BiBox className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Payment Processing",
          description: " Offer secure and reliable payment processing that supports multiple payment methods and currencies.",
          icon: <BiCreditCard className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Customer Management",
          description: "Maintain detailed customer profiles, including preferences, past bookings, and special requests.",
          icon: <BiGroup className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Reporting & Analytics",
          description: "Generate detailed reports on sales, bookings, customer behavior, and financial performance.",
          icon: <BiBarChartAlt2 className="text-blue-600 text-2xl"/>,
        },
        {
          title: "API Integration",
          description: " Integrate seamlessly with major GDS, OTAs, and other travel service providers",
          icon: <BiCodeAlt className="text-blue-600 text-2xl"/>,
        },
      ];

  const modules = [
    {
      title: "Flight Booking",
      description: "A robust flight booking system that offers real-time availability, pricing, and ticketing.",
      features: ["GDS Integration", "Multi-city Booking", "Fare Comparison", "E-ticketing"],
    },
    {
      title: "Hotel Reservation",
      description: "Our hotel reservation system includes room inventory management, dynamic pricing, and a complete booking engine",
      features: ["Room Inventory", "Dynamic Pricing", "Property Management", "Booking Engine"],
    },
    {
      title: "Car Rental",
      description: "A comprehensive car rental management module that helps you handle fleet management, booking, and rental agreements.",
      features: ["Fleet Management", "Rental Agreements", "Pricing Rules", "Availability Calendar"],
    },
    {
      title: "Package Tours",
      description: "Create, manage, and customize travel packages with detailed itineraries and dynamic pricing.",
      features: ["Itinerary Builder", "Package Pricing", "Group Bookings", "Tour Management"],
    },
  ];
  const bannerSlides = [
    {
      image: "/image/banner/Travel,jpg",
      title: "Travel Booking Software",
      description: "Comprehensive travel management solution for travel agencies and tour operators",
      
    },
  ]
 

  return (
    <div className="pt-14">
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Travel Management Software
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
              Our Travel Management Software offers a comprehensive, all-in-one solution tailored specifically for travel agencies, tour operators, and travel businesses. Designed to simplify and streamline operations, automate booking processes, and enhance customer experience.              </p>
              <p className="text-gray-600 mb-6 text-lg">
              Whether you're a small agency looking to expand or a large tour operator handling high-volume bookings, our Travel Software is fully customizable to meet your unique business requirements. 
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "End-to-End Solution",
                    text: "Our platform offers an integrated system that helps you manage bookings, payments, and more—all from a single dashboard."
                  },
                  {
                    title: "Customizable",
                    text: " Adapt the software to your business model, workflows, and branding to fit the needs of your unique travel operations."
                  },
                  {
                    title: "Scalable",
                    text: "Our solution scales with your growth—across markets, services, and global operations."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                Get in Touch
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Software"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
            Our Travel Management Software comes packed with powerful features designed to help you streamline and optimize your travel business operations. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                    {/* <i className={` ${feature.icon} text-blue-600 text-2xl`}></i> */}
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Software Modules
            </h2>
            <p className="text-xl text-gray-600">
              Our Travel Software includes specialized modules for different aspects of your travel business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our Travel Software
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
              Implementing our Travel Software can revolutionize your travel business operations, providing numerous advantages that will improve efficiency, enhance customer satisfaction, and drive profitability.

              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Increased Operational Efficiency",
                    text: "Automate routine tasks such as booking, payments, and inventory management."
                  },
                  {
                    title: "Enhanced Customer Experience",
                    text: " Offer quicker, more personalized services to your customers with real-time availability."
                  },
                  {
                    title: "Improved Revenue Management",
                    text: " With dynamic pricing features and intelligent algorithms, you can optimize rates for flights, hotels, and packages."
                  },
                  {
                    title: "Better Business Insights",
                    text: " Make informed decisions with powerful reporting and analytics tools that give you a deeper understanding of your business performance."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Software Benefits"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our Travel Software and how it can help streamline your travel business operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
              Get in Touch
            </Link>
            <Link href="/services/software" className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Other Software
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelSoftware;
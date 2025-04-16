import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 rounded-t-[10px]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* About Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Seven Unique</h3>
            <p className="text-gray-400 leading-relaxed">
              SevenUnique has been a dynamic startup IT agency dedicated to delivering innovative digital solutions. Specializing in website development, mobile application creation, and SEO services, we cater to a diverse range of clients.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Us" },
                { href: "/services", text: "Services" },
                { href: "/blog", text: "Blog" },
                { href: "/career", text: "Careers" },
                { href: "/gallery", text: "Gallery" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300 flex items-start"
                  >
                    <span className="hover:underline">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/services/ui-ux-design", text: "UI/UX Design" },
                { href: "/services/app-development", text: "App Development" },
                { href: "/services/web-development", text: "Web Development" },
                { href: "/services/game-development", text: "Game Development" },
                { href: "/services/software-development", text: "Software Development" },
                { href: "/services/digital-marketing", text: "Digital Marketing" }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300 flex items-start"
                  >
                    <span className="hover:underline">{service.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#e8ab8f] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#e8ab8f] flex-shrink-0" />
                <Link href="mailto:support@7unique.in" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                  support@7unique.in
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#e8ab8f] flex-shrink-0" />
                <Link href="mailto:info@7unique.in" className="text-gray-400 hover:text-[#e8ab8f] transition-colors duration-300">
                  info@7unique.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Seven Unique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
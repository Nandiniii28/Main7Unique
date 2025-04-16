"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const services = [
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Game Development", href: "/services/game-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "BBPS Services", href: "/services/bbps" },
  { name: "Cab Booking Software", href: "/services/cab-booking-software" },
  { name: "Food Delivery Software", href: "/services/food-delivery-software" },
  { name: "Grocery Delivery Software", href: "/services/grocery-software" },
  { name: "Home Services Software", href: "/services/home-service-software" }, 
  { name: "Fantasy Sports Software", href: "/services/fantasy-sport-software" }, 
  { name: "Sports Betting Software", href: "/services/sport-betting-software" }, 
  { name: "School Management Software", href: "/services/school-management-software" },
  { name: "CRM Software", href: "/services/crm-software" },
  { name: "HRMS Software", href: "/services/hrms-software" },
  { name: "Employee Tracking Software", href: "/services/employee-tracking-software" },
  { name: "E-Commerce Portal", href: "/services/e-commerce-portal" },
  { name: "Loan Management Software", href: "/services/loan-module-software" }, 
  { name: "Reseller Software", href: "/services/reseller-software" },
  { name: "Travel Booking Software", href: "/services/travel-booking-software" },
  { name: "Fintech Software", href: "/services/fintech-software" },
];

// const softwareItems = [
//   { name: "Recharge Software", href: "/services/recharge-software" },
//   { name: "BBPS Software", href: "/services/bbps-software" },
//   { name: "UTI (Pancard) Software", href: "/services/uti-pancard-software" },
//   { name: "Travel Software", href: "/services/travel-booking-software" },
// ]

const apiItems = [
  // { name: "Recharge", href: "/services/api-recharge" },
  // { name: "BBPS", href: "/services/api-bbps" },
  { name: "AEPS", href: "/services/api-aeps" },
  { name: "DMT", href: "/services/api-dmt" },
  { name: "Pancard Verification", href: "/services/api-pancard-verification" },
  { name: "Aadhar Verification", href: "/services/api-aadhar-verification" },
  { name: "Bus Booking", href: "/services/api-bus-booking" },
  { name: "Hotel Booking", href: "/services/api-hotel-booking" },
  { name: "Flight Booking", href: "/services/api-flight-booking" },
  { name: "Cibil Score", href: "/services/api-cibil-score" },
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // Services, Software, and APIs will be added as dropdowns in the NavigationMenu
  // { name: "Gallery", href: "/gallery" },
  // { name: "Blog", href: "/blog" },
  // { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-teal-dark/90" : "bg-white dark:bg-teal-dark",
      )}
      style={{ zIndex: "9999" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="./image/logo.png" alt="Logo" width={50} height={50} className="h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex mx-auto">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={navigationMenuTriggerStyle()} 
                      active={pathname === "/"}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {/* About */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={navigationMenuTriggerStyle()} 
                      active={pathname === "/about" || pathname.startsWith("/about")}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#AB6545]/10 hover:text-[#ab6545] focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none hover:text-[#ab6545] transition-all duration-200 hover:underline">
                                {service.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Software Dropdown */}
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Software</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {softwareItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#AB6545]/10 hover:text-[#ab6545] focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none hover:text-[#ab6545] transition-all duration-200 hover:underline">
                                {item.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}

                {/* API's Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>API's</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {apiItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#AB6545]/10 hover:text-[#ab6545] focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none hover:text-[#ab6545] transition-all duration-200 hover:underline">
                                {item.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Gallery, Blog, Career, Contact */}
                {navItems.slice(2).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={navigationMenuTriggerStyle()} 
                        active={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu"
              className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mt-4 lg:hidden sm:overflow-auto sm:h-[900px]">
            <div className="flex flex-col space-y-2 pb-4">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  pathname === "/"
                    ? "bg-[#AB6545] text-white"
                    : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                )}
              >
                Home
              </Link>
              
              {/* About */}
              <Link
                href="/about"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  pathname === "/about" || pathname.startsWith("/about")
                    ? "bg-[#AB6545] text-white"
                    : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                )}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="border-t border-gray-200 pt-2">
                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-3 text-base font-medium cursor-pointer list-none">
                    <span>Services</span>
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="pl-4 pt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "block px-4 py-2 text-sm rounded-md transition-colors",
                          pathname === service.href
                            ? "bg-[#AB6545] text-white"
                            : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>

              {/* Software Dropdown */}
              {/* <div className="border-t border-gray-200 pt-2">
                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-3 text-base font-medium cursor-pointer list-none">
                    <span>Software</span>
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="pl-4 pt-1 space-y-1">
                    {softwareItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-[#AB6545] text-white"
                            : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </div> */}

              {/* API's Dropdown */}
              <div className="border-t border-gray-200 pt-2">
                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-3 text-base font-medium cursor-pointer list-none">
                    <span>API's</span>
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="pl-4 pt-1 space-y-1">
                    {apiItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-[#AB6545] text-white"
                            : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>

              {/* Gallery, Blog, Career, Contact */}
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "bg-[#AB6545] text-white"
                      : "hover:bg-[#AB6545]/10 hover:text-[#ab6545]",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
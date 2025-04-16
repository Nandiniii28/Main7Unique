import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function DMTAPIPage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="DMT API" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Domestic Money Transfer API
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Integrate secure and reliable money transfer capabilities into your applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive DMT API Solution</h2>
              <p className="text-muted-foreground md:text-lg">
                Our Domestic Money Transfer (DMT) API provides a seamless way to integrate money transfer capabilities
                into your applications. Enable your customers to send money to any bank account in India quickly and
                securely.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Bank account verification and validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>IMPS, NEFT, and RTGS transfer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-time transaction status and tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Beneficiary management and quick transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Secure integration with multiple authentication options</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/placeholder.svg?height=600&width=600" alt="DMT API" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our DMT API comes with a range of features designed to provide a seamless money transfer experience.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Account Verification</h3>
              <p className="text-muted-foreground">
                Verify bank account details in real-time before initiating transfers to ensure accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Transfer Modes</h3>
              <p className="text-muted-foreground">
                Support for IMPS, NEFT, and RTGS transfer modes with appropriate transaction limits.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Beneficiary Management</h3>
              <p className="text-muted-foreground">
                Add, edit, and manage beneficiaries for quick and easy repeat transfers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transaction Tracking</h3>
              <p className="text-muted-foreground">
                Real-time transaction status updates and comprehensive reporting for all transfers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple REST API with comprehensive documentation and sample code in multiple programming languages.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Technical support team available to assist with integration and resolve any issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Integration Process</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Integrating our DMT API is a straightforward process that can be completed in a few simple steps.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create an account and complete the verification process to get your API credentials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-muted-foreground">
                Use our comprehensive documentation and sample code to integrate the API into your application.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-muted-foreground">
                Test the integration in our sandbox environment to ensure everything works correctly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Go Live</h3>
              <p className="text-muted-foreground">
                Switch to the production environment and start processing real transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">API Documentation</h2>
              <p className="text-muted-foreground md:text-lg">
                Our comprehensive API documentation provides all the information you need to successfully integrate our
                DMT API into your applications.
              </p>
              <div className="bg-background p-6 rounded-lg border">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`// Example API Request
POST /api/v1/dmt/transfer HTTP/1.1
Host: api.example.com
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "beneficiary_account": "1234567890",
  "beneficiary_ifsc": "SBIN0001234",
  "amount": 1000,
  "transfer_mode": "IMPS",
  "reference_id": "TXN123456789"
}`}
                  </code>
                </pre>
              </div>
              <p className="text-muted-foreground">
                Our documentation includes detailed API references, sample code in multiple programming languages, and
                guides for common integration scenarios.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#">View API Documentation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#">Download SDK</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="API Documentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our DMT API can help you offer secure and convenient money transfer
                services to your customers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

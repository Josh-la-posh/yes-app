import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-500">Logo</span>
            <span className="ml-1 text-cyan-500">✓</span>
          </div>
          <div className="flex w-full md:w-auto max-w-sm gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              Follow our journey
            </Button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pb-8 text-[#101720] border-b">
          {/* About Us */}
          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <p className="text-[#263238] text-sm">
              With the Yes App you can avoid unnecessary disagreements with
              clients and customers and prevent financial loss when you do
              business.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-medium text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  For Business Owners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  For SMEs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  For Individual vendor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  For Corporation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="font-medium text-lg mb-4">Legals</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#263238] hover:text-gray-900">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* social links and contact */}
          <div className="flex flex-col items-start">
            <div className="flex space-x-4 mb-4">
              <div className="flex items-center justify-center bg-[#37333C] w-8 h-8 rounded-full">
                <a href="#" className="text-white">
                  <Instagram className='h-4 w-4' />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
              <div className="flex items-center justify-center bg-[#37333C] w-8 h-8 rounded-full">
                <a href="#" className="text-white">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center justify-center bg-[#37333C] w-8 h-8 rounded-full">
                <a href="#" className="text-white">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
              <div className="flex items-center justify-center bg-[#37333C] w-8 h-8 rounded-full">
                <a href="#" className="text-white">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
            <div className="text-sm text-[#263238] text-center md:text-left">
              <p className="mb-2">64 Igbogbo Road, Ikorodu, Lagos, Nigeria</p>
              <p>+234 706 756 0902</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
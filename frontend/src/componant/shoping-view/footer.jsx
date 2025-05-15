import { Label } from '@/components/ui/label'

import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" text-zinc-900 font-semibold ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-zinc-900">
            We are dedicated to providing the best products and services to our customers. Explore our website to learn more about what we offer.
          </p>
        </div>

        {/* Links */}
        <div className='text-zinc-900'>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop/home">Home</Link></li>
            <li><Link to="/shop/security">Security</Link></li>
            <li> <Link to="/shop/tearms-condition">Tearms & Condition</Link></li>
            <li><Link to="/shop/enquiry">help</Link></li>
            <li> <Link to="/shop/about">About</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white"
            >
              <TwitchIcon size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm  space-y-2">
            <li>Email: support@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm p-2">&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
      
  )
}

export default Footer
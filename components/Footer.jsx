import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <Link href="/" className="text-2xl font-black text-primary">
              ☀️ SunCart
            </Link>
            <p className="mt-2 text-neutral-content/70">
              Your one-stop summer shop ☀️
            </p>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="link link-hover">Home</Link>
              </li>
              <li>
                <Link href="/products" className="link link-hover">Products</Link>
              </li>
              <li>
                <Link href="/my-profile" className="link link-hover">My Profile</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-2 text-neutral-content/70">
              <li>Email: hello@suncart.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="btn btn-ghost btn-sm btn-circle" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#" className="btn btn-ghost btn-sm btn-circle" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="#" className="btn btn-ghost btn-sm btn-circle" aria-label="Message">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>


        <div className="border-t border-neutral-content/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-neutral-content/60">
          <p>© 2025 SunCart. All rights reserved.</p>
          <a href="#" className="link link-hover">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

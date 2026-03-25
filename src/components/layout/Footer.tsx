import { Instagram, Linkedin, Facebook, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-100 pt-12 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-[#004a61] tracking-tighter">
                Gr<span className="text-[#004a61]">o</span>cery{" "}
                <span className="text-[#004a61] ml-0.5">+</span>
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-800 hover:text-[#004a61] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-800 hover:text-[#004a61] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-800 hover:text-[#004a61] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Grocery platform offering fresh produce, daily essentials,
              personalized recommendations, and seamless ordering with secure
              payments and real-time tracking.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <MapPin size={16} className="text-slate-800 shrink-0" />
                <span>5th Settlement, New Cairo, Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <Mail size={16} className="text-slate-800 shrink-0" />
                <a
                  href="mailto:help@groceryplus.com"
                  className="hover:underline"
                >
                  help@groceryplus.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6">Support</h4>
            <ul className="space-y-4 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6">Services</h4>
            <ul className="space-y-4 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Smart List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Sign - up
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6">
              Terms and Policies
            </h4>
            <ul className="space-y-4 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#004a61]">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t bg-blue-900 border-gray-100 pt-6 text-center w-full">
        <p className="text-[10px] text-white pb-3 ">
          © 2025 GroceryPlus - Smart Grocery, Delivered Fast. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

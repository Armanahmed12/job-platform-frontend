import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-3">JobBridge</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            JobBridge is the heart of the design community and the best resource
            to discover and connect with designers and jobs worldwide.
          </p>

          <div className="flex gap-3">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="font-semibold mb-3">Download App</h4>
          <p className="text-sm text-gray-500 mb-4">
            Download our Apps and get extra 15% Discount on your first Order!
          </p>

          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
              <FaApple className="text-lg" />
              App Store
            </button>

            <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
              <FaGooglePlay className="text-lg" />
              Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-2">
          <p>© 2026 JobBridge. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="hover:text-blue-600">Privacy Policy</a>
            <a className="hover:text-blue-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <p className="text-gray-400">
              The visual way to manage any project, workflow, or team.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2026 TaskFlow Built by Muhammad Shahzaib Imran Khan.</p>
        </div>
      </div>
    </footer>
  );
}

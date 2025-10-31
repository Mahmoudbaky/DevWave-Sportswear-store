const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                SportZone
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
              © 2024 SportZone. All Rights Reserved.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Kids
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Shipping &amp; Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-primary"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="flex mt-4 space-x-6">
              <a className="text-gray-400 hover:text-primary" href="#">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-primary" href="#">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-primary" href="#">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.145 0-3.882 1.737-3.882 3.882s1.737 3.882 3.882 3.882 3.882-1.737 3.882-3.882S14.145 8.118 12 8.118zM12 14.15a2.15 2.15 0 110-4.3 2.15 2.15 0 010 4.3zm5.706-6.572c-.63 0-1.141.512-1.141 1.141s.512 1.141 1.141 1.141 1.141-.512 1.141-1.141c0-.63-.51-1.141-1.14-1.141z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

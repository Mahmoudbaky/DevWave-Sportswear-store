const AdminLayout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display  dark:text-background-light">
      <div className="flex h-screen">
        <aside className="w-64 bg-background-light dark:bg-background-dark border-r border-primary/20 dark:border-primary/10 flex flex-col">
          <div className="flex items-center gap-3 px-6 py-5 border-b border-primary/20 dark:border-primary/10">
            <div className="bg-primary p-2 rounded-lg">
              <svg
                className="size-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.44L19.56 8.19L12 11.94L4.44 8.19L12 4.44ZM4 9.87L11 13.5V19.07L4 15.42V9.87ZM13 19.07V13.5L20 9.87V15.42L13 19.07Z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold  dark:text-background-light">
              SportZone
            </h1>
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded bg-primary/10 dark:bg-primary/20 text-primary font-semibold"
                  href="#"
                >
                  <span className="material-symbols-outlined">dashboard</span>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  Orders
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined">inventory_2</span>
                  Products
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined">group</span>
                  Customers
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined">analytics</span>
                  Analytics
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  <span className="material-symbols-outlined">sell</span>
                  Discounts
                </a>
              </li>
            </ul>
          </nav>
          <div className="px-6 py-4 border-t border-primary/20 dark:border-primary/10">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo9u_7ZxBSWGacj9em0_2mAqmGH7fooL4K2MByi8bFbxyDwvSYNa3cPGtdtINYZnoHNhCsXbW-Ke30-8C1LXsefOIge8BLUR5qH1Z8buN3t1mjSaffqrmZpMBX63t67Iu4iXiPFAMXswNDkaR4KHBHONw7ZDuT5ZWQ0DVlxtm9o9lzD738tLxrOUwpANcxPAvNmG9zwShlgDLiLPpsmNB51fVRgpaUSU7OT7WlslOZV44bIUdUtDvy1gA_rWyv8uIXPVA5ho8R7Jk")',
                }}
              ></div>
              <div>
                <p className="font-semibold  dark:text-background-light">
                  Admin User
                </p>
                <a
                  className="text-sm text-primary/80 dark:text-primary/70 hover:text-primary"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <header className="mb-8">
              <h2 className="text-4xl font-bold  dark:text-background-light">
                Dashboard
              </h2>
              <p className="/60 dark:text-background-light/60">
                Welcome back, here's a summary of your store's performance.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-[#18272e]/60 rounded-xl p-6 flex items-start justify-between border border-primary/10 dark:border-primary/20">
                <div>
                  <p className="text-sm font-medium /60 dark:text-background-light/60">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold  dark:text-background-light mt-1">
                    $120,500
                  </p>
                  <p className="text-sm font-medium text-green-500 mt-2">
                    +10% vs last month
                  </p>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                  <span className="material-symbols-outlined">paid</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#18272e]/60 rounded-xl p-6 flex items-start justify-between border border-primary/10 dark:border-primary/20">
                <div>
                  <p className="text-sm font-medium /60 dark:text-background-light/60">
                    Total Sales
                  </p>
                  <p className="text-3xl font-bold  dark:text-background-light mt-1">
                    3,250
                  </p>
                  <p className="text-sm font-medium text-green-500 mt-2">
                    +5% vs last month
                  </p>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                  <span className="material-symbols-outlined">
                    receipt_long
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#18272e]/60 rounded-xl p-6 flex items-start justify-between border border-primary/10 dark:border-primary/20">
                <div>
                  <p className="text-sm font-medium /60 dark:text-background-light/60">
                    Total Customers
                  </p>
                  <p className="text-3xl font-bold  dark:text-background-light mt-1">
                    1,500
                  </p>
                  <p className="text-sm font-medium text-green-500 mt-2">
                    +8% vs last month
                  </p>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                  <span className="material-symbols-outlined">groups</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#18272e]/60 rounded-xl p-6 flex items-start justify-between border border-primary/10 dark:border-primary/20">
                <div>
                  <p className="text-sm font-medium /60 dark:text-background-light/60">
                    Total Products
                  </p>
                  <p className="text-3xl font-bold  dark:text-background-light mt-1">
                    500
                  </p>
                  <p className="text-sm font-medium text-green-500 mt-2">
                    +2% vs last month
                  </p>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                  <span className="material-symbols-outlined">label</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold  dark:text-background-light mb-6">
              Sales Overview
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 bg-white dark:bg-[#18272e]/60 rounded-xl p-6 border border-primary/10 dark:border-primary/20">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-medium  dark:text-background-light">
                      Revenue Over Time
                    </p>
                    <p className="text-xs /60 dark:text-background-light/60">
                      Last 30 Days
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-green-500">
                    +10%
                  </span>
                </div>
                <div className="h-72">
                  <svg
                    fill="none"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 472 250"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667V248.333H0V181.667Z"
                      fill="url(#paint0_linear_chart)"
                    ></path>
                    <path
                      d="M0 181.667C18.1538 181.667 18.1538 35 36.3077 35C54.4615 35 54.4615 68.3333 72.6154 68.3333C90.7692 68.3333 90.7692 155 108.923 155C127.077 155 127.077 55 145.231 55C163.385 55 163.385 168.333 181.538 168.333C199.692 168.333 199.692 101.667 217.846 101.667C236 101.667 236 75 254.154 75C272.308 75 272.308 201.667 290.462 201.667C308.615 201.667 308.615 248.333 326.769 248.333C344.923 248.333 344.923 1.66667 363.077 1.66667C381.231 1.66667 381.231 135 399.385 135C417.538 135 417.538 215 435.692 215C453.846 215 453.846 41.6667 472 41.6667"
                      stroke="url(#paint1_linear_chart)"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_chart"
                        x1="236"
                        x2="236"
                        y1="1.66667"
                        y2="248.333"
                      >
                        <stop stop-color="#0b95da" stop-opacity="0.2"></stop>
                        <stop
                          offset="1"
                          stop-color="#0b95da"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_chart"
                        x1="236"
                        x2="236"
                        y1="1.66667"
                        y2="248.333"
                      >
                        <stop stop-color="#0b95da"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="lg:col-span-2 bg-white dark:bg-[#18272e]/60 rounded-xl p-6 border border-primary/10 dark:border-primary/20">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-medium  dark:text-background-light">
                      Sales by Category
                    </p>
                    <p className="text-xs /60 dark:text-background-light/60">
                      Last 30 Days
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-green-500">
                    +5%
                  </span>
                </div>
                <div className="h-72 flex flex-col justify-end space-y-4">
                  <div className="flex items-end gap-4 h-full px-2">
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div
                        className="w-full bg-primary/20 dark:bg-primary/30 rounded-t"
                        style={{ height: "80%" }}
                      ></div>
                      <p className="text-xs /60 dark:text-background-light/60">
                        Running
                      </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div
                        className="w-full bg-primary/20 dark:bg-primary/30 rounded-t"
                        style={{ height: "40%" }}
                      ></div>
                      <p className="text-xs /60 dark:text-background-light/60">
                        Training
                      </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div
                        className="w-full bg-primary/20 dark:bg-primary/30 rounded-t"
                        style={{ height: "10%" }}
                      ></div>
                      <p className="text-xs  dark:text-background-light/60">
                        Yoga
                      </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div
                        className="w-full bg-primary/20 dark:bg-primary/30 rounded-t"
                        style={{ height: "100%" }}
                      ></div>
                      <p className="text-xs  dark:text-background-light/60">
                        Outdoor
                      </p>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-2">
                      <div
                        className="w-full bg-primary/20 dark:bg-primary/30 rounded-t"
                        style={{ height: "60%" }}
                      ></div>
                      <p className="text-xs  dark:text-background-light/60">
                        Accessories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

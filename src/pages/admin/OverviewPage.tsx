import React from "react";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-y-auto">
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
              <span className="material-symbols-outlined">receipt_long</span>
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
              <span className="text-sm font-semibold text-green-500">+10%</span>
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
              <span className="text-sm font-semibold text-green-500">+5%</span>
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
                  <p className="text-xs  dark:text-background-light/60">Yoga</p>
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
    </div>
  );
};

export default OverviewPage;

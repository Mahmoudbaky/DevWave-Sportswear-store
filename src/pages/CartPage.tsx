const CartPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <a
                  className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white"
                  href="#"
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <span>FitFlex</span>
                </a>
                <nav className="hidden md:flex items-center gap-6">
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    New Arrivals
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Men
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Women
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Accessories
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Sale
                  </a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <label className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      search
                    </span>
                    <input
                      className="w-full max-w-xs pl-10 pr-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 border-transparent focus:ring-primary focus:border-primary text-sm"
                      type="search"
                    />
                  </label>
                </div>
                <button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Shopping Bag
              </h1>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm">
                  <div className="flex-shrink-0">
                    <img
                      alt="Performance Running Tee"
                      className="w-24 h-24 rounded object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLjDeMauqXVXe7wg1tWrCoMSn1IVWgMr1RS0lViiQRF61kg5tPJ2tNB_4X_MUJ1Riaq6AVXPzs1oBTa7dBlddK8KmHqQPJce87yevJT-3f1qx1LD_eo2QkG5VLNSHeZBAqY9N8jy2zU0H0oetli42GkHMJb5xmS3mS8FSLq1PwAlIqMOX1n7lExBt2XhWWeQt9pb_UqOC7OvHfwox_JswuQuVcvUcMW3YHtkqp3rGn_XVQbHQvU8WsgJBurLDc5d3N1HJwmwzs27Y"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      Performance Running Tee
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Size: M
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      $45.00
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      -
                    </button>
                    <span className="font-bold text-lg">1</span>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      +
                    </button>
                  </div>
                  <button className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm">
                  <div className="flex-shrink-0">
                    <img
                      alt="Lightweight Training Shorts"
                      className="w-24 h-24 rounded object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMWQSgp0h8wYqs6wsAOv-VYaThBCf1hN0_TEbegqBGkg11yDgdtQKSWN9jMH70W8EDHUCYv7QnGKlx032Ls50i1S4qVpHI_87zQbQdlCVuU7RueoL4HHWaa49IMPZrrmjVIxnwom4HEXAYveo8PzxCG8WqTG_G4AYp4LXJXDzhRUfijtmWaepAyc14NDQhlESh2n5Tn5joY9pbkVOysZBONL5JbGQmC-ZMjoBgD4Ut8FJ2zsl0KxORC6fumYWtp7zTpZTumh4LATc"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      Lightweight Training Shorts
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Size: L
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      $35.00
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      -
                    </button>
                    <span className="font-bold text-lg">1</span>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      +
                    </button>
                  </div>
                  <button className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm">
                  <div className="flex-shrink-0">
                    <img
                      alt="Agility Training Shoes"
                      className="w-24 h-24 rounded object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQNmJqsn98ystdn4rsk9HCQ-UDUa9ZUYyoREXg215yw1E1qZX0_PJPgWbbvDAC1cF9-2KZn27mH1PelR6iQM0Y0MdHbd-5mBvqWbokoLYh2nzGBJ8p2a3KkKXY4P63KH2Vfo-iHTOj4nN65wc_kBz7MWHf6cLtnrlbva5tJzx0XxB8xa33MDzCeb8ccwrHj7H9hGx-jnBi9FC3xX3GOUMvepwACd2F7Rh2J0wskv8kIydoTO8lV8xBCL3SgvapExiAc_wlOGSagLk"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      Agility Training Shoes
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Size: 9
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      $40.00
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      -
                    </button>
                    <span className="font-bold text-lg">1</span>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                      +
                    </button>
                  </div>
                  <button className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        $120.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>Shipping</span>
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        Free
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>Estimated Tax</span>
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        $12.00
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
                    <span>Total</span>
                    <span>$132.00</span>
                  </div>
                  <button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;

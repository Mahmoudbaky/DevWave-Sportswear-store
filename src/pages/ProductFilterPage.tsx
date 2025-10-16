const ProductFilterPage = () => {
  return (
    <body className="font-display bg-background-light text-neutral-800 dark:bg-background-dark dark:text-white">
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 z-10 border-b border-neutral-200/50 bg-background-light/80 px-4 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-background-dark/80 sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
            <div className="flex items-center gap-6">
              <a className="flex items-center gap-2" href="#">
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
                <span className="text-xl font-bold text-neutral-900 dark:text-white">
                  FitFlex
                </span>
              </a>
              <nav className="hidden items-center gap-6 md:flex">
                <a
                  className="text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  href="#"
                >
                  New Arrivals
                </a>
                <a
                  className="text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  href="#"
                >
                  Men
                </a>
                <a
                  className="text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  href="#"
                >
                  Women
                </a>
                <a
                  className="text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  href="#"
                >
                  Accessories
                </a>
                <a
                  className="text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  href="#"
                >
                  Sale
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <label className="relative">
                  <span className="sr-only">Search</span>
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-neutral-400 dark:text-neutral-500"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </span>
                  <input
                    className="form-input w-full rounded-lg border-neutral-300 bg-background-light py-2 pl-10 pr-4 text-sm placeholder-neutral-400 focus:border-primary focus:ring-primary dark:border-neutral-700 dark:bg-background-dark dark:placeholder-neutral-500 dark:focus:border-primary dark:focus:ring-primary"
                    placeholder="Search"
                    type="search"
                  />
                </label>
              </div>
              <button className="rounded-lg p-2 text-neutral-500 hover:bg-primary/10 hover:text-primary dark:text-neutral-400 dark:hover:bg-primary/20">
                <span className="sr-only">Wishlist</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                </svg>
              </button>
              <button className="rounded-lg p-2 text-neutral-500 hover:bg-primary/10 hover:text-primary dark:text-neutral-400 dark:hover:bg-primary/20">
                <span className="sr-only">Cart</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
              <button
                className="h-9 w-9 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKJihdG_4TkEEmSCGEbdexB5uCnJgG939RQJ_x4s8_tK2N8NzkkRrqADnnKrn0FB0_wupyfn0T_7kJKBUvzmm7K_bkGj3Mn2g-GHaJVWKe5DpVC9w1S0ElYplyhCVsKtcpVO9rHsfzHPxGH6pUXHLqBeqqAau54IgF5BeOEcRwa3-QcseJwMNlrPGZUtJgBbsSi4HUO-U4cPadDQpWlVbQGJkDZLnnkn5co4nBDPeQC9s9f5fhMrHWKAJ9DR-QzG4d1yODaRrX2p0')",
                }}
              ></button>
            </div>
          </div>
        </header>
        <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          <aside className="space-y-8 lg:col-span-1">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Filters
            </h2>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Category
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>Apparel</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>Shoes</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>Accessories</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>Equipment</span>
                </label>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Size
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>XS</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>S</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>M</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>L</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>XL</span>
                </label>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Brand
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>FitFlex</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>ActiveGear</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="h-4 w-4 rounded border-neutral-300 bg-background-light text-primary focus:ring-primary dark:border-neutral-600 dark:bg-background-dark dark:focus:ring-offset-background-dark"
                    type="checkbox"
                  />
                  <span>SportStyle</span>
                </label>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                Price
              </h3>
              <div className="relative pt-1">
                <div className="relative h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <div
                    className="absolute h-2 rounded-full bg-primary"
                    style={{ left: "20%", width: "60%" }}
                  ></div>
                  <div className="absolute -top-1" style={{ left: "20%" }}>
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-white dark:bg-background-dark"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 dark:text-neutral-400">
                      $40
                    </span>
                  </div>
                  <div className="absolute -top-1" style={{ left: "80%" }}>
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-white dark:bg-background-dark"></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 dark:text-neutral-400">
                      $160
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:col-span-3">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Sportswear
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
                Apparel
              </span>
              <span className="inline-flex items-center gap-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
                Shoes
              </span>
              <span className="inline-flex items-center gap-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
                Accessories
              </span>
              <span className="inline-flex items-center gap-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20">
                Equipment
              </span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOM-ZZq9AAV_9fuWi8eo_6Litt938jk1XbTjYCJgKcj7didNLBO8qjqJa0G-wrUhPVH4b5pEcE4FiNgRkQJZ4BRMOijzgVW_vdIvL32OOJA29AwNaWRnQ4szY6kizWspMJ5vwgqn5IuhwJSYlUvkmLS4EgMmBykmbXZUdzXLZy2MqKe6ID-48b3_JQDolnBGYkQjtpopZAjgLmg6SAercj-Dgfz-HFAoTEjwMjYBQxkgP26RSER_UlytRYmSV13cYhm2l4Hwo16_c')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Performance Running Shoes
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $120
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBIaTk1MgENlM1unWVNImzOigfhovwPxK0ZbfqaHjJpRQO44Kwv5_lgSPAgG8qu1LLksGWENdoFibgJOLjFzkdQoTCIVhOQduSc9jRnWi_0DwIXJAQ5nnxalV0A1CGkxId2M1zmgdldUV2--lvPeb16IB1TicMwHmyXLtx_vjvfZizv0z5XLM09na1AbUkZ_kjf5HNCFNo-p5tzbVivVg_UACMg_QzVjSQhnprZsG3srN8Su5h0uYgIgB5x_lUMaGYOWOaenXzqNE')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Breathable Training Top
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $45
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHmDj9kJgv9UsV1zD4s8O-bQE6xvw9m3wudXfDrbKhWTwFM83VQylWgVmfFqNM29xPsAbh_4XF2eCfaZAPOUOWAppklMHflaQiH0oFeW2IOkgGm8Flfvz9wLZQ_ow2hk2FiCaklEXClCjAJIKcw4XrOU_WDfNpKOcULsCXQ8CnqOXCfoaOe6AcCu0wNOy-rFLm4B8nXDVCP7uhG9opp6nMOrABhj5Z2LrHeymZJckz9ZqvED_6syZOjY8AXSiEi79G9KdYp9fXUVc')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        High-Impact Sports Bra
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $60
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUbFUzQ1fxxpywhqerrxp4AHEkKfl7MZtxbkdGrca-NAZHCLkURt1EiftgZK-dMPyZ--vdfHCYlFXFqkN3v_X3gJAi9yKf7YxKlFARaxLucQe8iaxUP8BR5CEYMgc97rbatTqMoXV7HjKmEdrNgLa0fmEAk6cEQdCmMDASUMwRrmbQMeko9ll-7UqHLSwXL1JfUaqm9Oe2zj3xiExauScGSiKwG_mr0C7eB3BKHw6LmfoRs8lhvLFeDkDms1F6YNoRj2ehdY-PVWc')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Lightweight Running Shorts
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $35
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDo9bnelDxDasZKGHNm45As4cK4NRejTNhvC-skqD-kZ34jzGC8GCPh2m7Alg4yUepC49zG-YDowsOyMeKPtd9BZO6E9B22QkfyIEiH7ZQ_0tGl2yHnlHIXbe2IA0dJrzNuDGsrYp-XhHu9rii1Y9d6oxiEg7SowbTEYNlXNicUaZXZ20vG0QAgqTcbfCdKB03KgLlNZvBDor7Mvsxr4xhoSlVa6bRH9TQcyVY0BWHj-NLeC7Rks1RE1zkKinTnBdxsQfwAvad_QcM')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Moisture-Wicking Socks
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $15
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCijs_4GJvxgrvVfVyvtIe9zWoPRpmiZk60XEL1byYxcipUfyTeVIXRAwpEjUJ9z9y_3W4GYwmSndpAWhafnrDVWVqnhG_WgE-bHGWf1BxcZoswpU6a7P8GEg_865G5tstwOIj1u7fJYB7srrl70jacKvGqgxKb7OFBAzbfH8T8zwHSbfMwmFvYsq6qwMtD_hQ3nJkU0LSo6it5hwJp9uxJseaWy4YsQVosOfJYOWg3i9maBDSnSm8iyAWl0z2eFJ6wkTNt3TH3c9E')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Adjustable Baseball Cap
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $25
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZPqxBtrmP4sgtnBg25giUdTXDTB3crQB7RRwy2MPkK5WnGtXFr_Vd6GbMvA0MOU2UzeLRyBWTGGf7dLM5I_tSc0nIWWLepoLiF7pC4T4BbD3ohrIGX0OH7pKOT_fQ4T6alWHwejYW19_tj-koZ8EXUvfMbbSb3DjO98sNBki4j_Fpn1SK-NRK1ZkxbRHWRqCoyvSAgFjbQrVYXK_mvDCjBhvJyHPnF_Z0EZd5UI4_dlc5hy9SWNbS7caUDyukVP7E3l15j2w-kk')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Durable Gym Bag
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $50
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPa2JhEe0UDmB-WTy5VqdnwRyZSHArbqE1pL77CeVBePpQkstEqxDYNGhYqk66NITJjRVACzcmNSM13T4kucJdnZnKz_jIADGPbzlB9BIE0qiyiybQQQt3-qa1Q42JtpMGJ1N0jti24BTWgR8V-T_Yxzwizkd95GXDID-Dm5gYBPJo0irfGYQb_iC258ALfwXFhiM-clMJtpGccxJjK4MFo_vYFWDMgMFg9SYtToLaTx3vj8HTZz2Cw0oLONwv81ct2dQS8r8obd8')",
                    }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-neutral-700 dark:text-neutral-300">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Resistance Bands Set
                      </a>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-neutral-900 dark:text-white">
                      $30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </body>
  );
};

export default ProductFilterPage;

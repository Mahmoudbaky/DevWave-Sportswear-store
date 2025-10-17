import Header from "@/components/products/Header";
import Filters from "@/components/products/Filters";

const ProductFilterPage = () => {
  return (
    <div className="font-display bg-background-light text-neutral-800 dark:bg-background-dark dark:text-white">
      <div className="flex min-h-screen w-full flex-col">
        {/* Header */}
        <Header />

        <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {/* Filter */}
          <Filters />

          <section className="lg:col-span-3">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Sportswear
            </h1>

            {/* <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
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
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBKSpEzBcSBeulwBbbcCBWJ_KwveV4EwW1T7UhY48YNYLGl8d2UAABEVd1S6H3Vh8HebEpauMxiQ9FxLkhMO9mJkFAe9x8v2cxR3K04l0LEqXFNDG0US0cZQgKDciQ6Af9LiIPOOWaWIV7VO6yMv-q8Zq5l8cqFj1Ky_jN6ZfwvD1y0UoVDga6UwfAKFgoekQZxAozc3ALfFVGGNeVLE5Sw10UXfXw47qGN8yc5rcJWDf3-AUk3rCisdMT84LZaZ2VYlgdp3fZbWs')",
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
            </div> */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductFilterPage;

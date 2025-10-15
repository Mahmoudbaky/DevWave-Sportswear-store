import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import ImageDisplay from "@/components/products/ImageDisplay";
import productsService from "@/services/productsServices";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: productResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productsService.getProduct(id!),
    enabled: !!id,
  });

  const product = productResponse?.data;

  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="px-4 md:px-10 lg:px-20 py-5">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6">
                  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-96"></div>
                  <div className="flex flex-col gap-4">
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-8 w-3/4"></div>
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-6 w-full"></div>
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-4 w-1/2"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="px-4 md:px-10 lg:px-20 py-5">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center h-96">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Product Not Found
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {error?.message ||
                      "The product you're looking for doesn't exist."}
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="px-4 md:px-10 lg:px-20 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 p-4 text-sm">
                <a
                  className="text-gray-500 dark:text-gray-400 font-medium leading-normal"
                  href="/"
                >
                  Home
                </a>
                <span className="text-gray-500 dark:text-gray-400 font-medium leading-normal">
                  /
                </span>
                <span className="text-gray-900 dark:text-white font-medium leading-normal">
                  {product.name}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6">
                {/* here will be image section */}
                <ImageDisplay images={product.image ? [product.image] : []} />

                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal">
                      {product.description}
                    </p>
                    <p className="text-gray-900 dark:text-white text-3xl font-bold leading-normal">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <button className="mt-8 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Add to Cart</span>
                    </button>
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
                      <h3 className="text-gray-900 dark:text-white text-lg font-bold">
                        Product Details
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed mt-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Customer Reviews
                </h2>
                <div className="flex items-center mt-2 gap-2">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star_half</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    4.5 out of 5
                  </p>
                </div>
                <div className="space-y-8 mt-6">
                  <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Reviewer avatar"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvCo--18EnbR-s4Gt5QDKOzAsIEzTXQGcQccOGSCXU8_p0N3xbMB3s0ugZWzg35xAnrOeGORDu8mU5MgViHzkiSj9mJi5Yc39IBG8EhLpvIrXR2aBoxCYlISIJagIjYn6nXIl0Hg9aCno_WI38mCM3D_XlwaAArBzv8-E-fySIEXl-InXBzmVig7U23supkfEAYgdKeQ5-yeEMe0I0wgurkXUSekSudxjn8H7hfTwHEBt9wcmenaBHio55szYH8Fvy7HW4Jl_3VUQ')",
                        }}
                      ></div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          John D.
                        </p>
                        <div className="flex text-primary text-sm">
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Absolutely the most comfortable shoe I've ever worn. Great
                      for running and everyday use. Highly recommend!
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Reviewer avatar"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2Vy8LdOul5NJfpMnDmebFh_F_rEOzFA55NS4U4Gv0pFOUxpyNOngyMhIMuIjTvv72qA4DTRJ6eShC4S4bizTNZttFEsrXFhHwT1F_HCwK8UT4tFOJca6iteqSZCvEGCA-BaF8RRsQC9UsWZQcmArosccasLPBVXhWcyqqIaZqcQIOVc8GoXI26_CzYg5VveGlF2jlZUbPuqFbWcsm2hUn0p7M3so60S8Lqp6MCyHM__xWwXu0hl5y5PVPPo5HL4zG4rTKaMXNr34')",
                        }}
                      ></div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Sarah K.
                        </p>
                        <div className="flex text-primary text-sm">
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star
                          </span>
                          <span className="material-symbols-outlined text-sm">
                            star_outline
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Great shoes, very stylish and comfortable. Only downside
                      is they get dirty easily. But overall, a fantastic
                      purchase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div
                      className="w-full h-48 bg-center bg-no-repeat bg-cover bg-gray-100 dark:bg-gray-800"
                      data-alt="Related product: Women's running shorts"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKMS0JzBOOPXDwClDzW-8vfJfirNgoT4CEOKzXD4Uz5bIrbMH8h6bqJYmUIjgAUtAFp4QtONA_ix_XRwGfRMHSL8Pav7utyZLvFg0ojAQOzRPu15XKhcud-lKzL71XpBaHjET-JCX5tZyei5uR6xAnF9QwuJDuajTzI845qQEOuYMfG4_2aq7AWhhcg60CfGZm6xhz23gtVyF1zxU8R2gDWHEBVP82awjUQSD_UN29qD7cqpPPm7orL3wXx_3celthT_J-VnfXpLM')",
                      }}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Women's Running Shorts
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        $45
                      </p>
                    </div>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div
                      className="w-full h-48 bg-center bg-no-repeat bg-cover bg-gray-100 dark:bg-gray-800"
                      data-alt="Related product: Athletic socks"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTowOi_nsZIJ2e2qCCwyF6emHAc9fU7Lw9vkZjgEEcVxsNLumwldXKyHD6gbQ20ApW8TB78SzUnypprpG3xi4YYoq69PfTcjFuCRCnApsc520jPf4j9FAf8ibd3mcYRwCAAosduCWAEOaC19s8xIjjhWo5-K2ljBlRlJpao1AadB5zVfsuwywCc7WreBXroc534TaVf82DWlJOaTw2of2Sc6UJutA5iUHBRAvEe-O7VwbnWKk2HOLqy3N-4Oq4eUNd0DokXr8UXBY')",
                      }}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Athletic Socks (3-Pack)
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        $25
                      </p>
                    </div>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div
                      className="w-full h-48 bg-center bg-no-repeat bg-cover bg-gray-100 dark:bg-gray-800"
                      data-alt="Related product: Performance t-shirt"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuSEfK8quchMNFsrHRQjD9IYuc-RZMFV9aGplvSVDHa1yDvw5poDilu77lEIMx7mXyeI2WhOFYgpj_vDINmDD8Un_jCUAV_z7Y_2ooIok8KHgDRNnL5_NbepEHBMns2hhcUgFvwYlqDhvrnckg45DmKhdXW8qQm6ow8eWc0BeZ2a74bKvKmSyZRCVT150xRwQ3tnhoV1vjWwVjYwCGWZmyLDPq2meD4LyvQITSCOkqPSzedI4Aukl_8mMXcjCNYeUSYRz5a-jP2Hw')",
                      }}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Men's Performance T-Shirt
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        $35
                      </p>
                    </div>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div
                      className="w-full h-48 bg-center bg-no-repeat bg-cover bg-gray-100 dark:bg-gray-800"
                      data-alt="Related product: Water bottle"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfQBR1Yzuw1mp4wh5dUHOX97_13f64yt9kmsmtZHEvW8cw3EaaGMOHD25cnu8D8_xOMCfcaVZaOcB97x73zmoO1h3ub-XWpFKbXT57DafpH8H0w6Af3-R2geVKzF6zgpoopAYTTilRWrXCTdc8UioaprmfpwfpZE-gha3gIxvapjVYYECatXE7oiBJPVwEIfjuX2CaV9wtYDg08oIsnCxITVuJN_T9NcWsf7A3AyuMXseZywR3RCeKKEPgL6q-lxhbPDfOtvt4b8g')",
                      }}
                    ></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Insulated Water Bottle
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        $30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

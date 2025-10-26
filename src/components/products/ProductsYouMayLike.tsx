import React from "react";

const ProductsYouMayLike = () => {
  return (
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
            <p className="text-gray-600 dark:text-gray-400 mt-1">$45</p>
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
            <p className="text-gray-600 dark:text-gray-400 mt-1">$25</p>
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
            <p className="text-gray-600 dark:text-gray-400 mt-1">$35</p>
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
            <p className="text-gray-600 dark:text-gray-400 mt-1">$30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsYouMayLike;

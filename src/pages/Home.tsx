import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedCategories from "@/components/home/FeaturedCategories";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
              <div className="relative rounded-xl overflow-hidden mb-16">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZb9tZoMwNHUZf2xZ3NLqu_dLFdYC7Tcm_a6G7RJNN2j-03voHyjCAt7I9hOaNjKtk_hayfxslveGkAw_cozJSpvzWWROSXmoeF7pzvoLLScZKevjQLqMDfKWSa2vStfHnwP9cJxWDu8JxJ_TPc2zsrZjjIsbCiPNC532jaSAseu6gQwBR9WKr8QO6uDFuNtKpwUYS0irPSzzAKul8-e8ZPR5N5sXqj4dXZY5ugwk-879QgTU6N3_kmQv4NgZ_nZUwN94Q7dOFcak')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative min-h-[480px] flex flex-col items-start justify-end p-8 sm:p-12 text-white">
                  <div className="max-w-lg">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                      New Arrivals
                    </h1>
                    <p className="mt-4 text-lg">
                      Explore the latest sportswear and gear for your active
                      lifestyle.
                    </p>
                    <button className="mt-8 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
                      <span>Shop Now</span>
                    </button>
                  </div>
                </div>
              </div>
              <FeaturedCategories />
              <section className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                  Popular Products
                </h2>
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-8 snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                  <div className="snap-start shrink-0 w-[280px]">
                    <a className="group" href="#">
                      <div className="w-full aspect-square rounded-xl overflow-hidden">
                        <div
                          className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyBzsDlFAUIjBhlNBB-a3lI3OqWurWp0LyJTb-Fkb6NkgIwPfA7HiOQVvvtets0kYeUic29T3ilkkH38u_OPJp7yrFs05cC0XlLYzdOLaWcM2UYlAhJ9f5svaiDU1kecSoOiDzohluHPR-8TmwHaHugudfQSsGOFGMa2lETmkX_NeA72jMLcx6VJaBP1LKxHnFJFdOBkOL52cizBmkOf3Mp8YeT67J9X5iWcjws4wqpn4tgEs5eVcPGqiW-fT1YZl24dsBkiUxha4')",
                          }}
                        ></div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Performance Running Shoes
                      </h3>
                    </a>
                  </div>
                  <div className="snap-start shrink-0 w-[280px]">
                    <a className="group" href="#">
                      <div className="w-full aspect-square rounded-xl overflow-hidden">
                        <div
                          className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsuaj1OMHjFhlucL33Rk7LUOW1zsNn4vfn-ZF76tgEXK0qgL7DufdSh8GLXaTrZyZa6NQtU0XeA32SBooDhWG7uYC4XURVWRWOAHeG4jqmMeiOEkq-mxdEdcfkPnRnbHdSAyArfzUVFkm5N4kqjFhK_i097-8tKpvKz53b_jzXtVPCvJgKYCS2IigVZWFzCOtjB887B5geDAVP7LK3veKWwGepoWaIw4L8Y9MEAcDsQRYhcUkHya8gvrSB3RwJz_tZIP_xqDVDqIg')",
                          }}
                        ></div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Lightweight Training Jacket
                      </h3>
                    </a>
                  </div>
                  <div className="snap-start shrink-0 w-[280px]">
                    <a className="group" href="#">
                      <div className="w-full aspect-square rounded-xl overflow-hidden">
                        <div
                          className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnM4CnTfyzoRJOykfHod6cic5w9TPZ2FwwmbZkG2Z28KYzRBoPbAskRuzG9MwokFhxfSX_lq0aCFgP9_kFHR_KL2_1k3Idw8OqdJHbgnadkmMFd5jLNejhLQNJXkwLxvc2by50MRWlc3Ta5fiuJrtA-LvuI4YpX3Jn0aDKcOIkvnSBXJOttdHDSi-2Ty63TXs666SA-k2Np8x7g4miirVMHSnCFH8sj9NSI0V31xnPpH84L75GGe6KlgmdMsNh6C3y7XTHu5RQpZk')",
                          }}
                        ></div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Comfort Fit Yoga Pants
                      </h3>
                    </a>
                  </div>
                  <div className="snap-start shrink-0 w-[280px]">
                    <a className="group" href="#">
                      <div className="w-full aspect-square rounded-xl overflow-hidden">
                        <div
                          className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALqvyhwndOBtTYqoR0jLhn-P_or16QIr0yH_1mtX-x1GfKiBuwKHNcahSQs43Y6j-ikQHv_me_7y5aqm9Qvqlry1S6vPHWuMtMZi5drqt0GhPfird0jZmFwoqxzNcfWIMfKOXIt-ym5oFcRSfradzehEOTlPocSVdsUPym8VgSj35GLy9WFI9k61G-lVf8_XvEf-rMoEt2ufR9VOt3dl2COZgAhUN61MjBjp_buwM-XSF1ufComF4wqzErmxkYdgALjWfctk1jOZM')",
                          }}
                        ></div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        High-Top Basketball Shoes
                      </h3>
                    </a>
                  </div>
                </div>
              </section>
              {/* <div className="relative rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0hdqEPRGf4qAzrbPI2Rm2n9n6yQwcltO7dii3798etPuSAW5bgdHAR70TSU65uBUEFy7qeuc6_WY9qYod2ko1bQ4OCggPnPcd_lzi2kYxmqPSxgX179b6y2oWZP_VsO3duV2ilruBvHFTn7Vm-Di92_kplzfLgjNdGhdtuIUKjpnEK9uxWiGPyvbnjXiaBxJMes0YadQ95CcD7HLFB_HR79Awk-pBoJ-5QKunShbSc2kscqRgQ-aZJXf8dEVKmBgsmQBXQWS5wfE')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div
                className="relative min-h-[480px] flex flex-col items-start justify-end p-8 sm:p-12 text-white"
              >
                <div className="max-w-lg">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Summer Sale
                  </h1>
                  <p className="mt-4 text-lg">
                    Up to 50% off on select items. Limited time offer.
                  </p>
                  <button
                    className="mt-8 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors"
                  >
                    <span>Shop Sale</span>
                  </button>
                </div>
              </div>
            </div> */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;

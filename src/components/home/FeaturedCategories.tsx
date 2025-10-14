

const FeaturedCategories = () => {
  return (
    <section className="mb-16">
              <h2
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
              >
                Featured Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <a className="group" href="#">
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaMyuzTqnhbhcbgACBImtqC9sWbNsrmtkhMEVaea-QQhPFXKUbmSc5vxRXsVRVwshEsJxHwg9-sZewM7cYXfzYlSJqpghQb_1r8mAlgZbew6syavlCqlb9cPLMSYNHajKPargHfCmIEG6e8MQQC7PxDR6DPYhxw8PQNE1e93aGNr4VXq-N0BL0U844hkZKp4glmxh2iRdvJ2UgnyiImA5-iAC-vgoD1WH0JvB0XI2Coa8n4mEj_FM6XwoPeGjovliAdDkNd-WyIAk')",
                        }}
                    ></div>
                  </div>
                  <h3
                    className="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Men's Apparel
                  </h3>
                </a>
                <a className="group" href="#">
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBKSpEzBcSBeulwBbbcCBWJ_KwveV4EwW1T7UhY48YNYLGl8d2UAABEVd1S6H3Vh8HebEpauMxiQ9FxLkhMO9mJkFAe9x8v2cxR3K04l0LEqXFNDG0US0cZQgKDciQ6Af9LiIPOOWaWIV7VO6yMv-q8Zq5l8cqFj1Ky_jN6ZfwvD1y0UoVDga6UwfAKFgoekQZxAozc3ALfFVGGNeVLE5Sw10UXfXw47qGN8yc5rcJWDf3-AUk3rCisdMT84LZaZ2VYlgdp3fZbWs')",
                    }}
                    ></div>
                  </div>
                  <h3
                    className="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Women's Apparel
                  </h3>
                </a>
                <a className="group" href="#">
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_9WCB-V5zxJ08CKV1MtiMBrReEp_WM9fol_sgOXfEx4YNSfaYFLBFiPKB9gFYiyTLsJRoCudvhwZRrcP37zpH3r579hHzpjWUgIHivIpH4wbr1g8cMc5S9huUwQ_5LHpon5WVJwaN7AUczY4BAFXcH_Yzp4f67t05W1VX9p-ggfBst3jS9zyzDpBNsudz5-kL6mxbgJGKrXPsXCCmGBT6ZmZlUzHcyIg0NBx4fQ116W-AWf5nYBgBd19z_4kL0VLnJzXf7063wuw')",
                      }}
                    ></div>
                  </div>
                  <h3
                    className="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Footwear
                  </h3>
                </a>
              </div>
            </section>
  )
}

export default FeaturedCategories
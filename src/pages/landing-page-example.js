import * as React from "react"
import LandingPage from '../components/LandingPage'

// markup
const LandingPageExamplePage = () => {
  return (
    <LandingPage>








      <div className="bg-white overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">

            <div className="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
              <div>
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                  It’s time to build
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Amazing features packed in a neat package
                </h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  You will love working with your newly updated and customized dashboard.
                </h3>
              </div>
            </div>

            <div className="lg:w-7/12 xl:w-7/12 flex-none relative">
              <div className="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10"></div>
              <div className="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10"></div>
              <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="md:w-1/2 md:mt-24 space-y-6">
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-orange-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-orange-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-orange-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-adjustments inline-block w-5 h-5"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      Customizable
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.
                    </p>
                  </div>
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-red-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-chart-pie inline-block w-5 h-5"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      Rich Statistics
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-green-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-green-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-green-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-globe inline-block w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      Works globally
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.
                    </p>
                  </div>
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-purple-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-lightning-bolt inline-block w-5 h-5"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      Lighting fast UI
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-gray-100 overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">

          <div className="text-center mb-16">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Trusted by thousands of professionals
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              Web developers from all over the world are using our products. Join them and build something amazing!
            </h3>
          </div>

          <div className="relative">
            <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 transform -translate-y-12 translate-x-12"></div>
            <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 transform translate-y-12 -translate-x-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center rounded-xl shadow-md bg-white divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden relative">
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  3500+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Projects
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  260+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Clients
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  175k+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Earnings
                </dd>
              </dl>
            </div>
          </div>

        </div>
      </div>




      <div className="bg-white">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
              Real Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Customer Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="border rounded-md bg-gray-50 shadow-sm relative">
              <div className="absolute top-0 right-0 text-8xl mt-1 mr-2 text-indigo-200 opacity-75 font-serif">“</div>
              <div className="px-4 pt-14 pb-6 sm:px-6 sm:pb-6 relative">
                <blockquote>
                  <p className="leading-7 mb-5">
                    I’ve been using pixelcave themes for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="javascript:void(0)" className="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110">
                      <img src="https://source.unsplash.com/mEZ3PoFGs_k/160x160" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="javascript:void(0)" className="font-semibold text-indigo-600 hover:text-indigo-400">
                        Elsa King
                      </a>
                      <p className="text-gray-500 font-medium text-sm">
                        Web Developer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="border rounded-md bg-gray-50 shadow-sm relative">
              <div className="absolute top-0 right-0 text-8xl mt-1 mr-2 text-indigo-200 opacity-75 font-serif">“</div>
              <div className="px-4 pt-14 pb-6 sm:px-6 sm:pb-6 relative">
                <blockquote>
                  <p className="leading-7 mb-5">
                    I’ve been using pixelcave themes for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="javascript:void(0)" className="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110">
                      <img src="https://source.unsplash.com/sibVwORYqs0/160x160" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="javascript:void(0)" className="font-semibold text-indigo-600 hover:text-indigo-400">
                        Alex Saunders
                      </a>
                      <p className="text-gray-500 font-medium text-sm">
                        Graphic Designer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="border rounded-md bg-gray-50 shadow-sm relative">
              <div className="absolute top-0 right-0 text-8xl mt-1 mr-2 text-indigo-200 opacity-75 font-serif">“</div>
              <div className="px-4 pt-14 pb-6 sm:px-6 sm:pb-6 relative">
                <blockquote>
                  <p className="leading-7 mb-5">
                    I’ve been using pixelcave themes for years. The code is consistently high-quality and pleasant to work with, so I highly recommended them.
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="javascript:void(0)" className="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110">
                      <img src="https://source.unsplash.com/DLKR_x3T_7s/160x160" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="javascript:void(0)" className="font-semibold text-indigo-600 hover:text-indigo-400">
                        Sue Keller
                      </a>
                      <p className="text-gray-500 font-medium text-sm">
                        CEO and Founder
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>








      <div className="bg-white">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                Today
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Start your online business
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                Get the best results using our sophisticated system and simple to use services.
              </h3>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                <span>Start Free Trial</span>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>






      <div className="bg-gray-100 overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="lg:w-2/3 xl:w-1/2 mx-auto relative">
            <div className="absolute pattern-dots-xl text-gray-200 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
            <div className="absolute pattern-dots-xl text-gray-200 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
            <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
            <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
            <div className="p-2 rounded text-center relative bg-indigo-500 bg-opacity-10">
              <div className="p-8 lg:py-12 lg:px-16 bg-white rounded">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                  Subscribe to our newsletter
                </h3>
                <p className="prose prose-indigo mb-6">
                  Join us and receive the best curated news, freebies and resources directly to your inbox every week!
                </p>
                <form onsubmit="return false;" className="space-y-3">
                  <div className="flex items-center">
                    <input className="block border placeholder-gray-400 z-1 px-5 py-3 leading-6 w-full rounded-l active:z-1 focus:z-1 -mr-px border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="text" placeholder="Your email" />
                    <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none flex-none px-4 py-3 leading-6 rounded-r active:z-1 focus:z-1 border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="sm:hidden hi-outline hi-plus inline-block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                      <span className="hidden sm:inline">Subscribe</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 leading-6">
                    No spam ever, unsubscribe at any time. <br />
                    Check out our <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-400">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>




    </LandingPage>
  )
}

export default LandingPageExamplePage

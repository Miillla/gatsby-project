import * as React from "react"
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
      {/* <!-- Blog List Section: Featured Posts --> */}
      <div className="bg-white">
        <div className="space-y-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* <!-- Heading --> */}
          <div className="border-b py-2 flex items-center justify-between">
            <h3 className="uppercase font-semibold tracking-wide">
              Featured Posts
            </h3>
            <div>
              <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-chevron-left inline-block w-5 h-5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </button>
              <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-chevron-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>
          {/* <!-- END Heading --> */}

          {/* <!-- Blog Posts --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <a href="javascript:void(0)" className="block relative group rounded overflow-hidden">
                <div className="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <img src="https://source.unsplash.com/73F4pKoUkM0/800x600" alt="Featured Image of blog post" />
              </a>
              <p className="text-gray-600 text-sm font-medium mt-3 mb-1">
                Mar 3, 2021 · 12 min read
              </p>
              <h4 className="font-bold text-lg sm:text-xl mb-4 flex-grow">
                <a href="javascript:void(0)" className="leading-7 text-gray-800 hover:text-gray-600">The 10 best hiking trails in the world you should put in your bucket list</a>
              </h4>
              <div>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-chat-alt-2 inline-block w-4 h-4"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
                  <span>59</span>
                </button>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-eye inline-block w-4 h-4"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                  <span>2.5k</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="javascript:void(0)" className="block relative group rounded overflow-hidden">
                <div className="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <img src="https://source.unsplash.com/phIFdC6lA4E/800x600" alt="Featured Image of blog post" />
              </a>
              <p className="text-gray-600 text-sm font-medium mt-3 mb-1">
                Feb 23, 2021 · 20 min read
              </p>
              <h4 className="font-bold text-lg sm:text-xl mb-4 flex-grow">
                <a href="javascript:void(0)" className="leading-7 text-gray-800 hover:text-gray-600">The 20 best places in the world for star gazing</a>
              </h4>
              <div>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-chat-alt-2 inline-block w-4 h-4"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
                  <span>77</span>
                </button>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-eye inline-block w-4 h-4"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                  <span>3.7k</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <a href="javascript:void(0)" className="block relative group rounded overflow-hidden">
                <div className="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <img src="https://source.unsplash.com/T7K4aEPoGGk/800x600" alt="Featured Image of blog post" />
              </a>
              <p className="text-gray-600 text-sm font-medium mt-3 mb-1">
                Feb 15, 2021 · 5 min read
              </p>
              <h4 className="font-bold text-lg sm:text-xl mb-4 flex-grow">
                <a href="javascript:void(0)" className="leading-7 text-gray-800 hover:text-gray-600">How to explore one of the most beautiful lakes in the whole world</a>
              </h4>
              <div>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-chat-alt-2 inline-block w-4 h-4"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
                  <span>82</span>
                </button>
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-eye inline-block w-4 h-4"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                  <span>8.2k</span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- END Blog Posts --> */}
        </div>
      </div>
      {/* <!-- END Blog List Section: Featured Posts --> */}






      <div className="bg-gray-100">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-32">Section Content</div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-32">Section Content</div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-32">Section Content</div>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage

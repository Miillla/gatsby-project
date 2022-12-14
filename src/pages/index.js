import * as React from "react"
import Layout from '../components/Layout'


// markup
const IndexPage = () => {
  return (

    <Layout>
      

        {/* <!-- Hero --> */}
        <div className="bg-white overflow-hidden">
          {/* <!-- Hero Content --> */}
          <div className="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <div>
                <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-green-700 bg-green-200">
                  New dashboard is live!
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Premium leads for all your SaaS projects
                </h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  Focus on building your amazing service and we will do the rest. We grew more than 10,000 online businesses.
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                    <span>Join us today</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                    <span>Start a 30-day trial</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
              <div className="lg:w-96 relative">
                <div className="absolute pattern-dots-xl text-indigo-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
                <div className="absolute pattern-dots-xl text-indigo-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
                <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
                <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
                <img src="https://source.unsplash.com/MChSQHxGZrQ/800x1000" alt="Hero Image" className="relative rounded-lg mx-auto shadow-lg" />
              </div>
            </div>
          </div>
          {/* <!-- END Hero Content --> */}
        </div>
        {/* <!-- END Hero --> */}

    
        {/* <!-- Features Section: With Images --> */}
        <div className="bg-gray-100">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            {/* <!-- Heading --> */}
            <div className="text-center">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-terminal inline-block w-10 h-10"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Fully Featured
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
                Amazing and latest features to help you build your next idea with cool tools and super modern technology.
              </h3>
            </div>
            {/* <!-- END Heading --> */}
    
            {/* <!-- Features --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="py-5">
                <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
                  <img src="https://source.unsplash.com/clN6N30q3sw/800x650" alt="Preview Feature Image" className="rounded-lg" />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Amazing Feature
                </h4>
                <p className="leading-relaxed text-gray-600 mb-3">
                  Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti.
                </p>
              </div>
              <div className="py-5">
                <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
                  <img src="https://source.unsplash.com/zNRITe8NPqY/800x650" alt="Preview Feature Image" className="rounded-lg" />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Inspiring Feature
                </h4>
                <p className="leading-relaxed text-gray-600 mb-3">
                  Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti.
                </p>
              </div>
              <div className="py-5">
                <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
                  <img src="https://source.unsplash.com/H0r6LB_9rz4/800x650" alt="Preview Feature Image" className="rounded-lg" />
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Cool Feature
                </h4>
                <p className="leading-relaxed text-gray-600 mb-3">
                  Donec lacinia venenatis metus at bibendum? In hac habitasse platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse potenti.
                </p>
              </div>
            </div>
            {/* <!-- END Features --> */}
          </div>
        </div>
        {/* <!-- END Features Section: With Images --> */}
    
        {/* <!-- FAQ Section: To the Side --> */}
        <div className="bg-white">
          <div className="lg:flex space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            {/* <!-- Heading --> */}
            <div className="text-center lg:text-left">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                We Answer
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Frequently Asked Questions
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                Be sure to <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-400">get in touch</a> and let us know if you have any further questions.
              </h3>
            </div>
            {/* <!-- END Heading --> */}
    
            {/* <!-- FAQ --> */}
            <div className="space-y-8 lg:w-3/5 lg:flex-none">
              <div className="prose prose-indigo">
                <h4>
                  What features are included?
                </h4>
                <p>
                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                </p>
              </div>
              <div className="prose prose-indigo">
                <h4>
                  Do I get access to the community?
                </h4>
                <p>
                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                </p>
              </div>
              <div className="prose prose-indigo">
                <h4>
                  Do you offer email support?
                </h4>
                <p>
                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                </p>
              </div>
              <div className="prose prose-indigo">
                <h4>
                  Are the updates free for life?
                </h4>
                <p>
                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                </p>
              </div>
            </div>
            {/* <!-- END FAQ --> */}
          </div>
        </div>
        {/* <!-- END FAQ Section: To the Side --> */}
    
        {/* <!-- CTA Section: Simple Boxed --> */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="relative">
              <div className="pattern-dots-lg text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-12 -translate-y-16"></div>
              <div className="pattern-dots-lg text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-12 translate-y-16"></div>
              <div className="p-10 lg:py-12 lg:px-16 bg-white rounded shadow text-center relative">
                <div className="space-y-10">
                  {/* <!-- Heading --> */}
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                      Ready? <span className="text-indigo-600">Let???s do it!</span>
                    </h2>
                    <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                      Get your own custom dashboard and start building amazing services, always with the most solid and rock steady foundation.
                    </h3>
                  </div>
                  {/* <!-- END Heading --> */}
    
                  {/* <!-- CTA --> */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-2">
                    <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span>Get Started</span>
                    </a>
                    <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-information-circle inline-block w-5 h-5"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <span>Learn More</span>
                    </a>
                  </div>
                  {/* <!-- END CTA --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END CTA Section: Simple Boxed --> */}
    


    </Layout>

  )
}

export default IndexPage

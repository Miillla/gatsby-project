import * as React from "react"
import LandingPage from '../components/LandingPage'



// markup
const BlankPage = () => {



  return (
    <LandingPage>

{/* <!-- Page Container --> */}
<div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
  {/* <!-- Page Content --> */}
  <main id="page-content" className="flex flex-auto flex-col max-w-full">
    {/* <!-- Hero --> */}
    <div className="bg-white overflow-hidden">
      {/* <!-- Header --> */}
      <header id="page-header" className="flex flex-none items-center py-10">
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div>
            <a href="javascript:void(0)" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400">
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
              <span>Company</span>
            </a>
          </div>
          <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
            <nav className="space-x-4 md:space-x-6">
              <a href="javascript:void(0)" className="font-semibold text-gray-900 hover:text-gray-500">
                <span>Features</span>
              </a>
              <a href="javascript:void(0)" className="font-semibold text-gray-900 hover:text-gray-500">
                <span>Plans</span>
              </a>
              <a href="javascript:void(0)" className="font-semibold text-gray-900 hover:text-gray-500">
                <span>About</span>
              </a>
            </nav>
            <div className="flex items-center justify-center space-x-2">
              <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <span>Sign In</span>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- END Header --> */}

      {/* <!-- Hero Content --> */}
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 mb-5 hi-outline hi-beaker inline-block w-24 h-24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Amazing features for everyone
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            The best way to solve the problems you deal with every day in your web development life.
          </h3>
        </div>
      </div>
      {/* <!-- END Hero Content --> */}
    </div>
    {/* <!-- END Hero --> */}

    {/* <!-- Features Section: With Images --> */}
    <div className="bg-gray-100">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* <!-- Features --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img src="https://getmybackpaincoach.com/wp-content/uploads/2021/01/Ian.png" alt="Preview Feature Image" className="rounded-lg" />





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

    {/* <!-- Features Section: Modern With Icons Left --> */}
    <div className="bg-white">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* <!-- Heading --> */}
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
            Improve your design
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Fully Responsive UI Components
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Carefully coded and tested. You can use them to build the UI of your web project without ever leaving your HTML.
          </h3>
        </div>
        {/* <!-- END Heading --> */}

        {/* <!-- Features --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-code inline-block w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">
                Framework Agnostic
              </h4>
              <p className="leading-relaxed text-gray-600">
                Each component is an HTML code snippet which you can easily copy-paste into your code and customize it to match your needs. They will work in any JS or other framework you are using.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-device-mobile inline-block w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">
                Fully Responsive
              </h4>
              <p className="leading-relaxed text-gray-600">
                They are designed to work in various screen sizes, from mobile to desktop. Their design will adapt based on the device you are using, and you can easily preview them beforehand.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <span className="font-semibold text-xl text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100">JS</span>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">
                Alpine.js Snippets
              </h4>
              <p className="leading-relaxed text-gray-600">
                A few components might need a bit of JavaScript to work. We provide pure HTML examples with inline comments for which classes to toggle with JS but also working Alpine.js variations as well.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:space-x-10 py-5">
            <div className="flex-none group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 sm:mb-0 sm:mt-5 relative">
              <div className="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-indigo-300 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"></div>
              <div className="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-indigo-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"></div>
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white relative transform transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100 hi-outline hi-cog inline-block w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">
                Helper Tools
              </h4>
              <p className="leading-relaxed text-gray-600">
                Search and copy SVG icons, build your button markup or copy your favorite color classes with powerful tools. More are under development to give you superpowers.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- END Features --> */}

        {/* <!-- Link --> */}
        <div className="text-center">
          <a href="javascript:void(0)" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45 opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span>Live Preview</span>
          </a>
        </div>
        {/* <!-- END Link --> */}
      </div>
    </div>
    {/* <!-- END Features Section: Modern With Icons Left --> */}





















top is here 
    {/* <!-- Features Section: With Image Side --> */}
    <div className="bg-gray-100 overflow-hidden">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28">
          <div className="lg:w-1/2 xl:w-2/5 flex-none relative">
            <div className="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"></div>
            <div className="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"></div>
            <img src="https://getmybackpaincoach.com/wp-content/uploads/2021/01/Ian.png" alt="Preview Feature Image" className="relative rounded-lg shadow-xl mx-auto" />
          </div>
          <div className="lg:w-1/2 xl:w-3/5 md:py-12 space-y-10">
            {/* <!-- Heading --> */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Clean User Interface
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                You will love working with your newly updated and customized dashboard.
              </h3>
            </div>
            {/* <!-- END Heading --> */}

            {/* <!-- Features --> */}
            <div className="space-y-5">
              <div className="flex space-x-4">
                <div className="flex-none">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Amazing Feature
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-none">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Inspiring Feature
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-none">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Cool Feature
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- END Features --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- END Features Section: With Image Side --> */}
bottom is here 











    {/* <!-- Logos + CTA Section: Dark --> */}
    <div className="bg-gray-800">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            These companies trust us
          </h2>
        </div>

        {/* <!-- Logos --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-indigo-200">
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl font-semibold">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-cube inline-block w-10 h-10"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg>
              <span>boxspot</span>
            </div>
          </div>
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl font-light">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-code inline-block w-10 h-10"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span>TechCode</span>
            </div>
          </div>
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl font-bold">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-cursor-click inline-block w-10 h-10"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg>
              <span>cCLICK</span>
            </div>
          </div>
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-variable inline-block w-10 h-10"><path fill-rule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clip-rule="evenodd"></path></svg>
              <span>sBoard</span>
            </div>
          </div>
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl font-semibold">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-truck inline-block w-10 h-10"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path></svg>
              <span>uptruck</span>
            </div>
          </div>
          <div className="h-28 flex items-center justify-center relative">
            <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10"></div>
            <div className="relative inline-flex items-center space-x-2 text-2xl">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-location-marker inline-block w-10 h-10"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
              <span>freshloc</span>
            </div>
          </div>
        </div>
        {/* <!-- END Logos --> */}

        {/* <!-- CTA --> */}
        <div className="text-center pt-12">
          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
            <span>Join them today</span>
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* <!-- END CTA -->         */}
      </div>
    </div>
    {/* <!-- END Logos + CTA Section: Dark --> */}

    {/* <!-- Footer: Simple With Social --> */}
    <footer id="page-footer" className="bg-white">
      <div className="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm lg:text-base container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <nav className="space-x-4">
          <a href="javascript:void(0)" className="text-gray-400 hover:text-indigo-600">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-twitter inline-block w-5 h-5"> <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path></svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-indigo-600">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-facebook inline-block w-5 h-5"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path></svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-indigo-600">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-instagram inline-block w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-indigo-600">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-github inline-block w-5 h-5"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-indigo-600">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon-github inline-block w-5 h-5"><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z"></path></svg>
          </a>
        </nav>
        <nav className="space-x-2 sm:space-x-4">
          <a href="javascript:void(0)" className="font-medium text-gray-900 hover:text-gray-500">
            About
          </a>
          <a href="javascript:void(0)" className="font-medium text-gray-900 hover:text-gray-500">
            Terms of Service
          </a>
          <a href="javascript:void(0)" className="font-medium text-gray-900 hover:text-gray-500">
            Privacy Policy
          </a>
        </nav>
        <div className="text-gray-600">
          <span className="font-medium">Company Inc</span> ©
        </div>
      </div>
    </footer>
    {/* <!-- END Footer: Simple With Social --> */}
  </main>
  {/* <!-- END Page Content --> */}
</div>
{/* <!-- END Page Container --> */}

    </LandingPage>
  )
}

export default BlankPage

import * as React from "react";
import LandingPage from "../components/LandingPage";

import TestimonialCard from "../components/TestimonialCard";
import HappyClientSectionComponent from "../components/HappyClientSectionComponent";
import PriceComponent from "../components/PriceComponent";

const testimonials = [
  {
    name: "Jen Simmons",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Jen.jpg",
    quoteHighlight: "I've Saved Over $400 On Batteries!",
    quote: "My back hates me until I tried this!",
  },
  {
    name: "Karl Howard",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Karl.jpg",
    quoteHighlight: "Very Easy To Follow",
    quote:
      "Tom, your plans are great. I was able to bring my laptop batteries and several other types of batteries back to life with your methods. Your instructions are very easy to follow. I have a few more batteries I'm going to recondition today also.*",
  },
  {
    name: "Michelle Jensen",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Michelle.png",
    quoteHighlight:
      "My car battery was completely dead before I used your methods",
    quote:
      "I reconditioned my dead car battery a few weeks ago with your program and it's been working perfectly since then! My car battery was completely dead before I used your methods. \n This just saved me hundreds of dollars on a new battery!*",
  },
  {
    name: "Frank Murray",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Frank-1.jpg",
    quoteHighlight: "I wish I would have found this years ago!",
    quote:
      "I recently got the EZ Battery Reconditioning program and just reconditioned two car batteries. The guides were very easy to follow. I wish I would have found this years ago! Thanks!",
  },
  {
    name: "Kevin Day",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Kevin.jpg",
    quoteHighlight: "I still can't believe how great this worked",
    quote:
      "I still can't believe how great this worked. My drill battery, several AA and AAA batteries, and my camera battery work great again! This is super fun to do too.*",
  },
  {
    name: "Jeff Dobbins",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Jeff.jpg",
    quoteHighlight: "This already saved me $120 on a car battery!",
    quote:
      "When my car battery died, I decided to try out the EZ Battery Reconditioning method instead of buying a new (expensive) battery. And in just 25 minutes, I reconditioned the battery and it works fantastic again! This already saved me $120 on a car battery! I can't wait to try this on other batteries now.",
  },
  {
    name: "Ceceil Neel",
    image: "https://d6gz9bsdoz0ic.cloudfront.net/Ceceil.jpg",
    quoteHighlight:
      "I've reconditioned 17 batteries with EZ Battery Reconditioning",
    quote:
      "I was curious about your program so I decided to try it out after hearing from a friend how well this worked for her. I'm so glad I did! I've reconditioned 17 batteries with EZ Battery Reconditioning, even an old car battery I thought was long gone. My son likes using your program too! This is a skill everybody should know! Thank you, Tom and Frank.*",
  },
];

testimonials.map((item, index) => {
  console.log(item, index);
});

// markup
const BackPainPage = () => {
  return (
    <LandingPage>
      {/* <!-- CTA Section: Simple With Illustration --> */}
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-10">
              {/* <!-- Heading --> */}
              <div>
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                  Get Started
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  How I Fixed My Back Pain{" "}
                  <span className="text-indigo-600"> After 10 Years</span>!
                </h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  Inspiring results from day one without the pain. Get your own
                  custom dashboard and start building amazing services.
                </h3>
              </div>
              {/* <!-- END Heading --> */}

              {/* <!-- Action --> */}
              <div>
                <a
                  href="javascript:void(0)"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-outline hi-plus-circle inline-block w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Create your Account</span>
                </a>
              </div>
              {/* <!-- END Action --> */}
            </div>
          </div>
          <div className="flex items-center lg:justify-end text-indigo-500">
            {/* 
<svg viewBox="0 0 753 480.951" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z" fill="#2f2e41"></path><circle cx="209.549" cy="314.548" r="10" fill="currentColor"></circle><circle cx="204.597" cy="400.548" r="10" fill="currentColor"></circle><path d="M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z" fill="#2f2e41"></path><path fill="#9e616a" d="M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z"></path><path d="M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z" fill="#2f2e41"></path><path fill="#9e616a" d="M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z"></path><path d="M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z" fill="#2f2e41"></path><path d="M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z" fill="#9e616a"></path><circle cx="736.071" cy="267.733" r="35.538" transform="rotate(-80.783 501.187 294.317)" fill="#2f2e41"></circle><circle cx="512.264" cy="70.77" r="22.671" fill="#a0616a"></circle><ellipse cx="512.571" cy="48.405" rx="24.509" ry="14.705" fill="#2f2e41"></ellipse><circle cx="515.021" cy="22.671" r="14.705" fill="#2f2e41"></circle><path d="M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z" fill="#2f2e41"></path><path d="M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z" fill="#2f2e41"></path><path d="M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z" fill="#fff"></path><path d="M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z" fill="#e4e4e4"></path><path fill="#e4e4e4" d="M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z"></path><path d="M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z" fill="currentColor"></path><path d="M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z" fill="#cacaca"></path></svg>
*/}

            {/* <iframe src="https://player.vimeo.com/video/462383326" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
            {/* <iframe 
              src="https://player.vimeo.com/video/462383326"
              width="640" 
              height="360" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen 
              /> */}

            <iframe
              id="player"
              frameborder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="BPR4L VSL Default FB Compliant patrick footage ruben edit 2021 06 speed120 widescreen"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/4fSp_eLkgZ4?autoplay=0&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;showinfo=0&amp;wmode=transparent&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmybackpaincoach.com&amp;widgetid=1"
            />
          </div>
        </div>
      </div>
      {/* <!-- END CTA Section: Simple With Illustration --> */}
      <div className="bg-white overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
            <div className="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
              <div>
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                  Gain access today
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {/* Works for people all over the world */}
                  In This Video, You Will Discover:
                </h2>

                {/* <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Additionally you will get
                </h2> */}

                {/* <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  In Addition To The Battery Reconditioning Guides, You'll Also Get:
                </h3>*/}

                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  Additionally to the guides, you will get
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
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-adjustments inline-block w-5 h-5"
                      >
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                      </svg>
                    </div>

                    <p className="leading-relaxed text-gray-600">
                      What really causes back pain. (It almost never has
                      anything to do with the bones)
                    </p>
                  </div>
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-red-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-chart-pie inline-block w-5 h-5"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-gray-600">
                      The easy way to unlock a spasming back. The relief can be
                      rapid and wonderful…
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 space-y-6">
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-green-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-green-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-green-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-globe inline-block w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <p className="leading-relaxed text-gray-600">
                      Why yoga, pilates and other basic stretching exercises may
                      be doing more harm than good.
                    </p>
                  </div>
                  <div className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-purple-300">
                    <div className="inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative">
                      <div className="absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"></div>
                      <div className="absolute inset-0 rounded-2xl transform -rotate-6 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"></div>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-solid hi-lightning-bolt inline-block w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-gray-600">
                      How doing these simple movements regularly means you may
                      never suffer back pain again…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features Section: With Image Side --> */}
      <div className="bg-gray-100 overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28">
            <div className="lg:w-1/2 xl:w-2/5 flex-none relative">
              <div className="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"></div>
              <div className="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"></div>
              <img
                src="https://getmybackpaincoach.com/wp-content/uploads/2021/01/Ian.png"
                alt="Preview Feature Image"
                className="relative rounded-lg shadow-xl mx-auto"
              />
            </div>
            <div className="lg:w-1/2 xl:w-3/5 md:py-12 space-y-10">
              {/* <!-- Heading --> */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  About Ian
                </h2>
                <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  Hi, my name's Ian Hart… I'm a Certified Strength and
                  Conditioning Specialist (CSCS). I run a personal training
                  company with multiple locations in several states. And… I'm
                  proud to own countless successful case studies of helping free
                  people from back pain. The kind of back pain that makes you a
                  prisoner in your own body.
                </h3>
              </div>
              {/* <!-- END Heading --> */}

              {/* <!-- Features --> */}
              <div className="space-y-5">
                <div className="flex space-x-4">
                  <div className="flex-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Why are my methods so successful?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      I believe it's because this unique pain-relief formula is
                      designed to bring results in a safe and effective manner.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Inspiring Feature
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      My programs and businesses have been featured in
                      publications and TV stations such as Men's Health
                      Magazine, OK! Magazine, SELF Magazine, GQ Magazine,
                      Cosmopolitan Magazine, FOX Morning Show, NY1 News, CBS,
                      plus much more.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-none">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-check-circle inline-block w-5 h-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Cool Feature</h4>
                    <p className="text-gray-600 leading-relaxed">
                      People in over 27 countries have used our program to help
                      relieve their back pain. We are also fortunate to possess
                      the internet's largest video database of client success
                      stories.
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
      <HappyClientSectionComponent
        title="Happy Client SEction Component"
        message="welcome"
        projectsNumber="2200"
        clientsNumber="220"
        earningsNumber="275"
      />
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
            {testimonials.map((item, index) => (
              <TestimonialCard
                name={item.name}
                quote={item.quote}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      <PriceComponent />
    </LandingPage>
  );
};

export default BackPainPage;

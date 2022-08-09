import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const PriceComponent = () => {
  return (
    <div className="bg-white">
      <div className="space-y-10 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* <!-- Heading --> */}
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Choose the best plan
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Get to know our premium solutions and get your start up off the
            ground in no time. Inspiring results from the first days.
          </h3>
        </div>
        {/* <!-- END Heading --> */}

        {/* <!-- Pricing Plans --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 lg:py-6">
          {/* <!-- Freelancer Plan --> */}
          <div className="rounded-lg shadow-sm bg-gray-100 flex flex-col border-2 border-gray-200 hover:border-gray-300">
            <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                Freelancer
              </span>
              <div className="mb-1">
                <span className="text-3xl lg:text-4xl font-extrabold">$19</span>{" "}
                <span className="text-gray-700 font-semibold">/mon</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">
                For solo developers
              </p>
            </div>
            <div className="p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 flex-grow">
              <ul className="space-y-4 text-sm lg:text-base">
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>100</strong> Custom Projects
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>50</strong> Paying Clients
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>10GB</strong> SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>1TB</strong> Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>24/7</strong> Email Support
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-5 pb-5 lg:px-6 lg:pb-6">
              <Link
                to="/get-started"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* <!-- END Freelancer Plan --> */}

          {/* <!-- Agency Plan --> */}
          <div className="rounded-lg shadow-sm bg-indigo-50 flex flex-col border-2 lg:border-4 border-indigo-300 hover:border-indigo-400 relative lg:-mx-2 lg:-my-6">
            <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center text-orange-400">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="hi-solid hi-bookmark inline-block w-6 h-6"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
              </svg>
            </div>
            <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span className="inline-flex space-x-1 items-center text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                <span>Agency</span>
              </span>
              <div className="mb-1">
                <span className="text-3xl lg:text-4xl font-extrabold">$49</span>{" "}
                <span className="text-gray-700 font-semibold">/mon</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">
                For large teams
              </p>
            </div>
            <div className="p-5 lg:p-6 space-y-5 lg:space-y-6 text-indigo-900 flex-grow">
              <ul className="space-y-4 text-sm lg:text-base">
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>1000</strong> Custom Projects
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>200</strong> Paying Clients
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>100GB</strong> SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>10TB</strong> Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>24/7</strong> Email Support
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-5 pb-5 lg:px-6 lg:pb-6">
              <Link
                to="/get-started"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* <!-- END Agency Plan --> */}

          {/* <!-- Enterprice Plan --> */}
          <div className="rounded-lg shadow-sm bg-gray-100 flex flex-col border-2 border-gray-200 hover:border-gray-300">
            <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
              <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                Enterprise
              </span>
              <div className="mb-1">
                <span className="text-3xl lg:text-4xl font-extrabold">$79</span>{" "}
                <span className="text-gray-700 font-semibold">/mon</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">
                Custom solutions
              </p>
            </div>
            <div className="p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 flex-grow">
              <ul className="space-y-4 text-sm lg:text-base">
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Unlimited</strong> Custom Projects
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Unlimited</strong> Paying Clients
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Unlimited</strong> SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>Unlimited</strong> Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <strong>24/7</strong> Priority Email Support
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-5 pb-5 lg:px-6 lg:pb-6">
              <Link
                to="/get-started"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* <!-- END Enterprice Plan --> */}
        </div>
        {/* <!-- END Pricing Plans --> */}
      </div>
    </div>
  );
};

export default PriceComponent;

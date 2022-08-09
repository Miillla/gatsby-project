import React from "react";
import PropTypes from "prop-types";

const Checkout = () => {
  return (
    // <!-- Checkout Section: Simple Box -->
    <div className="bg-gray-100">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* <!-- Box --> */}
        <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="p-5 lg:p-6 flex-grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
            {/* <!-- Heading --> */}
            <div className="text-center mt-5">
              <h6 className="text-sm uppercase font-bold tracking-wider text-indigo-600 mb-1">
                Checkout
              </h6>
              <h1 className="text-2xl font-bold mb-1">
                Building a web app (Course)
              </h1>
              <p className="text-sm text-gray-600 font-medium mb-5">
                Enter your info to complete your purchase
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 435.97 173.13"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-12"
                >
                  <path
                    d="M206.2 84.58v50.75h-16.1V10h42.7a38.61 38.61 0 0 1 27.65 10.85A34.88 34.88 0 0 1 272 47.3a34.72 34.72 0 0 1-11.55 26.6q-11.2 10.68-27.65 10.67h-26.6Zm0-59.15v43.75h27a21.28 21.28 0 0 0 15.93-6.48 21.36 21.36 0 0 0 0-30.63 21 21 0 0 0-15.93-6.65h-27ZM309.1 46.78q17.85 0 28.18 9.54t10.32 26.16v52.85h-15.4v-11.9h-.7q-10 14.7-26.6 14.7-14.17 0-23.71-8.4a26.82 26.82 0 0 1-9.54-21q0-13.31 10.06-21.17t26.86-7.88q14.34 0 23.62 5.25v-3.68A18.33 18.33 0 0 0 325.54 67 22.8 22.8 0 0 0 310 61.13q-13.49 0-21.35 11.38l-14.18-8.93q11.7-16.8 34.63-16.8Zm-20.83 62.3a12.86 12.86 0 0 0 5.34 10.5 19.64 19.64 0 0 0 12.51 4.2 25.67 25.67 0 0 0 18.11-7.52q8-7.53 8-17.67-7.53-6-21-6-9.81 0-16.36 4.73c-4.41 3.2-6.6 7.09-6.6 11.76ZM436 49.58l-53.76 123.55h-16.62l19.95-43.23-35.35-80.32h17.5l25.55 61.6h.35l24.85-61.6Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M141.14 73.64A85.79 85.79 0 0 0 139.9 59H72v27.73h38.89a33.33 33.33 0 0 1-14.38 21.88v18h23.21c13.59-12.53 21.42-31.06 21.42-52.97Z"
                    fill="#4285f4"
                  ></path>
                  <path
                    d="M72 144c19.43 0 35.79-6.38 47.72-17.38l-23.21-18C90.05 113 81.73 115.5 72 115.5c-18.78 0-34.72-12.66-40.42-29.72H7.67v18.55A72 72 0 0 0 72 144Z"
                    fill="#34a853"
                  ></path>
                  <path
                    d="M31.58 85.78a43.14 43.14 0 0 1 0-27.56V39.67H7.67a72 72 0 0 0 0 64.66Z"
                    fill="#fbbc04"
                  ></path>
                  <path
                    d="M72 28.5a39.09 39.09 0 0 1 27.62 10.8l20.55-20.55A69.18 69.18 0 0 0 72 0 72 72 0 0 0 7.67 39.67l23.91 18.55C37.28 41.16 53.22 28.5 72 28.5Z"
                    fill="#ea4335"
                  ></path>
                </svg>
              </a>
              <div className="flex items-center my-5">
                <span
                  aria-hidden="true"
                  className="flex-grow bg-gray-200 rounded h-px"
                ></span>
                <span className="text-sm font-medium mx-3 text-gray-400">
                  OR
                </span>
                <span
                  aria-hidden="true"
                  className="flex-grow bg-gray-200 rounded h-px"
                ></span>
              </div>
            </div>
            {/* <!-- END Heading --> */}

            {/* <!-- Checkout Form --> */}
            <div className="space-y-6">
              <form onsubmit="return false;" className="space-y-6">
                <div className="space-y-6 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="email"
                      id="tk-checkout-email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="email"
                      id="tk-checkout-vat-id"
                      placeholder="Business VAT ID"
                    />
                  </div>
                </div>
                <div className="space-y-6 p-4 rounded border bg-gray-50">
                  <div className="space-y-1">
                    <label for="tk-checkout-card-name" className="font-medium">
                      Name on card
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-checkout-card-name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      for="tk-checkout-card-number"
                      className="font-medium"
                    >
                      Card number
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-checkout-card-number"
                    />
                  </div>
                  <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
                    <div className="space-y-1 flex-grow">
                      <label for="tk-checkout-card-exp" className="font-medium">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        type="text"
                        id="tk-checkout-card-exp"
                      />
                    </div>
                    <div className="space-y-1 sm:w-40">
                      <label for="tk-checkout-card-cvc" className="font-medium">
                        CVC
                      </label>
                      <input
                        className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        type="text"
                        id="tk-checkout-card-cvc"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded border p-4 text-sm text-gray-600 font-medium text-center">
                  You’ll be charged US$90.85 including VAT (15%).
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                >
                  <span>Pay</span>
                </button>
              </form>
            </div>
            {/* <!-- END Checkout Form --> */}

            {/* <!-- Footer --> */}
            <div className="text-center my-5">
              <p className="text-sm text-gray-500 font-medium">
                Thanks for buying from our store.
              </p>
            </div>
            {/* <!-- Footer --> */}
          </div>
        </div>
        {/* <!-- END Box --> */}
      </div>
    </div>
    // <!-- END Checkout Section: Simple Box -->
  );
};

export default Checkout;

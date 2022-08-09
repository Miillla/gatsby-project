import React from "react";
import PropTypes from "prop-types"
  

const HappyClientSectionComponent = (props) => {
  return (
    <div className="bg-gray-100 overflow-hidden">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">

          <div className="text-center mb-16">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
             {props.title}
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
             {props.message}
            </h3>
          </div>

          <div className="relative">
            <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 transform -translate-y-12 translate-x-12"></div>
            <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 transform translate-y-12 -translate-x-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center rounded-xl shadow-md bg-white divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden relative">
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  {props.projectsNumber}+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Projects
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  {props.clientsNumber}+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Clients
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-12 hover:bg-gray-50 hover:bg-opacity-50">
                <dt className="text-4xl font-extrabold text-indigo-600">
                  {props.earningsNumber}k+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold">
                  Earnings
                </dd>
              </dl>
            </div>
          </div>

        </div>
      </div>

  )
}

HappyClientSectionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    projectsNumber: PropTypes.number,
    clientsNumber: PropTypes.number,
    earningsNumber: PropTypes.number,
    titleColor: PropTypes.string
}

HappyClientSectionComponent.defaultProps = {
    titleColor: "#000",
    message: "Ronni wants food!",
    projectsNumber: "55",
    clientsNumber: "45",
    earningsNumber: "100",
  }



export default HappyClientSectionComponent;






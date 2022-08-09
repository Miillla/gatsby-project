import React from 'react';
import PropTypes from 'prop-types'
import '../Layout/css/tailkit.css'

const LandingPage = ({ children }) => {
  return (
    <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
      <main id="page-content" className="flex flex-auto flex-col max-w-full">
        {/* <div className="max-w-10xl mx-auto py-4 lg:py-8 w-full"> */}
        <div className="max-w-10xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
LandingPage.propTypes = {
  children: PropTypes.node,
}

export default LandingPage;
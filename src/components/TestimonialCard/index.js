import React from "react";
import PropTypes from 'prop-types'

// {
//     name: "Jen Simmons", 
//     image: "https://d6gz9bsdoz0ic.cloudfront.net/Jen.jpg", 
//     quoteHighlight: "I've Saved Over $400 On Batteries!", 
//     quote: "I can't believe how simple your reconditioning steps are! My old (and once dead) car batteries, cell phone battery, drill battery, camera battery and tons of other batteries are all reconditioned and working great again! Since starting your program I've saved over $400 on batteries!*"
// }

const TestimonialCard = ({ quote, image, name }) => {

    // const { quote, image, name } = props;

    // const quote = props.quote;
    // const quoteHighlight = props.quoteHighlight
    // const image = props.image
    // const name = props.name




    return (
        <div className="border rounded-md bg-gray-50 shadow-sm relative">
          <div className="absolute top-0 right-0 text-8xl mt-1 mr-2 text-indigo-200 opacity-75 font-serif">"</div>
          <div className="px-4 pt-14 pb-6 sm:px-6 sm:pb-6 relative">
            <blockquote>
              <p className="leading-7 mb-5">
                {quote}
              </p>
              <footer className="flex items-center space-x-4">
                {/* <a href="javascript:void(0)" className="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110">
                  <img src={props.image} alt="Avatar Photo" />
                </a> */}

                <div className="flex-none rounded-full overflow-hidden w-16 h-16 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110">
                  <img src={image} alt="Avatar Photo" />
                </div>


                <div>
                  <a href="javascript:void(0)" className="font-semibold text-indigo-600 hover:text-indigo-400">
                    {name}
                  </a>
                  {/* <p className="text-gray-500 font-medium text-sm">
                    Web Developer
                  </p> */}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      )
}

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    quoteHighlight: PropTypes.string,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string,
}



export default TestimonialCard;



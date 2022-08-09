import React from "react";
import PropTypes from "prop-types";

const AboutUsEmployeeCard = ({ name, title, image, message }) => {
  return (
    <div>
      <div className="group relative p-4 mb-5">
        <div className="absolute inset-0 rounded-lg bg-indigo-100 transform transition ease-out duration-150 skew-y-2 group-hover:-rotate-2"></div>
        <img
          src={image}
          alt="User Avatar"
          className="relative rounded-lg shadow"
        />
      </div>
      <h4 className="text-xl font-semibold mb-1">{name}</h4>
      <p className="text-gray-600 font-medium mb-3">{title}</p>
      <p className="prose prose-indigo">{message}</p>
    </div>
  );
};
AboutUsEmployeeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default AboutUsEmployeeCard;

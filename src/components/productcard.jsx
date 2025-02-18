import React from "react";
import Viewbutton from "./button";

const Productcard = () => {
  // Static data
  const productImage = "data:image/jpeg;base64,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";
  const productName = "Vaccum cleaner";
  const productPrice = "$999.99";

  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4">
      <img src={productImage} alt={productName}   className="w-full h-48 object-cover rounded-lg"/>
      <h2  className="text-lg font-semibold text-gray-900">{productName}</h2>
      <p  className="text-gray-700 text-md font-medium mt-1">{productPrice}</p>
      <Viewbutton />
    </div>
  );
};

export default Productcard;
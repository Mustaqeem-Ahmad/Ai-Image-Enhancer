import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadImage, enhanced,loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-96 max-w-3xl gap-4 mt-8">
      {/* original image */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <h2 className="text-xl font-semibold bg-gray-800 text-white py-2 text-center">
          Original Image
        </h2>
        {uploadImage ? (
          <img
            src={uploadImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center bg-gray-300 h-80">
            No image selected
          </div>
        )}
      </div>

      {/* enhanced image */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <h2 className="text-xl font-semibold bg-blue-700 text-white py-2 text-center">
          Enhanced Image
        </h2>

        {enhanced && !loading &&(  <img src={enhanced} alt="" className="w-full h-full object-cover" />) }

       {loading ? <Loading /> : <div className="flex items-center justify-center bg-gray-300 h-80">
          Enhanced Image
        </div> }
        
      </div>
    </div>
  );
};

export default ImagePreview;

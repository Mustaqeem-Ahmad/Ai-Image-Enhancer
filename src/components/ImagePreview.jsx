import React, { useRef } from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadImage, enhanced, loading }) => {
  const enhancedImgRef = useRef(null); // Download ke liye ref

  // Download enhanced image function
  const handleDownload = () => {
    if (!enhanced || !enhancedImgRef.current) return;
    
    const link = document.createElement("a");
    link.href = enhancedImgRef.current.src;
    link.download = `enhanced-image-${Date.now()}.png`; // Unique filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative group">
        <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-700 to-blue-800">
          <h2 className="text-xl font-semibold text-white flex-1 text-center">
            Enhanced Image ✨
          </h2>
          {/* Download Button */}
          {enhanced && !loading && (
            <button
              onClick={handleDownload}
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-1"
              title="Download Enhanced Image"
            >
              💾 Download
            </button>
          )}
        </div>

        {/* Enhanced Image - Click to Download */}
        {enhanced && !loading && (
          <div className="relative cursor-pointer hover:shadow-2xl transition-all group-hover:scale-[1.02]">
            <img
              ref={enhancedImgRef}
              src={enhanced}
              alt="Enhanced"
              className="w-full h-full object-cover hover:brightness-110 transition-all duration-300 border-4 border-green-200 hover:border-green-400"
              onClick={handleDownload}
              title="Click image to download"
            />
            
          </div>
        )}

        {loading ? (
          <Loading />
        ) : !enhanced ? (
          <div className="flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 h-80">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                ✨
              </div>
              <p>Enhanced Image will appear here</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImagePreview;

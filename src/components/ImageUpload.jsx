import React from "react";

const ImageUpload = ({uploadImageHandler}) => {

 const ShowImageHandler = (e)=>{

  const file = e.target.files[0];
  if(file){
    uploadImageHandler(file);
  }

   
 }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer p-6 text-center transition-all hover:border-blue-300 border-2 border-dashed border-gray-300 rounded-lg"
      >
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler} />
        <span className="text-lg font-medium text-gray-600">Click or drag to upload your image</span>
      </label>
    </div>
  );
};

export default ImageUpload;

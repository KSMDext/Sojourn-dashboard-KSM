import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";

function ImageUploader({ selectedImage, setSelectedImage }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const newSelectedImage = event.target.files[0];
    const newImageUrl = URL.createObjectURL(newSelectedImage);

    setSelectedImage(newSelectedImage);
    setImageUrl(newImageUrl);
  };

  return (
    <div>
      <div className="cursor-pointer w-[239px] h-[90px] bg-neutral-300 p-3 rounded ml-[60px] flex gap-2">
        <div className="w-[150px] h-[60px]">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Selected"
              className=" w-[89px] h-[60px] border rounded"
            />
          )}
        </div>
        <div className="w-[89px] h-[60px]">
          <p className="ml-6 text-lg">
            <BsCamera />
          </p>
          <p className="text-xs">+ Add Photos</p>
          <label
            htmlFor="image-upload"
            className="file-input-button bg-gray-500 text-white  px-4 rounded cursor-pointer text-xs"
          >
            Browse
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;

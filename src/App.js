import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Ben & Katie's Photo Booth</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        accept="image/*"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <button disabled={!selectedImage}>Upload</button>
    </div>
  );
};

export default UploadAndDisplayImage;

import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="center mt2">
        <img src={imageUrl} alt="" width="700px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;

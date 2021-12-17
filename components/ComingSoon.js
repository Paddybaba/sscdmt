import React from "react";

const ComingSoon = () => {
  var image1 =
    "https://paddy-photo-bucket.s3.ap-south-1.amazonaws.com/coming_soon.jpg";
  return (
    <div className="coming-soon">
      <img src={image1} height={400} width={300} />
    </div>
  );
};

export default ComingSoon;

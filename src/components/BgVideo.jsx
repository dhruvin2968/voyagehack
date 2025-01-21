import React from 'react';

const BgVideo = () => {
  return (
    <div className="">
      <img
        src="/beach3.jpg" // Replace with the path to your image
        alt="Background"
        className="w-full rounded-br-full object-cover relative leftright-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b" />
    </div>
  );
};

export default BgVideo;

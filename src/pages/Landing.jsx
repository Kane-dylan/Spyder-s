import React from 'react'

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center sora bg bg-cover bg-center">
      <h1 className="text-6xl bg-gradient-to-r from-neutral-500 to-white bg-clip-text text-transparent text-center">
        Future of DevOps is{" "}
        <span className="text-6xl text-[#d3ffca] solitreo-regular">Green</span>
      </h1>
      <p className="text-l text-center mt-4 opacity-40">
        AI-powered analytics to transform your GitHub pipelines— <br />
        track inefficiencies, reduce emissions, and deploy with precision
      </p>
      <div>
        <img src="/Frame 81.png" alt="" />
      </div>
      {/* about */}
    </div>
  );
}

export default Landing
import React from 'react'

const About = () => {
  return (
    <div className="bg-black items-center justify-center flex flex-col p-10">
      {/* <button className="hover:bg-[#d3ffca49] text-[#D3FFCA] p-4 rounded-full mb-4">
        About Optimizer
      </button>
      <h1 className="text-white bg-black text-3xl items-center justify-center bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent text-center">
        We make GitHub workflows faster, smarter, and <br /> greener. Our AI
        optimizes CI/CD pipelines to <br /> reduce execution time and carbon
        footprint— <br /> so you ship code efficiently without extra{" "}
        <span className="solitreo-regular text-[#d3ffca]">effort</span>.
      </h1> */}
      <img src="/About.png" alt="" />
    </div>
  );
}

export default About
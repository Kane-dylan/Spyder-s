import React from 'react'

const Click = () => {
  return (
    <>
      <div className="flex flex-col item-center text-center text-white p-16">
        <h1 className="text-5xl ">
          Unlock efficiency with one{" "}
          <span className="solitreo-regular text-[#d3ffca]">click!</span>
        </h1>
        <p className='text-l text-center mt-4 opacity-40'>
          Reduce carbon footprint and streamline development. Paste your <br /> GitHub
          repo or connect your account for optimized workflow
        </p>
      <div className="flex items-center justify-center">
        <img src="/public/Frame 37.png" alt="gitImg" sizes='50' />
      </div>
      </div>
    </>
  );
}

export default Click
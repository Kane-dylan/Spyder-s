import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-black flex justify-between items-center p-10">
        {/* logo */}
        <div className="flex justify-start overflow-hidden">
          <img src="/src/assets/title.png" alt="logo" />
        </div>
        {/* headings */}
        <div className="hidden md:flex text-white justify-center items-center">
          <ul className="flex flex-row space-x-4 text-l opacity-60">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        {/* button */}
        <div className="flex justify-end">
          <button className="bg-[#BDFFAF] py-2 px-4 rounded-full ">
            Analyze Now
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar
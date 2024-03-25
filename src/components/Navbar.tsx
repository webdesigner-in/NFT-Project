import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);



  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center px-8 md:px-12 lg:px-20">
        <h2 className="font-Inria font-bold text-2xl z-10">enDasmu</h2>
        <ul className="navbar_links flex justify-center items-center space-x-6   flex-wrap item-baseline  relative right-0 top-0">
          <li>Collection</li>
          <li>Market Place</li>
          <li>Community</li>
          <button className="border px-5 py-2 rounded-full font-Jost font-light">
            Connect Wallet
          </button>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex justify-between items-center mx-4 z-10 mt-10">
        <h2 className="font-Inria font-bold text-2xl ">enDasmu</h2>
        <button  onClick={()=>setToggle(!toggle)}>
          {toggle ? <RiCloseLine  className="navbar-btn" /> : <RiMenu2Fill className="navbar-btn" />}
        </button>
        <ul className={`navbar_links bg-gradient-to-br from-[#000b2b] to-[#00043a4f]  flex-col  justify-center items-center flex-wrap item-baseline  absolute right-1 top-24 p-6 space-y-6 rounded-lg   ${toggle ? 'flex' : 'hidden'}`}>
          <li>Collection</li>
          <li>Market Place</li>
          <li>Community</li>
          <button className="border px-5 py-2 rounded-full font-Jost font-bold">
            Connect Wallet
          </button>
        </ul>
      </nav>
    </>
  );
}

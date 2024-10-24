import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/*left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>
          {/*search input */}
          <div className="relative sm:w-72 w-40 space-x-1">
            <IoSearchOutline className="absolute inline-block left-3 inset-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/*right side */}
        <div className="relative flex items-centre md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button>
                  <img src="avatar.png" alt="avatar" />
                </button>
              </>
            ) : (
              <Link to="/login">
                <FaUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <CiHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <MdOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

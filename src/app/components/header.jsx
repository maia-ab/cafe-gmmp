import React from "react";
import NavBar from "./navbar/navBar";
import Link from "next/link";
import MobileNavbar from "./navbar/mobileNavBar";

function Header() {
  return (
    <div className="flex items-center bg-forest-green h-[100px] px-16">
      <Link className="hidden md:block" href={"/"}>
        <img className="h-20 w-20" src="/gmmp-logo.png" alt="Logo de gmmp" />
      </Link>
      < NavBar />
      < MobileNavbar />
    </div>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <div className="fixed z-50  w-screen bg-inherit bg-slate-300 p-6">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full p-4"></div>
      {/* Mobile */}
      <div className="flex md:hidden h-full  p-4"></div>
    </div>
  );
}

export default Header;

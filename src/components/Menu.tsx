import React from "react";

interface Props {
  switchMenu: boolean;
}

const Menu = ({ switchMenu }: Props) => {
  return (
    <div
      className={`p-3 w-72 min-w-min mt-12 bg-neutral-900 text-neutral-100 flex-initial flex-col items-center sm-max:fixed sm-max:h-screen animate__animated ${
        switchMenu
          ? "animate__fadeInLeft flex"
          : "animate__fadeOutLeft fixed flex h-screen"
      }`}
    >
      <h1 className="font-semibold text-2xl tracking-widest">MENU</h1>
    </div>
  );
};

export default Menu;

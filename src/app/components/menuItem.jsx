import React from "react";

function MenuItem({ itemTitle, itemFoto }) {
  return (
    <>
     <div className="bg-blue-100 w-[200px] rounded-3xl m-2 transform transition-transform  hover:scale-110 hover:shadow-2xl">
      <div className="w-[200px] h-[200px] rounded-3xl flex items-center justify-center overflow-hidden ">
        <img
          className="object-cover"
          src={itemFoto}
          alt={itemTitle}
        />
      </div>
      <div className="flex flex-col items-center rounded-b-3xl h-20 ">
      <p>{itemTitle}</p>
      <p>$5000</p>
      </div>
      </div>
    </>

  );
}

export default MenuItem;

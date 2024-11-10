import React from "react";

const CardLeft = () => {
  return (
    <div className=" w-[400px] h-[300px] gap-3 leading-8 rounded-lg border-[2px] border-[#FF1C1C] border-solid m-5 p-5">
      <p className="mb-5">
        Whitepate is designed as a collaboration tool for businesses that is a
        full project managemen solution.
      </p>
      <hr />
      <div className="flex items-center mt-5">
        <img src="/images/image (1).png" alt="" />
        <div className="">
          <h1 className="text-[#FF4040] text-2xl">Oberon Shaw, MCH</h1>
          <p>Head of Talent Acquisition, North America</p>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;

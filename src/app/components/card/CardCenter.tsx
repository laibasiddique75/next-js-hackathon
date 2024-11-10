import React from "react";

const CardCenter = () => {
  return (
    <div>
      <div className="w-[400px] h-[550px] bg-[#FF1C1C] text-white gap-3 leading-8 rounded-lg border border-[#FF1C1C] border-2-solid m-5 p-5">
        <h2 className="font-bold text-3xl">Free</h2>
        <h1 className="font-bold text-5xl text-[#38F881] my-4">$ 0</h1>
        <h3 className="font-semibold">Capture ideas and find them quickly</h3>
        <p>Sync unlimited devices</p>
        <p>10 GB monthly uploads</p>
        <p>200 MB max note size</p>
        <p>Customize Home dashboard and access extra</p>
        <p>Connect primary Google Calendar account</p>
        <p>Add due dates, reminders, and notifications to your tasks</p>
        <button className="bg-white text-[#FF4040] rounded p-1 px-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CardCenter;

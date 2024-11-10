import React from "react";
import Card from "./card/Card";
import CardCenter from "./card/CardCenter";
import CardLeft from "./clientCard/CardLeft";
import CardRight from "./clientCard/CardRight";

const Banner = () => {
  return (
    <div>
      {/* Main Banner Section */}
      <section className="grid md:grid-cols-2 gap-10 p-10 bg-[#222222] text-center md:text-left items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#38F881] text-3xl md:text-6xl font-bold leading-tight">
            Get More Done with Whitepace
          </h1>
          <p className="text-white text-sm md:text-lg">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks.
          </p>
          <button className="bg-[#FF4040] hover:bg-[#ff5f5f] rounded w-40 py-2 text-white text-base">
            Try Whitepace Free
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="h-40 w-60 md:h-[320px] md:w-[400px]"
            src="/images/heroimg.png"
            alt="Hero"
            loading="lazy"
          />
        </div>
      </section>

      {/* Project Management Section */}
      <section className="grid md:grid-cols-2 gap-10 p-6 bg-white m-6 rounded-lg shadow-lg items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-3xl md:text-6xl font-bold leading-tight">
            Project Management
          </h1>
          <p className="text-black text-sm md:text-lg">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="bg-[#FF4040] hover:bg-[#ff5f5f] rounded w-40 py-2 text-white">
            Get Started
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="h-40 w-60 md:h-[320px] md:w-[400px]"
            src="/images/heroimg.png"
            alt="Project Management"
            loading="lazy"
          />
        </div>
      </section>

      {/* Work Together Section */}
      <section className="grid md:grid-cols-2 gap-10 p-6 bg-white m-6 rounded-lg shadow-lg items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <img
            className="h-40 w-60 md:h-[320px] md:w-[400px]"
            src="/images/heroimg.png"
            alt="Work Together"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-5 order-1 md:order-2">
          <h1 className="text-black text-3xl md:text-6xl font-bold leading-tight">
            Work Together
          </h1>
          <p className="text-black text-sm md:text-lg">
            With Whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="bg-[#38F881] hover:bg-[#3af898] rounded w-40 py-2 text-black">
            Try it now
          </button>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section className="text-center p-8">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-5">Choose Your Plan</h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </section>

      {/* Card Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 m-5 flex-wrap">
        <Card />
        <CardCenter />
        <Card />
      </section>

      {/* Sponsors Section */}
      <section className="text-center p-8 bg-[#f9f9f9]">
        <h1 className="text-black text-3xl md:text-5xl font-bold mb-8">Our Sponsors</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <img className="h-10" src="/images/Logo Apple.png" alt="Apple" />
          <img className="h-10" src="/images/Logo Microsoft.png" alt="Microsoft" />
          <img className="h-10" src="/images/Logo Stack.png" alt="Stack" />
          <img className="h-10" src="/images/Logo Google.png" alt="Google" />
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="p-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10">
          What Our Clients Say
        </h1>
        <div className="grid flex-wrap md:grid-cols-3 gap-5">
          <CardLeft />
          <CardRight />
          <CardRight />
        </div>
      </section>
    </div>
  );
};

export default Banner;

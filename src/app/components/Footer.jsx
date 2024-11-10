import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Call-to-Action Section */}
      <section className="bg-[#222222] text-center p-10">
        <h1 className="text-[#38F881] text-3xl md:text-5xl font-semibold mb-3">Try Whitepace today</h1>
        <p className="text-white mb-3 text-sm md:text-base">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <button className="bg-[#FF4040] hover:bg-[#ff5f5f] text-white rounded w-[150px] p-2 mb-2">
          Try Taskey Free
        </button>
        <p className="text-white text-sm">On a big team? <a href="#" className="underline">Contact sales</a></p>
        <div className="flex justify-center gap-5 mt-5">
          <img src="/images/Vector (1).png" alt="Social Media 1" />
          <img src="/images/Vector (2).png" alt="Social Media 2" />
          <img src="/images/Vector (3).png" alt="Social Media 3" />
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="bg-[#222222] text-white py-10 px-5 md:px-20">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-4xl">Laiba Siddique</h1>
            <p className="mt-3 text-sm md:text-base">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h1 className="text-lg font-semibold">Product</h1>
            <ul className="mt-3 space-y-2 text-sm md:text-base">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h1 className="text-lg font-semibold">Resources</h1>
            <ul className="mt-3 space-y-2 text-sm md:text-base">
              <li>Blog</li>
              <li>Guides & Tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h1 className="text-lg font-semibold">Company</h1>
            <ul className="mt-3 space-y-2 text-sm md:text-base">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
            </ul>
          </div>

          {/* Try It Today Section */}
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold">Try it Today</h1>
            <p className="mt-3 text-sm md:text-base">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-[#FF4040] hover:bg-[#ff5f5f] text-white rounded w-[150px] p-2 mt-3">
              Try Taskey Free
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Links Section */}
      <section className="bg-[#222222] text-white py-5 px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base">
          <div className="flex gap-5 mb-3 md:mb-0">
            <p>English</p>
            <p>Terms & Privacy</p>
            <p>Security</p>
            <p>Status</p>
          </div>
          <p className="text-center md:text-right">
            &copy; 2024 Laiba Siddique. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;

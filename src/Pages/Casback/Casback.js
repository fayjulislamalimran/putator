import React from "react";

const Casback = () => {
  return (
    <div>
      <section class="px-3 py-5  lg:py-10">
        <div class="grid grid-cols-2 items-center justify-items-center gap-5">
          <div class="order-1 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl " style={{ color: "#e2136e" }}>Get 5% OFF</p>
            <p class="text-4xl font-bold md:text-7xl">Cashback</p>
            <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
          </div>
          <div class="order-2 lg:order-2">
            <img class="  object-cover " src="https://b2911153.smushcdn.com/2911153/wp-content/uploads/2022/07/CASHBACK-1200x627px-1024x660.png?lossy=1&strip=1&webp=1" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casback;

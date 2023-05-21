import React from "react";
import { Link } from "react-router-dom";

const CardSolutions = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl" style={{ color: "#e2136e" }}>
        All financial solutions in one platform
      </h1>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-4">
            <div class="p-2 border  ">
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 " src="https://www.bkash.com/uploaded_contents/services/home_images/02-MR_1675164134643.webp" alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl text-center">Mobile Recharge</h1>
              <p class=" mx-auto text-justify leading-relaxed text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600" title="read more" style={{ color: "#e2136e" }}>
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
            <div class="p-2 border " border bg-slate-700>
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 " src="https://www.bkash.com/uploaded_contents/services/home_images/01-send-money_1675164089657.webp" alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl text-center">Send Money</h1>
              <p class="mx-auto text-justify leading-relaxed text-gray-500 text justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600" title="read more" style={{ color: "#e2136e" }}>
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
            <div class="p-2 border " border bg-slate-700>
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 " src="https://www.bkash.com/uploaded_contents/services/home_images/03-cashout_1675164155438.webp" alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl text-center">Cash Out</h1>
              <p class="mx-auto text-justify leading-relaxed text-gray-500 justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600" title="read more" style={{ color: "#e2136e" }}>
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
            <div class="p-2 border  " border bg-slate-700>
              <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 " src="https://www.bkash.com/uploaded_contents/services/home_images/04-payment_1675164341242.webp" alt="blog" />
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl text-center">Payment</h1>
              <p class="mx-auto text-justify leading-relaxed text-gray-500 text justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>{" "}
              <div class="mt-4">
                <Link href="#" class="inline-flex items-center mt-4 font-semibold  lg:mb-0 hover:text-neutral-600" title="read more" style={{ color: "#e2136e" }}>
                  {" "}
                  Read More »{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSolutions;

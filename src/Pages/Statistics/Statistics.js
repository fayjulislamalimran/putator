import React from "react";

const Statistics = () => {
  return (
    <div>
      <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight  sm:text-4xl" style={{ color: "#e2136e" }}>
          Our service statistics
        </h2>
        <div class="grid grid-cols-4 gap-5 sm:grid-cols-4 mt-4">
          <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total servers</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold " style={{ color: "#e2136e" }}>
                  1.6M
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Servers a month</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold " style={{ color: "#e2136e" }}>
                  19.2K
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Servers a week</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold " style={{ color: "#e2136e" }}>
                  4.9K
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total users</dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold " style={{ color: "#e2136e" }}>
                  166.7K
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

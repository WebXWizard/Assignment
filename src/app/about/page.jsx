import React from "react";

const About = () => {
  return (
    <div>
      {/* Call to Action (CTA) Section 🔔 */}
      <section className="py-2 bg-green-400 text-white text-center rounded-lg mx-4 md:mx-0 font-[sans-serif]">
        <h2 className="lg:text-2xl sm:text-xl font-bold mb-2">
          Ready to start your wellness journey? 🌿
        </h2>
        <button className="bg-white hover:cursor-pointer text-green-700 px-4 py-1 rounded-2xl font-semibold hover:bg-green-100 transition">
          Shop Now
        </button>
      </section>

      {/* About Section */}
      <section className="py-12 bg-green-50 font-[sans-serif]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              About Herbal Cure
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              At Herbal Cure, we combine traditional Ayurvedic wisdom with
              modern practices to provide safe, natural, and effective remedies
              for your health and wellness. Our products are crafted from 100%
              organic herbs and plants, sustainably sourced to ensure maximum
              purity and health benefits. We are dedicated to helping
              individuals achieve holistic wellness, naturally and effectively.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mt-4">
              From herbal teas and capsules to natural skincare and immunity
              boosters, every product is designed with care and backed by
              generations of knowledge. Join us in embracing nature’s healing
              touch and experience wellness the herbal way.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://d2icp22po6iej.cloudfront.net/wp-content/uploads/2024/02/herbal-remedies-supplements-scaled.jpeg"
              alt="About Herbal Cure"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="bg-green-100 font-[sans-serif]">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
              <div className="p-4 lg:p-8  bg-gradient-to-r from-green-400 via-green-100 to-green-500  rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        2,000+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-800">
                        Herbal Cure Partners
                      </p>
                    </div>
                  </div>
                  {/* End Stats */}
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <img
                        className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800"
                        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      <img
                        className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7"
                        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                      <img
                        className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800"
                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-black">
                        85%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-900">
                        Happy Customers
                      </p>
                    </div>
                  </div>
                  {/* End Stats */}
                  {/* Stats */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx={16} cy={9} r="2.9" />
                      <circle cx={6} cy={5} r={3} />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        $55M+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-800">
                        Ads Managed Yearly
                      </p>
                    </div>
                  </div>
                  {/* End Stats */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision Section */}
      <section className="py-12 bg-white font-[sans-serif]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8">
            🎯 Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center mb-4 text-4xl">
                🌱
              </div>
              <h3 className="text-3xl font-semibold text-green-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700  text-lg">
                To provide safe, natural, and effective herbal products and
                Ayurvedic remedies that promote holistic health and wellness for
                individuals seeking nature-inspired solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center mb-4 text-4xl">
                🌿
              </div>
              <h3 className="text-3xl font-semibold text-green-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To become a trusted leader in herbal wellness by delivering 100%
                organic, sustainable, and authentic products, helping people
                live healthier and balanced lives naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 via-green-100 to-green-50 font-[sans-serif]">
        <div className="max-w-8xl mx-auto px-4 text-center">
          <h2 className="lg:text-5xl sm:text-4xl font-bold text-green-800 mb-8">
            🌱 “Herbal care, the natural way.” ✅
          </h2>
          {/* Masonry Cards */}
          <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-6">
              <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://img.freepik.com/premium-photo/green-cosmetic-arrangement_160139-653.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="Masonry Cards Image"
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                      100% Natural Products
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://i.pinimg.com/736x/f7/2f/22/f72f22ea042423e015467ed1a98c3824.jpg"
                      alt="Masonry Cards Image"
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                      Ayurvedic Remedies
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://img.freepik.com/free-photo/top-view-natural-medicinal-spices-herbs_23-2148776497.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="Masonry Cards Image"
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                      Organic Ingredients
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 sm:col-span-6 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.stockcake.com/public/9/5/c/95c99d65-e934-4148-9d69-b552d9d0f2ec_medium/herbal-essence-bottles-stockcake.jpg"
                      alt="Masonry Cards Image"
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                      Herbal Ingredients
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 sm:col-span-6 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden focus:outline-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMb7esTNnqoeXB7nuw7PT89IHPjjBNYLqLXtzhMwr_VRr-6eI_WAi9zz98ibRNTcirDM&usqp=CAU"
                      alt="Masonry Cards Image"
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                      Fast & Reliable Delivery
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Masonry Cards */}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-green-50 font-[sans-serif]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              👩‍⚕️ Meet Our Experts
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-800">
              “Meet the dedicated team behind Herbal Cure, combining Ayurvedic
              expertise and natural wellness knowledge to bring you safe,
              authentic, and effective herbal products.”
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-green-600 rounded-lg shadow sm:flex  dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bonnie Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr. Priya Sharma</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-900">
                  Ayurvedic Specialist
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-900">
                  Ayurvedic Specialist with 10+ years of experience in natural
                  healing and wellness.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-teal-100 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://images.unsplash.com/photo-1628264045128-dcff5200f84c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jese Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                  <a href="#">Mr. Raj Verma</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-800">
                  Herbal Product Expert
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-900">
                  Expert in herbal products and organic formulations, ensuring
                  purity and quality.
                </p>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-green-400 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sofia Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Mr. Sameer Khan</a>
                </h3>
                <span className="text-gray-500 dark:text-black">
                  Quality Control Specialist
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-black">
                  Quality Control Specialist dedicated to delivering authentic
                  and safe herbal products.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-teal-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://images.unsplash.com/photo-1659352153329-224d7d90163e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Michael Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Dr. Anjali Gupta</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Nutrition & Wellness Coach
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Nutrition & Wellness Coach helping people achieve holistic
                  health naturally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-2 font-[sans-serif] bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <a href="/" className="flex justify-center ">
              <img
                className="w-16 h-16"
                src="https://png.pngtree.com/png-vector/20230320/ourmid/pngtree-herbal-logo-vector-png-image_6658053.png"
                alt=""
              />{" "}
              <span className="text-center justify-center text-2xl py-4 font-bold ">
                Herbal Cure
              </span>
            </a>
            <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-4 mb- border-b border-gray-200 font-semibold">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-900">
                  Herbal Cure
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className=" text-gray-800 hover:text-gray-900"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className=" text-gray-800 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className=" text-gray-800 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>

            <div className="flex space-x-10 font-semibold justify-center items-center mb-6">
              <a
                href="#"
                className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  className="w-[1.688rem] h-[1.688rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  className="w-[1.688rem] h-[1.688rem] "
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  className="w-[0.938rem] h-[1.625rem]"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  className="w-[1.875rem] h-[1.375rem]"
                  viewBox="0 0 30 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <span className="text-lg font-bold text-gray-800 text-center block ">
              © <a href="https://pagedone.io/">Herbal Cure</a> 2025, All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

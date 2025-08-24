import React from "react";

const Home = () => {
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

      {/* Header Section */}
      <header className="bg-white bg-[url('https://videocdn.cdnpk.net/videos/527987f4-ba27-552d-92f7-bedfc11a40d0/horizontal/thumbnails/small.jpg')] bg-cover bg-no-repeat font-[sans-serif] px-4 py-4">
        <div className="grid min-h-[50vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[80vh] w-full place-items-center">
          <div className="w-full max-w-screen-xl text-center mx-auto">
            <p className="inline-block antialiased leading-relaxed md:text-md lg:text-lg text-sm rounded-lg border-[1.5px] border-blue-gray-50 bg-indigo-50 py-1 px-3 sm:px-6 lg:px-8 font-medium text-primary text-slate-800 capitalize">
              🍀 "Herbal care, the natural way."
            </p>

            <h1 className="block antialiased tracking-tight font-semibold text-sky-900 mx-auto my-4 leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Welcome to{" "}
              <span className="text-sky-900">
                Herbal <br className="hidden sm:block" />
                Cure |
              </span>{" "}
              <span className="text-sky-900">Natural Products & Medicines</span>
              .
            </h1>

            <p className="block antialiased font-normal leading-relaxed text-gray-800 mx-auto text-base sm:text-md md:text-lg max-w-3xl">
              👇 🌿 "Herbal Cure is a trusted hub for natural wellness, offering
              high-quality herbal products, Ayurvedic medicines, and organic
              remedies.
              <span>
                {" "}
                We cater to individuals seeking safe, effective, and
                nature-inspired health solutions."
              </span>
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="/user/register"
                className="inline-block rounded-md bg-slate-800 py-2 px-6 text-lg font-semibold text-white shadow-md transition-all hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className=" bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-8 font-[sans-serif]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl text-center font-bold leading-tight text-green-600 sm:text-4xl lg:text-5xl">
                🌱 Why Choose Us
              </h2>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-8 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/products"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover rounded-xl w-full h-full"
                      src="https://img.freepik.com/premium-photo/green-cosmetic-arrangement_160139-653.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="Natural Products"
                    />
                  </a>
                  <div className="absolute top-4 left-4"></div>
                </div>

                <p className="mt-5 text-2xl font-semibold">
                  <a href="/products" title="" className="text-black">
                    100% Natural Products
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  All our products are made from pure herbs, free from harmful
                  chemicals or preservatives. We believe in delivering natural
                  wellness directly from nature.
                </p>
                <a
                  href="/products"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-md font-semibold text-green-600 transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600 px-6 py-2 rounded-full "
                >
                  Shop Now
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/*
             */}
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/products"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYDxMsSUToHH8t1ia978PgKP9ZfkteqNJCg&s"
                      alt="Organic Ingredients"
                    />
                  </a>
                  <div className="absolute top-4 left-4"></div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"></span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="/user/courses" title="" className="text-black">
                    Safe & Ayurvedic Remedies
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Inspired by ancient Ayurvedic practices, ensuring safe and
                  effective healing. Sustainably sourced organic herbs to
                  maintain purity and health benefits.
                </p>
                <a
                  href="/products"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-green-600 transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600 px-6 py-2 rounded-full"
                >
                  Shop Now
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="/products"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src="https://img.freepik.com/free-photo/spa-still-life-with-beauty-products_23-2148201387.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="Fast & Reliable Delivery"
                    />
                  </a>
                  <div className="absolute top-4 left-4"></div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"></span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="/products" title="" className="text-black">
                    Organic Ingredients
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  With our trusted delivery network, we make sure your herbal
                  products reach you quickly and safely. Enjoy hassle-free
                  shopping and wellness at your doorstep.
                </p>
                <a
                  href="/products"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-green-600 transition-all duration-200 border-b-2 border-transparent hover:border-green-600 focus:border-blue-600 px-6 py-2 rounded-full"
                >
                  Shop Now
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white font-[sans-serif]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-8">
            🍃 Popular Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://t4.ftcdn.net/jpg/01/98/93/59/360_F_198935939_rvUXMPDkMfSE66I4tDXG5qu7ghhBZr7H.jpg"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Herbal Tea
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Boost your immunity naturally with this organic herbal tea
                blend.
              </p>
              <button className="bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>

            {/* Product Card 2 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://www.shutterstock.com/image-photo/herbal-ayurvedic-tablet-pills-wooden-600nw-2375372651.jpg"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Ayurvedic Capsules
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Natural capsules formulated to improve digestion and overall
                wellness.
              </p>
              <button className="bg-green-600  hover:cursor-pointer text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>

            {/* Product Card 3 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.jpg?s=612x612&w=0&k=20&c=gVg1BaJ78uniQbpfdFiYvMzim98gREdx-5c4ENBp2tE="
                alt="Product 3"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Organic Honey
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Pure, natural honey to boost immunity and provide energy
                naturally.
              </p>
              <button className="bg-green-600 hover:cursor-pointer text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials by Our Customers */}
      <section className="py-4 font-[sans-serif]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj capitalize">
                🗣️ What Our Happy Customers Say
              </h2>
            </div>

            <div className="relative mt-5 md:mt-12 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                />
              </div>
              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 ">
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-green-50 lg:py- lg:px-7 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="flex-1 ">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "These herbal products transformed my health
                          naturally! I noticed improvements in my energy levels
                          and overall wellbeing within weeks. Highly recommended
                          for anyone looking for safe and effective natural
                          remedies."
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Ravi Sharma
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          👌 Happy Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex-col justify-between flex-1 p-6 bg-green-50 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "Fast delivery and excellent quality herbal products.
                          I love that everything is natural and eco-friendly.
                          Shopping here is always hassle-free and their remedies
                          really support a healthier lifestyle."
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Ankit Singh
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          😊 Happy Shopper
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-2xl rounded-xl">
                  <div className="flex shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex-col justify-between flex-1 p-6 bg-green-50 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          "Authentic Ayurvedic remedies! Safe and effective. My
                          whole family uses these products regularly and we’ve
                          all seen noticeable improvements in health. The
                          quality and care in these products truly stand out."
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          Pooja Verma
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          👍 Satisfied Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-12 font-[sans-serif] bg-100">
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

export default Home;

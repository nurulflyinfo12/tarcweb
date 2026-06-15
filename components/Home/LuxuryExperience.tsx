import React from "react";
import {
  FaUtensils,
  FaSpa,
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaFilm,
} from "react-icons/fa";

const LuxuryExperience = () => {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="resort"
              className="w-full h-[420px] object-cover rounded-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="lobby"
              className="w-60 h-40 object-cover rounded-3xl border-4 border-white shadow-xl absolute -bottom-10 left-10"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm text-primary-dark font-semibold tracking-widest">
              Enjoy The Unique Experience
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mt-2 mb-4">
              We Invite You to Indulge in a Luxurious Escape
            </h2>

            <p className="text-gray-600 mb-4 text-sm leading-6">
              Whether you're seeking a romantic escape, a family vacation, or a corporate retreat,
              Grand Sultan Tea Resort & Golf is the ideal destination.
            </p>

            <p className="text-gray-600 mb-4 text-sm leading-6">
              Explore our resort and enjoy luxury surrounded by tea gardens and natural beauty.
            </p>

            <p className="text-gray-600 mb-6 text-sm leading-6">
              Experience world-class hospitality where every moment is unforgettable.
            </p>

            <button className="text-primary-dark font-semibold flex items-center gap-2 hover:text-green-700 transition">
              Discover More →
            </button>
          </div>
        </div>

        {/* FACILITIES SECTION */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-primary-dark text-sm">Amenities</p>
            <h3 className="text-3xl font-bold text-green-800">
              Facilities & Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Item */}
            <div className="flex gap-4">
              <FaUtensils className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Cuisine</h4>
                <p className="text-sm text-gray-600">
                  Enjoy multicuisine dining experience at our restaurants.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaSpa className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Spa</h4>
                <p className="text-sm text-gray-600">
                  Relaxation and wellness services for your holiday.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaSwimmingPool className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Swimming Pool</h4>
                <p className="text-sm text-gray-600">
                  Temperature-controlled pool for refreshing experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaDumbbell className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Gym</h4>
                <p className="text-sm text-gray-600">
                  Fully equipped fitness center for daily workouts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaChild className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Children Play Zone</h4>
                <p className="text-sm text-gray-600">
                  Safe and fun activities for kids.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaFilm className="text-primary-dark text-3xl" />
              <div>
                <h4 className="font-semibold text-green-800">Movie Theatre</h4>
                <p className="text-sm text-gray-600">
                  Private HD theatre experience for guests.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LuxuryExperience;
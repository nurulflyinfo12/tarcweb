"use client";

import React from "react";
import CallToAction from "../common/calltoaction";
import PageHero from "../common/pagehero";

const GuestPolicy = () => {
  return (
    <div className="bg-[#0A3D2B] text-white min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Guest Policy"
        //   subtitle="Discover comfort and style in our Restaurants."
        backgroundImage="/images/cooridoor.webp"
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-medium text-center mb-12 text-[#C5A26E]">
          Guest Guidelines and Protocols
        </h2>

        <div className="space-y-12 text-sm leading-relaxed">
          {/* 1. Rates */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A26E]">
              1. Rates
            </h3>
            <p className="mb-3">
              All Rates are subject to 10% Service Charge + 10% VAT (Value Added
              Tax).
            </p>
          </section>

          {/* 2. Reservation & Cancellation Policy */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A26E]">
              2. Reservation & Cancellation Policy
            </h3>
            <div className="space-y-4 pl-6">
              <p>
                2.1 Confirmation of room reservation depends on the availability
                of rooms at the moment of booking.
              </p>
              <p>
                2.2 A Company or organization should send their reservation
                request through corporate E-mail ID of their respective company
                or organization.
              </p>
              <p>
                2.3 All reservation request should be sent to
                reservation@imperialinstitute.com
              </p>
              {/* Add more points as needed */}
            </div>
          </section>

          {/* 3. Special Precautionary Terms & Conditions during COVID-19 Pandemic */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A26E]">
              3. Special Precautionary Terms & Conditions during COVID-19
              Pandemic
            </h3>
            <p className="pl-6">
              Guest must follow all health and safety protocols...
            </p>
          </section>

          {/* 4. Check in & Check Out Policy */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A26E]">
              4. Check in & Check Out Policy
            </h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>4.1 Our Check In time at 2:00pm.</li>
              <li>4.2 Our Check Out time at 12:00pm.</li>
              {/* Add remaining points from your image */}
            </ul>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <CallToAction
        title="Ready To Get Assistance?"
        description="Call us now to make a reservation at our restaurant."
        phone="01704199798"
      />
    </div>
  );
};

export default GuestPolicy;

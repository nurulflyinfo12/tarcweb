"use client";

import React from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiBookmark } from "react-icons/fi";
import { MdOutlineAirlineSeatIndividualSuite, MdAcUnit } from "react-icons/md";

interface Step2Props {
  selectedItems: any[];
  formData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
  };
  formErrors: Record<string, string>;
  totalPriceSum: number;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Step2GuestDetails: React.FC<Step2Props> = ({
  selectedItems,
  formData,
  formErrors,
  totalPriceSum,
  onFormChange,
}) => {
  return (
    <div className="grid lg:grid-cols-5 gap-10 font-biryani">
      {/* Left Column - Selected Rooms Summary List */}
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-xl font-bold text-primary tracking-wide uppercase flex items-center gap-2">
          <FiBookmark className="text-base shrink-0" /> Your Selection List
        </h3>
        
        <div className="bg-card rounded-2xl p-5 border border-border space-y-4 max-h-[520px] overflow-y-auto shadow-inner">
          {selectedItems.map((room, idx) => (
            <div
              key={room.RoomId || idx}
              className="bg-background/40 p-4 rounded-xl border border-border/70 hover:border-accent/40 transition-all duration-200 shadow-sm space-y-3"
            >
              <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-background border border-border/50 shrink-0">
                  <img
                    src={
                      room.RoomImage ||
                      room.coverImage ||
                      "/images/viproom/viproom.jpg"
                    }
                    alt="room"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <p className="font-bold text-sm text-foreground truncate tracking-wide">
                        {room.RoomName ||
                          room.roomName ||
                          `Room ${room.RoomNumber || "Allocated Unit"}`}
                      </p>
                      <span className="text-text-muted bg-background px-2 py-0.5 rounded-md border border-border/60 font-mono text-[9px] shrink-0">
                        Slot #{idx + 1}
                      </span>
                    </div>
                    <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider font-semibold">
                      Suite ID: #{room.RoomNumber || room.RoomId || "N/A"}
                    </p>
                  </div>
                  <div className="text-xs pt-1">
                    <span className="text-primary font-bold text-sm">
                      BDT {(room.PricePerNight || 3500).toLocaleString()}
                    </span>
                    <span className="text-[10px] text-text-muted font-normal lowercase"> / night</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Added Specifications Summary Bar */}
              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-border/40 text-[10px] text-text-muted uppercase font-semibold tracking-wider">
                <div className="flex items-center gap-1.5 bg-background/60 px-2 py-1.5 rounded-lg border border-border/40">
                  <MdOutlineAirlineSeatIndividualSuite className="text-xs text-primary" />
                  <span>Max {room.MaxOccupancy || 2} Guests</span>
                </div>
                <div className="flex items-center gap-1.5 bg-background/60 px-2 py-1.5 rounded-lg border border-border/40">
                  <MdAcUnit className={`text-xs ${room.IsAC ? "text-accent" : "text-text-muted/40"}`} />
                  <span className="truncate">{room.IsAC ? "A/C Room" : "Standard Climate"}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Luxury Property Policy/Inclusion Indicators */}
          <div className="bg-background/30 border border-border/50 rounded-xl p-3 text-[11px] text-text-muted space-y-1.5 font-medium">
            <p className="flex justify-between"><span>• Check-In Protocol:</span> <span className="text-foreground font-semibold">14:00 PM</span></p>
            <p className="flex justify-between"><span>• Wi-Fi & Amenities:</span> <span className="text-accent font-semibold">Complimentary</span></p>
          </div>

          {/* Pricing Aggregator Block */}
          <div className="pt-4 border-t border-dashed border-border/80 flex flex-col gap-1 text-sm font-bold text-foreground">
            <span className="text-text-muted text-xs font-semibold uppercase tracking-wider">Combined Total Rate:</span>
            <span className="text-primary text-xl font-black tracking-tight">
              BDT {totalPriceSum.toLocaleString()}{" "}
              <span className="text-xs font-normal text-text-muted font-biryani lowercase">/ night</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right Column - Premium Guest Information Form */}
      <div className="lg:col-span-3 space-y-4">
        <h3 className="text-xl font-bold text-primary tracking-wide uppercase flex items-center gap-2">
          <FiUser className="text-base shrink-0" /> Guest Information
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          {/* First Name Input Setup */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
              <FiUser className="text-base" />
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name *"
              onChange={onFormChange}
              className={`w-full pl-11 pr-4 py-4 border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all ${
                formErrors.firstName ? "border-accent focus:border-accent" : "border-border focus:border-primary"
              }`}
            />
            {formErrors.firstName && (
              <p className="text-accent text-[11px] font-semibold mt-1.5 ml-1 flex items-center gap-1">
                ✦ {formErrors.firstName}
              </p>
            )}
          </div>

          {/* Last Name Input Setup */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
              <FiUser className="text-base" />
            </div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name *"
              onChange={onFormChange}
              className={`w-full pl-11 pr-4 py-4 border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all ${
                formErrors.lastName ? "border-accent focus:border-accent" : "border-border focus:border-primary"
              }`}
            />
            {formErrors.lastName && (
              <p className="text-accent text-[11px] font-semibold mt-1.5 ml-1 flex items-center gap-1">
                ✦ {formErrors.lastName}
              </p>
            )}
          </div>

          {/* Phone Number Input Setup */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
              <FiPhone className="text-base" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number *"
              onChange={onFormChange}
              className={`w-full pl-11 pr-4 py-4 border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all ${
                formErrors.phone ? "border-accent focus:border-accent" : "border-border focus:border-primary"
              }`}
            />
            {formErrors.phone && (
              <p className="text-accent text-[11px] font-semibold mt-1.5 ml-1 flex items-center gap-1">
                ✦ {formErrors.phone}
              </p>
            )}
          </div>

          {/* Email Address Input Setup */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
              <FiMail className="text-base" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address *"
              onChange={onFormChange}
              className={`w-full pl-11 pr-4 py-4 border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all ${
                formErrors.email ? "border-accent focus:border-accent" : "border-border focus:border-primary"
              }`}
            />
            {formErrors.email && (
              <p className="text-accent text-[11px] font-semibold mt-1.5 ml-1 flex items-center gap-1">
                ✦ {formErrors.email}
              </p>
            )}
          </div>
        </div>

        {/* Special Requests Layout Input Section */}
        <div className="relative group pt-1">
          <div className="absolute top-4 left-4 flex pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
            <FiMessageSquare className="text-base" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Special Requests or preferred arrival notes (optional)..."
            onChange={onFormChange}
            rows={6}
            className="w-full pl-11 pr-4 py-4 border border-border focus:border-primary rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2GuestDetails;
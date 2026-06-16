"use client";

import Image from "next/image";
import CallToAction from "../common/calltoaction";
import Link from "next/link";

interface Offer {
    id: number;
    title: string;
    validity: string;
    description: string;
    longDescription?: string;
    image: string;
    includes: string[];
}

interface SpecialOffersProps {
    offers?: Offer[];
}

const defaultOffers: Offer[] = [
    {
        id: 1,
        title: "Summer Breeze",
        validity: "Validity till 31st July 2026",
        description: "This season indulge in something special. Exclusive Special Rate awaits at Grand Sultan Tea Resort & Golf. Enjoy a vacation to remember with a delicious complimentary breakfast and so much more!",
        longDescription: "Don't miss out on this special offer to relax and unwind in luxury.",
        image: "/images/specialoffers/Summeroffer.jpeg",
        includes: [
            "BUFFET BREAKFAST",
            "SWIMMING POOL",
            "OUTDOOR JACUZZI",
            "INDOOR/OUTDOOR KIDS PLAY",
            "GYM & LIBRARY"
        ],
    },
];

const SpecialOffers = ({ offers = defaultOffers }: SpecialOffersProps) => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center bg-black">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest text-white mb-4">
                        Special Offers
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Make your stay all the more delightful by selecting our incredible packages and offers
                    </p>
                </div>
            </section>

            {/* Offers Card Section */}
            <section className="bg-[#0A2F1F] py-16 relative overflow-hidden">


                <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

                    {/* Background Layer Under the Card */}
                    <div className="absolute inset-x-8 md:inset-x-10 lg:inset-x-28 -top-4 -bottom-4 bg-white/10 rounded-3xl backdrop-blur-[4px] pointer-events-none z-0" />
                    <div className="relative overflow-hidden group shadow-md">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-[1200px] mx-auto border border-[#2E7D32]/20 relative z-10"
                            >
                                <div className="flex flex-col lg:flex-row pl-10 pr-10 pt-6 pb-6">
                                    {/* Left Side - Text Content */}
                                    <div className="lg:w-1/2 p-10 lg:p-16 bg-secondary/15 lg:rounded-l-2xl!">
                                        <h2 className="text-3xl font-semibold text-[#0A2F1F] mb-1">
                                            {offer.title}
                                        </h2>
                                        <p className="text-[#D4AF37] font-medium mb-8">{offer.validity}</p>

                                        <p className="text-neutral-700 leading-relaxed mb-6">
                                            {offer.description}
                                        </p>

                                        {offer.longDescription && (
                                            <p className="text-neutral-600 mb-8">
                                                {offer.longDescription}
                                            </p>
                                        )}

                                        <a
                                            href="/specialoffers/summer-breeze"
                                            className="inline-flex items-center text-[#D4AF37] hover:text-amber-600 font-medium group"
                                        >
                                            → Discover More
                                        </a>
                                    </div>

                                    {/* Right Side - Image */}
                                    <Link href="#" className="lg:w-1/2 relative min-h-[420px] bg-neutral-100 rounded-r-3xl overflow-hidden">
                                        <Image
                                            src={offer.image}
                                            alt={offer.title}
                                            fill
                                            className="object-fill"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <CallToAction
                title="Ready To Book Your Stay"
                description="Call us now to check availability and secure your desired rooms before they're all gone! Your dream stay awaits - don't miss out."
                phone="+880 9678 785959"
            />
        </>
    );
};

export default SpecialOffers;





// "use client";

// import React from "react";
// import Image from "next/image";
// import { FiPhone } from "react-icons/fi";
// import CallToAction from "../common/calltoaction";

// interface Offer {
//     id: number;
//     title: string;
//     validity: string;
//     description: string;
//     longDescription?: string;
//     image: string;
//     includes: string[];
// }

// interface SpecialOffersProps {
//     offers?: Offer[];
// }

// const defaultOffers: Offer[] = [
//     {
//         id: 1,
//         title: "Summer Breeze",
//         validity: "Validity till 31st July 2026",
//         description: "This season indulge in something special. Exclusive Special Rate awaits at Grand Sultan Tea Resort & Golf. Enjoy a vacation to remember with a delicious complimentary breakfast and so much more!",
//         longDescription: "Don't miss out on this special offer to relax and unwind in luxury.",
//         image: "/images/specialoffers/Summeroffer.jpeg",
//         includes: [
//             "BUFFET BREAKFAST",
//             "SWIMMING POOL",
//             "OUTDOOR JACUZZI",
//             "INDOOR/OUTDOOR KIDS PLAY",
//             "GYM & LIBRARY"
//         ],
//     },
// ];

// const SpecialOffers = ({ offers = defaultOffers }: SpecialOffersProps) => {
//     return (
//         <>
//             {/* Hero Section */}
//             <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center bg-black">
//                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center" />
//                 <div className="absolute inset-0 bg-black/60" />
//                 <div className="relative z-10 text-center px-6">
//                     <h1 className="text-5xl md:text-7xl font-light tracking-widest text-white mb-4">
//                         Special Offers
//                     </h1>
//                     <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//                         Make your stay all the more delightful by selecting our incredible packages and offers
//                     </p>
//                 </div>
//             </section>

//             {/* Offers Card Section */}
//             <section className="bg-[#0A2F1F] py-16 relative overflow-hidden">


//                 <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

//                     {/* Background Layer Under the Card */}
//                     <div className="absolute inset-x-8 md:inset-x-10 lg:inset-x-28 -top-4 -bottom-4 bg-white/10 rounded-3xl backdrop-blur-[4px] pointer-events-none z-0" />
//                     <div className="relative overflow-hidden group shadow-md">
//                         {offers.map((offer) => (
//                             <div
//                                 key={offer.id}
//                                 className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-[1200px] mx-auto border border-[#2E7D32]/20 relative z-10"
//                             >
//                                 <div className="flex flex-col lg:flex-row pl-10 pr-10 pt-6 pb-6">
//                                     {/* Left Side - Text Content */}
//                                     <div className="lg:w-1/2 p-10 lg:p-16 bg-[#F8F5F0] rounded-l-3xl">
//                                         <h2 className="text-3xl font-semibold text-[#0A2F1F] mb-1">
//                                             {offer.title}
//                                         </h2>
//                                         <p className="text-[#D4AF37] font-medium mb-8">{offer.validity}</p>

//                                         <p className="text-neutral-700 leading-relaxed mb-6">
//                                             {offer.description}
//                                         </p>

//                                         {offer.longDescription && (
//                                             <p className="text-neutral-600 mb-8">
//                                                 {offer.longDescription}
//                                             </p>
//                                         )}

//                                         <a
//                                             href="#"
//                                             className="inline-flex items-center text-[#D4AF37] hover:text-amber-600 font-medium group"
//                                         >
//                                             → Discover More
//                                         </a>
//                                     </div>

//                                     {/* Right Side - Image */}
//                                     <div className="lg:w-1/2 relative min-h-[420px] bg-neutral-100 rounded-r-3xl overflow-hidden">
//                                         <Image
//                                             src={offer.image}
//                                             alt={offer.title}
//                                             fill
//                                             className="object-fill"
//                                         />

//                                         {/* Green Border */}
//                                         {/* <div className="absolute inset-0 border-[14px] border-[#2E7D32] m-6 rounded-2xl pointer-events-none" /> */}

//                                         {/* Content Overlay */}
//                                         {/* <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14 text-white">
//                     <div className="relative">
//                       <h3 className="text-5xl md:text-6xl font-serif italic text-[#FF9800] drop-shadow-md mb-6">
//                         Summer Breeze
//                       </h3>

//                       <div className="inline-block bg-white text-black text-xs font-bold tracking-wider px-6 py-2 rounded-full mb-5">
//                         OFFER INCLUDES
//                       </div>

//                       <ul className="space-y-1 text-sm font-medium">
//                         {offer.includes.map((item, i) => (
//                           <li key={i}>• {item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Booking CTA */}
//             <CallToAction
//                 title="Ready To Book Your Stay"
//                 description="Call us now to check availability and secure your desired rooms before they're all gone! Your dream stay awaits - don't miss out."
//                 phone="+880 9678 785959"
//             />
//         </>
//     );
// };

// export default SpecialOffers;
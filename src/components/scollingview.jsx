// import React from "react";

// export default function InfiniteServicesScroll() {

//   const services = [
//     "Luxury Living Room Design",
//     "Modular Kitchen",
//     "Bedroom Interiors",
//     "Office Interior Design",
//     "False Ceiling Design",
//     "Lighting Design",
//     "Wardrobe Design",
//     "Space Planning",
//     "Home Renovation",
//     "Modern Furniture Layout",
//     "TV Unit Design",
//     "Dining Room Interiors",
//   ];

//   return (
//     <div className="w-full overflow-hidden py-12 bg-transparent">

//       <div className="relative flex overflow-hidden">

//         <div className="flex animate-marquee whitespace-nowrap">

//           {services.map((service, index) => (
//             <div
//               // key={index}
//               className="mx-6 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide"
//             >
//               {service}
//             </div>
//           ))}

//           {/* duplicate for infinite loop */}
//           {services.map((service, index) => (
//             <div
//               key={"dup" + index}
//               className="mx-6 px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide"
//             >
//               {service}
//             </div>
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }
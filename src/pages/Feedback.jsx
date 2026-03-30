// import { motion } from "framer-motion";

// const reviews = [
//   {
//     name: "Arjun Reddy",
//     location: "Hyderabad",
//     text: "Absolutely stunning work. The team transformed our living room into a luxury space beyond our expectations.",
//     rating: 5
//   },
//   {
//     name: "Priya Sharma",
//     location: "Bangalore",
//     text: "Professional, elegant designs and flawless execution. Our modular kitchen looks incredible.",
//     rating: 5
//   },
//   {
//     name: "Rahul Mehta",
//     location: "Mumbai",
//     text: "Attention to detail is amazing. Every corner of our home feels premium now.",
//     rating: 5
//   },
//   {
//     name: "Sneha Kapoor",
//     location: "Delhi",
//     text: "They perfectly captured the luxury aesthetic we wanted. Highly recommended.",
//     rating: 5
//   },
// ];

// export default function Feedback() {

//   return (

//     <section className="relative min-h-screen w-full overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://res.cloudinary.com/ddashlgli/image/upload/v1773103040/WhatsApp_Image_2026-03-07_at_21.54.57_1_ygo2qy.jpg)",
//         }}
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* GOLD GLOW */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_60%)]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >

//           <p className="text-[#D4AF37] tracking-[0.4em] text-xs mb-4">
//             CLIENT EXPERIENCES
//           </p>

//           <h1 className="text-white text-4xl md:text-6xl font-playfair">
//             What Our Clients Say
//           </h1>

//           <p className="text-white/70 mt-6 max-w-xl mx-auto">
//             Real stories from homeowners who trusted us to craft their dream interiors.
//           </p>

//         </motion.div>

//         {/* REVIEWS GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//           {reviews.map((review, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="
//                 bg-white/5
//                 backdrop-blur-xl
//                 border border-white/10
//                 rounded-2xl
//                 p-8
//                 hover:scale-[1.03]
//                 transition
//                 shadow-[0_20px_50px_rgba(0,0,0,0.6)]
//               "
//             >

//               {/* STARS */}
//               <div className="flex text-[#D4AF37] text-lg mb-4">
//                 {"★★★★★"}
//               </div>

//               {/* TEXT */}
//               <p className="text-white/80 leading-relaxed mb-6">
//                 "{review.text}"
//               </p>

//               {/* CLIENT */}
//               <div>
//                 <p className="text-white font-semibold">
//                   {review.name}
//                 </p>
//                 <p className="text-white/50 text-sm">
//                   {review.location}
//                 </p>
//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Reviews() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

  if (!name || !message) {
    alert("Please fill all fields");
    return;
  }

  const text = `Hi, this is ${name}. ${message}`;
  const url = `https://wa.me/917799448384?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
  };

const reviews = [
  {
    name: "Arjun Reddy",
    role: "3BHK Interior Design",
    rating: 5,
    text: "I had a great experience working with HomeCraft for my 3BHK interior design. From the beginning, their team understood our requirements clearly and provided very creative ideas. The execution was smooth and well-managed without any delays. The quality of materials and finishing work is truly impressive. Every room now looks modern, elegant, and comfortable. Their attention to detail really made a big difference in the final outcome. I would definitely recommend them for premium interior work."
  },
  {
    name: "Priya Sharma",
    role: "2BHK Modular Interior",
    rating: 4.5,
    text: "Choosing HomeCraft for our 2BHK modular interior was the right decision. The team was very professional and guided us properly throughout the project. They provided designs that were both stylish and practical for daily use. The modular kitchen and storage solutions are very well planned. The project was completed on time without any hassle. The finishing quality and overall look exceeded our expectations. We are very happy with the results and would highly recommend them."
  },
  {
    name: "Rahul Mehta",
    role: "Villa Interior & Exterior",
    rating: 5,
    text: "We hired HomeCraft for our villa interior and exterior design, and the results are amazing. The team delivered a very premium and unique design for the entire space. The exterior elevation looks elegant and gives a strong first impression. Inside, every area is designed with proper planning and attention to detail. They maintained good communication and professionalism throughout the project. The quality of work and finishing is excellent. Overall, it was a smooth and satisfying experience working with them."
  }
];

  return (
    <div className="w-full  text-black">

      {/* HERO */}
      <section className="relative h-[55vh] w-full">
        <img
          src="https://res.cloudinary.com/ddashlgli/image/upload/v1773103040/WhatsApp_Image_2026-03-07_at_21.54.57_1_ygo2qy.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="text-yellow-400 tracking-[0.4em] text-xs mb-3">
              TESTIMONIALS
            </p>
            <h1 className="text-4xl md:text-6xl font-boldn text-white">
              What Our Clients Say
            </h1>
          </div>
        </div>
      </section>

      {/* BIG CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-black ">

        <div className="grid md:grid-cols-1 gap-6 rounded-3xl border border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-lg transition">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl border border-white/10"
            >

              {/* TOP */}
              <div className="flex items-center gap-5 mb-6">

                {/* AVATAR */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold rounded-3xl border border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-lg transition">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-2xl font-semibold">
                    {review.name}
                  </p>
                  <p className="text-gray-400">
                    {review.role}
                  </p>
                </div>

              </div>

              {/* RATING */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* TEXT */}
              <p className="text-lg text-black-300 leading-relaxed max-w-3xl">
                "{review.text}"
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* 🔥 ADDED FORM (NO CHANGE ABOVE) */}
      <section className="max-w-3xl mx-auto px-6 pb-24">

        <div className="p-8 rounded-3xl border border-gray-200 shadow-sm">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Share Your Experience
          </h2>

          <form onSubmit={handleSend} className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-lg border border-gray-300 outline-none focus:border-purple-500"
            />

            <textarea
              placeholder="Write your experience..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded-lg border border-gray-300 outline-none h-32 focus:border-purple-500"
            />

            <button
              type="submit"
              className="py-4 rounded-lg bg-black text-white font-semibold hover:opacity-80 transition"
            >
              Submit
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}
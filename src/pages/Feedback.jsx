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
import { useState } from "react";
import { motion } from "framer-motion";

export default function Reviews() {

  const [reviews, setReviews] = useState([
    { name: "Arjun Reddy", text: "Amazing luxury design and execution." },
    { name: "Priya Sharma", text: "Professional and elegant interiors." },
    { name: "Rahul Mehta", text: "Our home now feels like a premium villa." }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  const submitFeedback = (e) => {
    e.preventDefault();

    if (!form.name || !form.message) return;

    setReviews([{ name: form.name, text: form.message }, ...reviews]);

    setForm({ name: "", message: "" });

    setShowForm(false);
  };

  return (

    <div className="w-full">

      {/* TOP HERO IMAGE (30%) */}
      <section className="relative h-[60vh] w-full overflow-hidden">

        <img
        src ="https://res.cloudinary.com/ddashlgli/image/upload/v1773103040/WhatsApp_Image_2026-03-07_at_21.54.57_1_ygo2qy.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex items-center justify-center text-center px-4">

          <div>

            <p className="text-[#D4AF37] tracking-[0.4em] text-xs mb-3">
              CLIENT REVIEWS
            </p>

            <h1 className="text-white text-3xl md:text-5xl font-playfair">
              What Clients Say
              <br/>
              @HomeCraft
            </h1>

          </div>

        </div>

      </section>

      {/* REVIEWS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="luxury-card p-6"
            >

              <p className="text-[var(--text-secondary)] italic mb-4">
                "{review.text}"
              </p>

              <p className="text-gold font-semibold">
                — {review.name}
              </p>

            </motion.div>

          ))}

        </div>

        {/* ADD FEEDBACK BUTTON */}
        <div className="text-center mt-16">

          <button
            onClick={() => setShowForm(true)}
            className="luxury-btn"
          >
            Add Your Feedback
          </button>

        </div>

      </section>

      {/* FEEDBACK FORM */}
      {showForm && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-card p-10 rounded-xl max-w-md w-full">

            <h2 className="text-2xl mb-6 text-center">
              Share Your Experience
            </h2>

            <form onSubmit={submitFeedback} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="luxury-input"
              />

              <textarea
                placeholder="Your Feedback"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="luxury-input"
              />

              <button
                type="submit"
                className="luxury-btn w-full"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}
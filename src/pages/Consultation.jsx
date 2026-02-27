import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Consultation() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const type = e.target.type.value;
    const budget = e.target.budget.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hello, I want interior consultation.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Project Type: ${type}%0A` +
      `Budget: ${budget}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/919876543210?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (

    <>
    <section
      id="consultation"
      className="
      py-28 px-6
      bg-[var(--bg-primary)]
      text-[var(--text-primary)]
      "
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* gold line */}
          <div className="w-20 h-[2px] bg-[var(--accent-primary)] mb-6"></div>


          <h2 className="
          font-playfair
          text-4xl md:text-5xl
          mb-6
          text-[var(--text-primary)]
          ">
            Get Free Interior Consultation
          </h2>


          <p className="
          text-[var(--text-secondary)]
          mb-8
          leading-relaxed
          ">
            Tell us about your space. Our design experts will contact you and
            provide personalized luxury solutions tailored to your vision.
          </p>


          <div className="space-y-4 text-[var(--text-secondary)]">

            <p className="flex items-center gap-3">
              <span className="text-[var(--accent-primary)] text-xl">📞</span>
              +91 917799448384
            </p>

            <p className="flex items-center gap-3">
              <span className="text-[var(--accent-primary)] text-xl">📧</span>
              sales@homecraftinteriors.co.in
            </p>

          </div>


          <button
            className="
            mt-8
            px-8 py-3
            border border-[var(--accent-primary)]
            text-[var(--accent-primary)]
            rounded-full
            hover:bg-[var(--accent-primary)]
            hover:text-black
            transition
            shadow-[0_0_25px_var(--accent-glow)]
            "
            onClick={() =>
              window.open("https://wa.me/917799448384", "_blank")
            }
          >
            CHAT ON WHATSAPP
          </button>

        </motion.div>



        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          bg-[var(--bg-card)]
          p-10
          rounded-2xl
          border border-[var(--border-primary)]
          backdrop-blur
          space-y-6
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          "
        >


          {/* INPUT */}
          <input
            name="name"
            placeholder="Full Name"
            required
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            focus:shadow-[0_0_15px_var(--accent-glow)]
            transition
            "
          />


          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            focus:shadow-[0_0_15px_var(--accent-glow)]
            transition
            "
          />


          <input
            name="email"
            placeholder="Email"
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            focus:shadow-[0_0_15px_var(--accent-glow)]
            transition
            "
          />


          {/* SELECT */}
          <select
            name="type"
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            transition
            "
          >
            <option>Project Type</option>
            <option>1BHK</option>
            <option>2BHK</option>
            <option>3BHK</option>
            <option>Villa</option>
            <option>Office</option>
          </select>



          <select
            name="budget"
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            transition
            "
          >
            <option>Budget</option>
            <option>1–3 Lakhs</option>
            <option>3–5 Lakhs</option>
            <option>5–10 Lakhs</option>
            <option>10+ Lakhs</option>
          </select>



          <textarea
            name="message"
            placeholder="Tell about your project"
            rows="4"
            className="
            w-full
            bg-transparent
            border border-[var(--border-primary)]
            p-4
            rounded-lg
            outline-none
            focus:border-[var(--accent-primary)]
            transition
            "
          />



          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-full
            font-medium
            tracking-widest

            bg-[var(--accent-primary)]
            text-black

            hover:scale-105
            hover:shadow-[0_0_30px_var(--accent-glow)]

            transition
            "
          >
            SUBMIT REQUEST
          </button>


        </motion.form>


      </div>

    </section>

    <Footer />

    </>

  );

}
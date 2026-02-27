import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  PencilRuler,
  Factory,
  Truck,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ProcessCTA() {

  const navigate = useNavigate();

  const steps = [

    {
      icon: MessageCircle,
      title: "Talk to Designer",
      desc: "Discuss your vision & get estimate"
    },

    {
      icon: PencilRuler,
      title: "Design & Approval",
      desc: "Detailed drawings & approval"
    },

    {
      icon: Factory,
      title: "Production",
      desc: "Manufactured in own factories"
    },

    {
      icon: Truck,
      title: "Execution",
      desc: "Material delivery & installation"
    },

    {
      icon: CheckCircle,
      title: "Project Handover",
      desc: "On-time completion & delivery"
    }

  ];


  return (

    <section className="py-32 bg-gradient-to-b from-[#F8F6F2] to-[#EFEAE3] overflow-hidden">


      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >

        <p className="text-[#C6A75E] tracking-[0.3em] text-sm mb-4">
          OUR PROCESS
        </p>

        <h2 className="text-4xl md:text-5xl font-playfair text-[#2B2B2B]">

          From Concept to Completion
          <br />
          in Just 45 Days

        </h2>

      </motion.div>



      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 relative">


        {/* line */}
        <div className="
          hidden md:block
          absolute top-1/2 left-0 w-full h-[2px]
          bg-[#C6A75E]/30
        " />


        <div className="grid md:grid-cols-5 gap-10 relative">


          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.2 }}

                className="text-center relative"
              >

                {/* icon circle */}
                <div className="
                  w-16 h-16
                  mx-auto mb-4
                  rounded-full
                  bg-white
                  border border-[#E8DFC8]
                  flex items-center justify-center
                  shadow-md
                ">

                  <Icon className="text-[#C6A75E]" size={28} />

                </div>


                {/* title */}
                <h3 className="font-semibold text-[#2B2B2B] mb-2">
                  {step.title}
                </h3>


                {/* desc */}
                <p className="text-[#6B6B6B] text-sm">
                  {step.desc}
                </p>


                {/* arrow */}
                {index !== steps.length - 1 && (

                  <ArrowRight
                    className="
                      hidden md:block
                      absolute top-7 -right-6
                      text-[#C6A75E]/60
                    "
                  />

                )}

              </motion.div>

            );

          })}


        </div>


      </div>



      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-20"
      >

        <button

          onClick={() => navigate("/consultation")}

          className="
            px-12 py-5
            bg-[#C6A75E]
            text-white
            rounded-full
            text-lg
            hover:scale-105
            transition
            shadow-lg
          "
        >

          Get Started Today

        </button>

      </motion.div>



    </section>

  );

}
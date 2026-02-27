import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const properties = [

"Vasu Homes",
"Kenza Harmony",
"Priya Magestic",
"Kishore Developers",
"The Vasavi Company North",
"Meena Grove",
"Buja Homes",
"Viyaar The Summit",
"VR Aspiration",
"Neon Prestine",
"The Chimes",
"Nambiar Elegenzia",
"Mona Bellezia",
"Pattel Villa"

];

const faqs = [

{
question: "Do you offer post-installation support?",
answer:
"Yes. We provide full post-installation support, including adjustments, maintenance guidance, and dedicated service assistance."
},

{
question:
"How is Home Craft able to offer competitive pricing without compromising quality?",
answer:
"We own our manufacturing unit and design team. This eliminates middlemen, reduces cost, and ensures premium quality at better pricing."
},

{
question: "How do you guarantee delivery within 45 days?",
answer:
"Our in-house production, trained installation teams, and streamlined workflow ensure fast and reliable project completion."
},

{
question:
"Why do I need an interior designer? Can’t I do it myself?",
answer:
"Interior designers optimize space, improve functionality, and create a luxury aesthetic while avoiding costly mistakes."
},

{
question:
"This is my first home. How do I start the process?",
answer:
"Simply book a consultation. Our team will guide you step-by-step from concept to completion."
}

];

export default function FAQSection() {

const [active, setActive] = useState(null);

return (

<section className="bg-[#EFEAE3] py-32 px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

{/* LEFT PROPERTY LIST */}

<div className="overflow-hidden">

<h2 className="font-playfair text-4xl mb-10">
Our Recent Projects
</h2>

<div className="space-y-4 h-[400px] overflow-y-auto pr-4">

{properties.map((item, i) => (

<motion.div

key={i}

initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}

className="text-lg text-[#444] hover:text-[#C6A75E] cursor-pointer transition"
>

{item}

</motion.div>

))}

</div>

</div>

{/* RIGHT FAQ */}

<div>

<h2 className="font-playfair text-4xl mb-10">
Frequently Asked Questions
</h2>

<div className="space-y-4">

{faqs.map((faq, i) => (

<div key={i} className="border-b border-[#d6d0c4] pb-4">

<button

onClick={() =>
setActive(active === i ? null : i)
}

className="w-full flex justify-between items-center text-left"
>

<span className="text-lg font-medium">
{faq.question}
</span>

<span>
{active === i ? "−" : "+"}
</span>

</button>

<AnimatePresence>

{active === i && (

<motion.p

initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}

className="text-[#666] mt-3"
>

{faq.answer}

</motion.p>

)}

</AnimatePresence>

</div>

))}

</div>

</div>

</div>

</section>

);

}
import { motion } from "framer-motion";

export default function AutomationFeatures({features}) {

return (

<section className="mt-20">

<h2 className="text-3xl font-semibold mb-10 text-center">
Smart Automation Features
</h2>

<div className="grid md:grid-cols-3 gap-8">

{features.map((f,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:i*0.1}}
className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
>

<div className="text-4xl mb-4">{f.icon}</div>

<h3 className="text-xl font-semibold mb-2">{f.title}</h3>

<p className="text-gray-600">{f.desc}</p>

</motion.div>

))}

</div>

</section>

)

}
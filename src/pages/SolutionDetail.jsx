import { useNavigate, useParams } from "react-router-dom";
import { solutions } from "../data/solutionsData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";

export default function SolutionDetail() {

const navigate = useNavigate();
const { slug } = useParams();

const solution = solutions.find(s => s.slug === slug);

const { scrollY, scrollYProgress } = useScroll();

const heroY = useTransform(scrollY,[0,600],[0,200]);
const heroScale = useTransform(scrollY,[0,600],[1,1.2]);

const btnRef = useRef(null);

const handleMove = (e)=>{
const rect = btnRef.current.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;
btnRef.current.style.transform = `translate(${x*0.2}px,${y*0.2}px)`
};

const reset = ()=>{
btnRef.current.style.transform = "translate(0,0)"
};

if(!solution) return null;

return(

<div className="bg-[#f7f7f5] overflow-x-hidden mt-15">

{/* SCROLL PROGRESS BAR */}

<motion.div
className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 origin-left z-50"
style={{scaleX:scrollYProgress}}
/>


{/* HERO */}

<section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

<motion.img
src={solution.cover}
style={{y:heroY,scale:heroScale}}
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/50"/>

{/* floating glow */}
<div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 blur-[120px] rounded-full"/>
<div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/30 blur-[120px] rounded-full"/>

<motion.div
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="relative text-center px-6"
>

<h1 className="text-white text-4xl md:text-6xl font-playfair mb-6">
HomeCraft Interiors
</h1>

<p className="text-white/80 text-lg max-w-xl mx-auto">
Luxury smart home experiences designed with innovation and
modern interior design aesthetics.
</p>

</motion.div>

</section>



{/* INTRO */}

<section className="relative py-28 px-6 overflow-hidden">

<div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300/30 blur-[120px] rounded-full"/>
<div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/30 blur-[120px] rounded-full"/>

<div className="relative max-w-6xl mx-auto text-center">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
>
{solution.title}
</motion.h2>

<motion.div
initial={{scaleX:0}}
whileInView={{scaleX:1}}
transition={{duration:0.8}}
className="mx-auto w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-12"
/>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
className="max-w-3xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.15)] rounded-[30px] p-10 hover:scale-[1.02] transition"
>

<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
{solution.description}
</p>

</motion.div>

</div>

</section>



{/* MODELS */}

<section className="max-w-7xl mx-auto px-6 pb-28">

{solution.models.map((model,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.7}}
className="grid md:grid-cols-2 gap-16 items-center mb-32"
>

{/* IMAGE */}

<motion.div
initial={{clipPath:"inset(0 100% 0 0)"}}
whileInView={{clipPath:"inset(0 0% 0 0)"}}
transition={{duration:1}}
viewport={{once:true}}
className="overflow-hidden rounded-xl"
>

<img
src={model.image}
className="rounded-xl shadow-xl hover:scale-110 transition duration-700"
/>

</motion.div>


{/* CONTENT */}

<div>

<h2 className="text-3xl font-semibold mb-6">
{model.name}
</h2>


<h3 className="text-lg font-semibold mb-4 text-[#C79B3B]">
Key Features
</h3>

<ul className="space-y-3 mb-8">

{model.features.map((f,index)=>(

<li
key={index}
className="flex items-start gap-3 text-gray-700"
>

<span className="mt-2 w-2 h-2 bg-[#C79B3B] rounded-full"/>

{f}

</li>

))}

</ul>


<h3 className="text-lg font-semibold mb-4 text-[#C79B3B]">
Specifications
</h3>

<div className="grid grid-cols-2 gap-4">

{Object.entries(model.specs).map(([key,value])=>(

<motion.div
key={key}
whileHover={{y:-6}}
className="bg-white p-4 rounded-lg shadow-sm hover:shadow-xl transition"
>

<p className="text-sm text-gray-500 capitalize">
{key}
</p>

<p className="font-semibold text-gray-800">
{value}
</p>

</motion.div>

))}

</div>

</div>

</motion.div>

))}

</section>



{/* CTA */}

<section className="bg-white py-24">

<div className="max-w-4xl mx-auto text-center px-6">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.7}}
className="text-3xl md:text-4xl font-semibold mb-6"
>

Upgrade Your Home With Smart Technology

</motion.h2>

<p className="text-gray-600 mb-10">
Our smart solutions combine innovation, luxury design
and reliable performance to transform your living experience.
</p>


<button
ref={btnRef}
onMouseMove={handleMove}
onMouseLeave={reset}
onClick={()=>navigate("/consultation")}
className="
relative
px-14 py-4
text-white
font-semibold
text-lg
rounded-full
overflow-hidden
bg-gradient-to-r from-red-600 via-pink-600 to-orange-500
shadow-[0_0_30px_rgba(255,0,0,0.6)]
transition-all duration-300
hover:scale-110
hover:shadow-[0_0_60px_rgba(255,0,0,0.9)]
before:absolute
before:top-0
before:left-[-100%]
before:w-full
before:h-full
before:bg-white/20
before:skew-x-12
before:transition-all
before:duration-700
hover:before:left-[120%]
"
>

Book Consultation

</button>

</div>

</section>


<Footer/>

</div>

)
}
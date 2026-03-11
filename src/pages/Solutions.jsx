import Footer from "../components/Footer";
import LuxuryPageHero from "../components/LuxuryPageHero";
import ScrollProgressBar from "../components/ScrollProgress";
import SolutionCard from "../components/SolutionCard";
import { solutions } from "../data/solutionsData";

export default function Solutions() {

  return (
    <>
    <ScrollProgressBar />
<LuxuryPageHero
  title="Home Automation"
  subtitle="Future Living"
  image="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1920"
/>
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Smart Home Solutions
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {solutions.map((solution) => (

          <SolutionCard
            key={solution.slug}
            solution={solution}
          />

        ))}

      </div>

    </section>
    <Footer />
    </>

  );
}
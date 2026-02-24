import { useState } from "react";

export default function BeforeAfter() {

  const [pos, setPos] = useState(50);

  return (

    <section className="bg-black py-32 flex justify-center">

      <div className="relative w-[800px] max-w-full">

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="rounded-xl"
        />

        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013"
            className="rounded-xl"
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(e.target.value)}
          className="w-full mt-4"
        />

      </div>

    </section>

  );

}
import { useState, useMemo } from "react";

export default function EstimateCalculator({ project }) {

  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(7);

  const [packageType, setPackageType] = useState("premium");

  const [extras, setExtras] = useState({});

  const area = useMemo(() => width * height, [width, height]);

  const baseCost = useMemo(() => {
    return area * project.packages[packageType];
  }, [area, packageType, project]);

  const extrasTotal = useMemo(() => {

    let total = 0;

    for (let extraName in extras) {

      const category = extras[extraName];

      const extra = project.extras.find(
        e => e.name === extraName
      );

      if (extra && category) {
        total += extra.prices[category];
      }

    }

    return total;

  }, [extras, project]);

  const finalTotal = baseCost + extrasTotal;


  const handleExtraChange = (extraName, category) => {

    setExtras(prev => ({
      ...prev,
      [extraName]: category
    }));

  };


  // WhatsApp integration
  const handleWhatsApp = () => {

    const phone = "7799448384";

    const projectUrl = `${window.location.origin}/projects/${project.id}`;

    let extrasText = "";

    for (let extraName in extras) {

      const category = extras[extraName];

      if (category) {

        const extra = project.extras.find(
          e => e.name === extraName
        );

        extrasText +=
          `${extraName} (${category}) - ₹${extra.prices[category]}\n`;

      }

    }

    const message =
`Hello, I want estimate for this project:

Project: ${project.title}

Project Link: ${projectUrl}

Dimensions:
Width: ${width} ft
Height: ${height} ft
Area: ${area} sq ft

Package: ${packageType}

Base Cost: ₹${baseCost.toLocaleString()}

Extras:
${extrasText || "None"}

Extras Total: ₹${extrasTotal.toLocaleString()}

Final Total: ₹${finalTotal.toLocaleString()}

Please contact me regarding this estimate.
`;

    const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  };


  return (

    <div className="
      bg-white
      border border-[#E8DFC8]
      p-8
      rounded-2xl
      shadow-lg
    ">

      {/* Heading */}
      <h3 className="
        text-2xl
        font-playfair
        text-[#2B2B2B]
        mb-6
      ">
        Estimate Calculator
      </h3>


      {/* Dimensions */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div>

          <label className="text-sm text-[#6B645C]">
            Width (ft)
          </label>

          <input
            type="number"
            value={width}
            onChange={(e) =>
              setWidth(Number(e.target.value))
            }
            className="
              w-full mt-2 p-3
              bg-[#F8F6F2]
              border border-[#E8DFC8]
              rounded-lg
              focus:outline-none
              focus:border-[#C6A75E]
            "
          />

        </div>


        <div>

          <label className="text-sm text-[#6B645C]">
            Height (ft)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(Number(e.target.value))
            }
            className="
              w-full mt-2 p-3
              bg-[#F8F6F2]
              border border-[#E8DFC8]
              rounded-lg
              focus:outline-none
              focus:border-[#C6A75E]
            "
          />

        </div>

      </div>


      {/* Package */}
      <div className="mb-6">

        <label className="text-sm text-[#6B645C]">
          Package
        </label>

        <select
          value={packageType}
          onChange={(e) =>
            setPackageType(e.target.value)
          }
          className="
            w-full mt-2 p-3
            bg-[#F8F6F2]
            border border-[#E8DFC8]
            rounded-lg
            focus:outline-none
            focus:border-[#C6A75E]
          "
        >

          <option value="economic">
            Economic (₹{project.packages.economic}/sqft)
          </option>

          <option value="premium">
            Premium (₹{project.packages.premium}/sqft)
          </option>

          <option value="luxury">
            Luxury (₹{project.packages.luxury}/sqft)
          </option>

        </select>

      </div>


      {/* Extras */}
      <div className="mb-6">

        <h4 className="
          font-semibold
          text-[#2B2B2B]
          mb-3
        ">
          Extras
        </h4>

        {project.extras.map(extra => (

          <div key={extra.name} className="mb-3">

            <label className="text-sm text-[#6B645C]">
              {extra.name}
            </label>

            <select
              onChange={(e) =>
                handleExtraChange(
                  extra.name,
                  e.target.value
                )
              }
              className="
                w-full mt-1 p-3
                bg-[#F8F6F2]
                border border-[#E8DFC8]
                rounded-lg
                focus:outline-none
                focus:border-[#C6A75E]
              "
            >

              <option value="">None</option>

              <option value="economic">
                Economic ₹{extra.prices.economic}
              </option>

              <option value="premium">
                Premium ₹{extra.prices.premium}
              </option>

              <option value="luxury">
                Luxury ₹{extra.prices.luxury}
              </option>

            </select>

          </div>

        ))}

      </div>


      {/* Breakdown */}
      <div className="
        border-t border-[#E8DFC8]
        pt-4
        text-[#2B2B2B]
      ">

        <p>Area: {area} sq ft</p>

        <p>Base Cost: ₹{baseCost.toLocaleString()}</p>

        <p>Extras: ₹{extrasTotal.toLocaleString()}</p>

        <p className="
          text-[#C6A75E]
          text-xl
          font-bold
          mt-2
        ">
          Total: ₹{finalTotal.toLocaleString()}
        </p>

      </div>


      {/* WhatsApp Button */}
      <button

        onClick={handleWhatsApp}

        className="
          w-full mt-6
          bg-[#C6A75E]
          hover:bg-[#b8964f]
          text-white
          py-4
          rounded-xl
          font-semibold
          transition
          shadow-md
        "
      >
        Discuss this estimate on WhatsApp

      </button>

    </div>

  );

}
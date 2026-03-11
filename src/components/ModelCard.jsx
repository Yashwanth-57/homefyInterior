export default function ModelCard({ model }) {

  return (

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={model.image}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-semibold mb-4">
          {model.name}
        </h3>

        <ul className="text-gray-600 text-sm space-y-1 mb-4">

          {model.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}

        </ul>

      </div>

    </div>

  );
}
import type { Tech } from "../../types/techtype";

type TechtechsProps = {
  tech: Tech;

  onAdd: (tech: Tech) => void;
};

const Techtechs = ({ tech, onAdd }: TechtechsProps) => {
  return (
    <div>
      <div
        key={tech.id}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-12 w-12 object-contain"
          />

          <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
            {tech.badge}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold">{tech.name}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {tech.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="mt-6 block text-sm text-pink-500">
            {tech.category}
          </span>
          <span className="mt-6 text-sm text-gray-500">{tech.difficulty}</span>

          <span className=" mt-6 text-sm font-medium">
            <span className="text-yellow-400">★</span> {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          className="mt-8 w-full rounded-full bg-black py-2 text-sm font-medium text-white transition hover:bg-pink-500"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};
export default Techtechs;

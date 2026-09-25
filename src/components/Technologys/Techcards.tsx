import type { Tech } from "../../types/techtype";

type TechtechsProps = {
  tech: Tech;

  onAdd: (tech: Tech) => void;
  isSelected: boolean;
};

const Techtechs = ({ tech, onAdd, isSelected }: TechtechsProps) => {
  return (
    <div>
      <div
        key={tech.id}
        className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5 md:p-6"
      >
        <div className="flex items-center justify-between">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />

          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-500">
            {tech.badge}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold sm:text-xl">{tech.name}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {tech.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className="text-sm text-pink-500">{tech.category}</span>
          <span className=" text-sm text-gray-500">{tech.difficulty}</span>

          <span className=" text-sm font-medium">
            <span className="text-yellow-400">★</span> {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`mt-6 w-full rounded-lg py-2 text-sm font-medium transition sm:mt-8 ${
            isSelected
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-pink-500"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};
export default Techtechs;

import type { Tech } from "../../types/techtype";

type YourStackProps = {
  selectedTechs: Tech[];
  onRemove: (id: string) => void;
};

const YourStack = ({ selectedTechs, onRemove }: YourStackProps) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

      <div className="mt-1 text-sm text-gray-400">
        {selectedTechs.length === 0 ? (
          <span>No Technology Selected yet.</span>
        ) : (
          <span>{selectedTechs.length} Technology Selected.</span>
        )}
      </div>

      <div className="mt-4 space-y-3">
        {selectedTechs.length === 0 ? (
          <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-gray-200">
            <p className="text-sm text-gray-400">Your stack is empty.</p>
          </div>
        ) : (
          selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 object-contain"
              />

              <div>
                <h3 className="text-sm font-semibold">{tech.name}</h3>

                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourStack;

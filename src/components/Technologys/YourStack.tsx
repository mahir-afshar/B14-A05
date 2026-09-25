import type { Tech } from "../../types/techtype";

type YourStackProps = {
  selectedTechs: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
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
          <div className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-sm text-gray-400">Your stack is empty.</p>
          </div>
        ) : (
          selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain"
              />

              <div>
                <h3 className="text-sm font-semibold">{tech.name}</h3>

                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => onRemove(tech.id)}
                  className=" text-gray-400 transition hover:text-red-500"
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedTechs.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-500"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;

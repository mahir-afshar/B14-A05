import { use, useState } from "react";
import type { Tech } from "../../types/techtype";
import Techcards from "./Techcards";
import YourStack from "./YourStack";

const Techs = ({ techPromise }: { techPromise: Promise<Tech[]> }) => {
  const allTechs = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<Tech[]>([]);

  const handleAdd = (tech: Tech) => {
    setSelectedTechs((prev) => {
      const alreadySelected = prev.some((item) => item.id === tech.id);

      if (alreadySelected) {
        return prev;
      }

      return [...prev, tech];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedTechs((prev) => prev.filter((tech) => tech.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <section>
      <div>
        <div className="my-5">
          <h1 className="text-3xl font-bold">
            Explore the <span className="text-pink-500">Technologies</span>
          </h1>
          <p className="text-lg text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 my-10">
          <div className="col-span-3 grid grid-cols-3 gap-5">
            {allTechs.length === 0 && <p>No Techs Available</p>}
            {allTechs.map((singleTech) => (
              <Techcards
                key={singleTech.id}
                tech={singleTech}
                onAdd={handleAdd}
              />
            ))}
          </div>
          <div>
            <YourStack
              selectedTechs={selectedTechs}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;

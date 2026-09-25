import toast from "react-hot-toast";
import { use, useState } from "react";
import type { Tech } from "../../types/techtype";
import Techcards from "./Techcards";
import YourStack from "./YourStack";

const Techs = ({ techPromise }: { techPromise: Promise<Tech[]> }) => {
  const allTechs = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<Tech[]>([]);

  const handleAdd = (tech: Tech) => {
    const alreadySelected = selectedTechs.some((item) => item.id === tech.id);

    if (alreadySelected) {
      return;
    }

    setSelectedTechs((prev) => [...prev, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setSelectedTechs((prev) => prev.filter((tech) => tech.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };
  const handleIsSelected = (id: string) => {
    return selectedTechs.some((tech) => tech.id === id);
  };

  return (
    <section className="container mx-auto">
      <div>
        <div className="my-5">
          <h1 className=" font-['Inter'] text-3xl font-bold">
            Explore the <span className="text-pink-500">Technologies</span>
          </h1>
          <p className="text-lg text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-3 md:grid-cols-3">
            {allTechs.length === 0 && <p>No Techs Available</p>}
            {allTechs.map((singleTech) => (
              <Techcards
                key={singleTech.id}
                tech={singleTech}
                onAdd={handleAdd}
                isSelected={handleIsSelected(singleTech.id)}
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

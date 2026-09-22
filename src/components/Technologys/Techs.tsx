import { use } from "react";
import type { Tech } from "../../types/techtype";
import Techcards from "./Techcards";

// interface TechProps {
// 	booksPromise: Promise<Tech[]>
// 	saved: Tech[]
// 	category: string
// 	onSave: (techs: Tech) => void

//     const Techs = ({
// 	techPromise,
// 	saved,
// 	category,

// 	onSave,
// }: TechProps) 

const Techs = ({ techPromise }: { techPromise: Promise<Tech[]> } ) => {
    const allTechs = use(techPromise)
    
    return (
        <section>

        <div>
            <div className="my-5">
                <h1 className="text-3xl font-bold">Explore the <span className="text-pink-500">Technologies</span></h1>
                <p className="text-lg text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-4 gap-5 my-10">
                <div className="col-span-3 grid grid-cols-3 gap-5">
                    {allTechs.length === 0 && <p>No Techs Available</p> }
                    {allTechs.map((singleTech) => (
                    <Techcards key={singleTech.id} tech={singleTech}></Techcards>
                // <Techcards techs = { techs } />
                    ))}
                    
                </div>

            </div>
        </div>
        </section>
    );
};

export default Techs;
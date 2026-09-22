import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Techs from "./components/Technologys/Techs"
import { Suspense } from "react"

const fetchTech = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

const techPromise = fetchTech()

function App() {
 
  return (
    <>
    <div>

      <Navbar />
      <Herosection />
      <main>

      <section className="container mx-auto my-10">
        <div>
        {/* cards.... */}
      <Suspense fallback = { <div>Loading....</div> }>
        <Techs techPromise = {techPromise} />
      </Suspense>
      
        </div>
      </section>
      </main>
      
    </div>
    </>
  )
}

export default App

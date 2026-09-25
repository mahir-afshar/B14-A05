import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Techs from "./components/Technologys/Techs"
import { Suspense } from "react"
import Footer from "./components/Footer"


const fetchTech = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

const techPromise = fetchTech()

function App() {
 
  return (
    <>
    <div className="px-4 sm:px-6 lg:px-8">

      <Navbar />
      <div>

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
      
      <Footer />
    </div>
    </>
  )
}

export default App

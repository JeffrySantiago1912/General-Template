import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
    </main>
    </>
  )
}

export default App
import {
  Artist,
  Hero,
  Navbar,
  StatCart,
  SubsCTA,
  Trending,
  Footer
} from "./components";


function App() {
  return (
    <>
    <div className="max-w-[2140px] m-auto">
      <Navbar />
      <Hero />
      <StatCart />
      <Trending />
      <Artist />
      <SubsCTA />
      <Footer/>
      </div>
    </>
  );
}

export default App;

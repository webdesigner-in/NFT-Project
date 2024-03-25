import { HeroImg, HeroGradient, HeroArrow } from "../constants";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="">
        <div 
        className="hero_container grid lg:grid-cols-2 gap-10 lg:gap-16 justify-center mt-8  ">
          <span className="w-[550px] h-[550px] blur-3xl rounded-full blue_gradient absolute -top-48 -left-32 -z-10"></span>
          <div 
          className="content_container  lg:w-2/3 mx-6  sm:mx-2 lg:mx-20 space-y-4 ">
            <h1 
            className="text-6xl font-Inria  font-extrabold tracking-wider w-[10ch] md:w-[14ch] lg:w-[8ch] xl:w-[14ch]">
              Discover Digital Art And Collect NFTs
            </h1>
            <p 
            className="font-Jost  text-xl font-normal text-gray-300 w-[80%] lg:w-[160%] xl:w-[150%]">
              EnDasmu is a shared liquidity NFT market smart contact which is
              used by multiple website to provide the users the best experience.
            </p>
            <div 
            className="content_button-container flex  items-center w-fit lg:w-[200%] my-3">
              <button 
              className="yellow_gradient font-medium px-8 py-3 rounded-full font-Jost">
                Get Start
              </button>
              <button 
              className="border px-8 py-3 rounded-full font-Jost font-medium flex items-center mx-4">
                Learn More
                <img 
                className="w-[18px] mt-1 mx-1" 
                src={HeroArrow} 
                alt="" />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div 
          className="images_container  relative w-[350px] h-[350px] m-auto  lg: xl:w-[70%] ">
            <img 
            className="w-[70%] absolute" src={HeroGradient} alt="" />
            <img 
            className="absolute" src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

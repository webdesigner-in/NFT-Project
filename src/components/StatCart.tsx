import { ArtistImg } from "../constants";
export default function StatCart() {
  return (
    <section className="statcard">
      <div className="w-[95%] xl:w-[85%] lg:w-[82%] m-auto h-[160px] bg-[#ffffff34] 2xl:backdrop-blur-sm rounded-md flex justify-between xl: items-center mt-4 ">
        <div className="stat-container px-4 xl:px-32">
        
          <ul className="flex space-x-6 xl:space-x-16 font-Inria text-lg xl:text-xl">
            <li>Art Work</li>
            <li>Auction</li>
            <li>Artist</li>
          </ul>
          <ul className=" justify-between flex-1 xl:text-2xl  flex font-Inria text-lg font-bold">
            <li>27K</li>
            <li>25K</li>
            <li>12K</li>
          </ul>
        
        </div>
        <div className="image_container flex flex-col justify-center items-start xl:px-14">
          <span>
          <span className="font-Jost text-sm font-bold ml-3">Art</span>
          <span className="font-Jost text-sm font-bold mx-7">32ETH</span>
          </span>
          <img className="w-[70%]" src={ArtistImg} alt="Artist Image" />
        </div>
      </div>
    </section>
  );
}

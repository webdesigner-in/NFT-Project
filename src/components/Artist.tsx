import {ArtistArrow } from "../constants";

export default function Artist() {
  return (
    <section className="ArtistsContainer">
      <div>
        <div className="artist_main-container w-[95%] xl:w-[85%] lg:w-[82%] m-auto bg-[#ffffff34] 2xl:backdrop-blur-sm rounded-md flex justify-between xl:items-center">
          <div className="artist-content_container font-Inria p-6 space-y-4 2xl:space-y-2">
            <p className="tracking-wider">ARTISTS</p>
            <h1 className="text-3xl font-bold tracking-wider">
              Top List Artists
            </h1>
            <p className="text-lg leading-snug lg:w-[65%]">
              We have dozens of artists that contributes to create amazing
              works.
            </p>

            <button className="border px-8 py-3 rounded-full font-Jost font-medium flex items-center">
              View Profiles
              <img className="w-[18px] mt-1 mx-1" src={ArtistArrow} alt="" />
            </button>
          </div>
          <div className="artist_image_container"></div>
        </div>
      </div>
    </section>
  );
}

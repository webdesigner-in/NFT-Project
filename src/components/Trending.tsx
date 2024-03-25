import { Kakashi, Obito, Sasuke, Itachi } from "../constants";

export default function Trending() {
  return (
    <section className="trending_section">
      <div className="my-16 px-16">
        <div className="tending-section_container flex flex-col 2xl:flex-row justify-between items-center">
          <div className="trending-left_section grid lg:grid-cols-2 gap-8 lg:gap-8 2xl:gap-8 2xl:mr-8">
            <div className="kakashi-container w-[345px] h-[220px] rounded-lg ">
              <img src={Kakashi} alt="Kakashi" 
              className="-translate-y-11 translate-x-20 w-[232px] h-[300px]  object-contain" />
            </div>
            <div className="obito-container w-[345px] h-[220px] rounded-lg">
              <img src={Obito} alt="Obito" className="-translate-y-[4.2rem] translate-x-20 w-[232px] h-[300px]  object-contain" />
            </div>
            <div className="sasuke-container w-[345px] h-[220px] rounded-lg">
              <img src={Sasuke} alt="Sasuke" className="-translate-y-[4.1rem] translate-x-20 w-[232px] h-[300px]  object-contain" />
            </div>
            <div className="itachi-container w-[345px] h-[220px] rounded-lg">
              <img src={Itachi} alt="" className="-translate-y-[3.4rem] translate-x-20 w-[232px] h-[300px]  object-contain" />
            </div>
          </div>

          
        
          
      
        <div className="trending-right_section  flex-1 flex flex-col gap-y-2 lg:gap-y-1 lg:mt-4 mt-8 lg:mx-20">
        <span className="artist_blur_container w-[400px] h-[400px] -left-10 2xl:left-[60rem] 2xl:w-[500px] 2xl:h-[500px] rounded-full absolute blur-[75px] -z-10"></span>
           <div className="mt-4  w-fit m-auto">
           <p className="font-Inria">Popular Items</p>
            <h4 className="font-Inria text-7xl font-extrabold lg:w-[70%] xl:w-1/2 2xl:w-full">Hot Trending On This Week</h4>
            <p className="font-Jost text-sm lg:text-xl lg:w-[70%]  2xl:w-full 2xl:text-sm mt-4">Various kinds of NFTs that are trending the trend will we reset every week. Don’t miss out the best NFTs every week.</p>
            <button className="border flex justify-center items-center mt-4 lg:w-fit 2xl:w-full py-3 px-6 font-Jost font-normal rounded-full">
                  <span className="mr-2">See All</span>
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8876 0.792905C13.2781 0.402365 13.9113 0.402365 14.3018 0.792905L22.3019 8.7929C22.6923 9.18342 22.6923 9.81658 22.3019 10.2071L14.3018 18.2072C13.9113 18.5976 13.2781 18.5976 12.8876 18.2072C12.4971 17.8166 12.4971 17.1834 12.8876 16.7928L19.1805 10.5H1.59473C1.04245 10.5 0.594727 10.0523 0.594727 9.5C0.594727 8.94772 1.04245 8.5 1.59473 8.5H19.1805L12.8876 2.2071C12.4971 1.81658 12.4971 1.18343 12.8876 0.792905Z"
                      fill="white"
                    />
                  </svg>
                </button>
           </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Estates from "../Estates/Estates";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       

        <SwiperSlide>
          
            <div
              className="bg-cover bg-center hero min-h-screen w-full h-[550px] bg-gradient-to-r from-slate-900 to-black rounded-2xl "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/2N60pkd/webaliser-TPTXZd9m-Oo-unsplash.jpg)",
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
        
        </SwiperSlide>
        <SwiperSlide>
         
            <div
              className=" bg-cover bg-center hero min-h-screen w-full h-[550px] bg-gradient-to-r from-slate-900 to-black rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/pvmtG15/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg)",
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide className="w-screen">
          
            <div
              className=" bg-cover bg-center hero min-h-screen w-full h-[550px] bg-gradient-to-r from-slate-900 to-black rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/WWdnH8z/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg)",
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
      
        </SwiperSlide>
      </Swiper>
      <Estates></Estates>
    </div>
  );
};

export default Home;

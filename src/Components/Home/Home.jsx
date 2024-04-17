import { Swiper, SwiperSlide } from "swiper/react";
import { FaSearchengin } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Helmet} from "react-helmet";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Estates from "../Estates/Estates";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>LuxeVillas | Home</title>
    </Helmet>
    <div className="container mx-auto font-display">
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
                "url(https://i.ibb.co/pvmtG15/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg)",
            }}
          >
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-[#fff]">
                Discover a place

                </h1>
                <p className="mb-5 text-[#010313] font-semibold ">
                Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality
                </p>

                <label className="input input-bordered h-16 flex items-center gap-2 border-2 border-primary">
                  <input
                    type="text"
                    className="grow"
                    placeholder="
Enter an Address, Nearby City, or Zip Code to Begin Your Search"
                  />

                  <i className="text-primary ">
                    <FaSearchengin />
                  </i>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" bg-cover bg-center hero min-h-screen w-full h-[550px] bg-gradient-to-r from-slate-900 to-black rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/3z6RVZr/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg)",
            }}
          >
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-[#010313]">
                Discover a place
                </h1>
                <p className="mb-5 text-[#010313] font-semibold">
                Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality
                </p>
                <label className="input input-bordered h-16 flex items-center gap-2 border-2 border-primary">
                  <input
                    type="text"
                    className="grow"
                    placeholder="
Enter an Address, Nearby City, or Zip Code to Begin Your Search"
                  />

                  <i className="text-primary ">
                    <FaSearchengin />
                  </i>
                </label>
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
                <h1 className="mb-5 text-5xl font-bold text-[#010313]">Discover a place</h1>
                <p className="mb-5 text-[#010313] font-semibold">
                Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality
                </p>
                <label className="input input-bordered h-16 flex items-center gap-2 border-2 border-primary">
                  <input
                    type="text"
                    className="grow"
                    placeholder="
Enter an Address, Nearby City, or Zip Code to Begin Your Search"
                  />

                  <i className="text-primary ">
                    <FaSearchengin />
                  </i>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Estates></Estates>
    </div>
    </>
  );
};

export default Home;

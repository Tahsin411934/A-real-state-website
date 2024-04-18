import { IoCall } from "react-icons/io5";
import 'animate.css';
import { Helmet } from "react-helmet";




const CustomerExperiences = () => {
  return (
    <div className="container mx-auto mt-20">
<Helmet>
        <title>LuxeVillas |  Customer Experiences </title>
      </Helmet>
      {/* Customer Experiences SECTION*/}
      <div className="animate__animated animate__backInUp w-[60%] mx-auto text-center font-display">
        <h1 className="mb-5 text-4xl font-medium text-[#1c1c1c]">
          Customer Experiences
        </h1>
        <p className="mb-5 text-slate-600 font-normal">
          There is no greater benchmark for success than customer <br></br>
          satisfaction. Over the years, we’ve built a culture of service.
        </p>
      </div>
      <div className="lg:flex  justify-around gap-5 mt-10 mb-32">
        <iframe
          className="rounded-xl"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/u-qrvuObeVA?si=yM1CJk4qKCH72yD4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-xl"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/0oZkzBK1tOU?si=W8boszQuNuLSt2vy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-xl"
          width="400"
          height="200"
          src="https://www.youtube.com/embed/sUvtiqdPAfE?si=Yt8Yfv89wp_mXgdB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>


      {/* Frequently Asked Questions SECTION */}
      <div className="w-[60%] mx-auto text-center font-display">
        <h1 className="mb-20 text-4xl font-medium text-[#1c1c1c]">
          Frequently Asked Questions
        </h1>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title mb-5 text-slate-600 font-normal">
              What are the benefits of adding my property?
            </div>
            <div className="">
              <p>
                Adding your property to online platforms boosts visibility,
                reaching a wider audience for potential renters or buyers. It
                offers convenience and targeted marketing, enhancing
                competitiveness in the market.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="mb-5 text-slate-600 font-normal">
              Do I need to sign any agreements?
            </div>
            <div className="collapse-content">
              <p>
                No, you don’t need to sign an agreement to add your property to
                the website to rent or sell your flat, land or commercial
                property. However, you can sign an exclusive agreement with
                Bproperty to take advantage of Bproperty’s extensive marketing
                features & facilities.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title mb-5 text-slate-600 font-normal">
              What is the process of selling/renting my property?
            </div>
            <div className="collapse-content">
              <p>
                Once you have submitted your request to add a property to the
                Bproperty website, one of our representatives will contact you
                for information. After that, an executive will visit your site,
                take necessary photos/videos and publish your property on the
                website to attract buyers. You can also sign an agreement with
                Bproperty to take advantage of Bproperty’s extensive marketing
                features & facilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:flex item-center gap-32 bg-center mt-32 justify-around">
        <div className="w-[60%] mx-auto  font-display lg:ml-[15%]">
          <h1 className="mb-5 text-3xl font-medium text-[#1c1c1c]">
            Interested to learn more?
          </h1>
          <p className=" mb-5 text-slate-600 font-normal">
            Contact us today to learn more about how you can rent or sell
            property online quickly and easily.
          </p>
        </div>
        <div className="w-[60%] mx-auto text-center font-display">
          <div className="flex items-center gap-3">
            <i className="text-4xl">
              <IoCall />
            </i>

            <h1 className="mb-5 text-2xl font-medium text-[#1c1c1c]">
              09612110011
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperiences;

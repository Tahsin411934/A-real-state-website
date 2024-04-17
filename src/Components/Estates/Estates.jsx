import { useEffect, useState } from "react";
import Estate from "./Estate";
import 'animate.css';

const Estates = () => {
  const [estates, setEstates] = useState([]);
  //fetch Data
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  return (
    <div>
        <div className="animate__animated animate__backInUp mt-12 text-center p-1 rounded-xl" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                <h1 className=' text-2xl lg:text-3xl font-bold text-[#131313]'>&quot; Discover Your Dream Home &quot;</h1>
                <p className='text-slate-600'>
                &quot; Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality.Welcome to our curated selection <br></br>  of residential estates, where each property embodies luxury, comfort, and elegance.  &quot;</p>
            </div>
    <div className="lg:grid grid-cols-3 gap-3 mx-auto">
      {estates.map((estate) => (
        <Estate key={estate.id} estate={estate}></Estate>
      ))}
    </div>
    </div>
  );
};

export default Estates;

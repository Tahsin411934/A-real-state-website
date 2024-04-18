import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';
const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
   location,
   image,
  } = estate;
 
  return (
    <div className="container mx-auto font-display">
      <div className="card w-96 bg-base-100 shadow-xl bg-contain bg-center">
        <figure className=" pt-10">
          <img
            src={image}
            alt="House Image"
            className="rounded-xl h-[300px] "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate_title} |  {segment_name}</h2>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>{location}</p>
            </div>
          <p>Price: {price}</p>
          </div>
          <div className="card-actions">
           <Link to={`/viewProperty/${id}`} ><button className="btn bg-[#006aff] text-[#fff]">View Property</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.node
};
export default Estate;

import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
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
          <p>{location}</p>
          <p>Price: {price}</p>
          </div>
          
          
          <div className="card-actions">
           <Link to={`/viewProperty/${id}`} ><button className="btn btn-primary">View Property</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;

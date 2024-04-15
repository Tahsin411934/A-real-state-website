const Estate = ({ estate }) => {
  const {
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
  console.log(estate);
  return (
    <div className="container mx-auto font-display">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={image}
            alt="House Image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate_title} |  {segment_name}</h2>
          <div className="flex items-center gap-8">
          <p>{location}</p>
          <p>{price}</p>
          </div>
          
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;

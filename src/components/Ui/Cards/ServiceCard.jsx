import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="service-one__single">
      <div className="service-one__single-img">
        <div className="inner">
          <img src={item?.image} alt="#" />
          <div className="overlay-icon">
            <img src={item?.icon} alt="#" />
          </div>
        </div>
      </div>
      <div className="service-one__single-content">
        <h3>{item?.title}</h3>
        <p>
            {
                item?.description
            }
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

import "./product.css";

const Product = ({img,link, description}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className=" p-circle p-circle1"></div>
        <div className=" p-circle p-circle2"></div>
        <div className=" p-circle p-circle3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <div className="d-desc">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
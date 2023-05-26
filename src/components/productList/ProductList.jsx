import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus vitae numquam laboriosam ipsa nostrum assumenda enim blanditiis rerum aliquid quidem eius in soluta suscipit pariatur incidunt, dolorem voluptatum repellat maiores.
        </p> */}
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} project={item.project} link={item.link} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
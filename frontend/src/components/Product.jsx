import { Link } from "react-router-dom";
import Rating from "./Rating";


const Product = ({ product }) => {
  return (
    <div className="card w-96 glass mx-auto">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} /></Link>

      <div className="card-body text-center">
        <h2 className="card-title card-actions justify-center">{product.name}</h2>
        <div className=" flex ">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <p className="sm:text-xl flex justify-end">$ {product.price}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn glass">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}


export default Product;

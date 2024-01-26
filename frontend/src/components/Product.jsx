import { Link } from "react-router-dom";


const Product = ({ product }) => {
  return (
    <div className="card w-96 glass mx-auto">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} /></Link>

      <div className="card-body text-center">
        <h2 className="card-title card-actions justify-center">{product.name}</h2>
        <p className="card-actions sm:text-xl justify-end">$ {product.price}</p>

        <div className="card-actions justify-end">
          <button className="btn glass">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

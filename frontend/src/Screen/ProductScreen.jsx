import { Link, useParams } from "react-router-dom"
import products from '../products'
import Rating from "../components/Rating"

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  console.log(product)

  return (
    <div className="h-screen">
      <Link to='/' className="btn btn-active my-4">Back</Link>
      <div className="card glass lg:card-side bg-base-100 shadow-xl">
        <figure> <img className="" src={product.image} alt={product.name} /></figure>
        <div className="card-body my-6 xl:w-1/3">
          <h2 className="card-title">{product.name}</h2>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <span className="sm:text-xl">$ {product.price}</span>
          <span> {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
          <span>{product.description}</span>
          <p>|| {product.category} || {product.brand}</p>
          <div className="card-actions justify-end">
            <button className="btn glass">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen

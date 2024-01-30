import { Link, useParams } from "react-router-dom"
import Rating from "../components/Rating"
import axios from "axios"
import { useEffect, useState } from "react"

const ProductScreen = () => {
  const [product, setProduct] = useState([])
  const { id: productId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`)
      setProduct(data);
    }
    fetchProduct()
  }, [productId])


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

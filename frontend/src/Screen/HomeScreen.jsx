import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <div className='flex flex-wrap gap-6'>
      {products.map((product) => (
        <Product className="" key={product._id} product={product}>
          <div>{product.name}</div>
        </Product>
      ))}
    </div>
  )
}


export default HomeScreen

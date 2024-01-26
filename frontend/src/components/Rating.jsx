import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({ value, text }) => {
  return (
    <div className="flex items-center">
      <span>{value >= 1 ? (<FaStar />) : value >= 0.5 ? (<FaRegStarHalfStroke />) : (<FaRegStar />)}</span>

      <span>{value >= 2 ? (<FaStar />) : value >= 1.5 ? (<FaRegStarHalfStroke />) : (<FaRegStar />)}</span>

      <span>{value >= 3 ? (<FaStar />) : value >= 2.5 ? (<FaRegStarHalfStroke />) : (<FaRegStar />)}</span>

      <span>{value >= 4 ? (<FaStar />) : value >= 3.5 ? (<FaRegStarHalfStroke />) : (<FaRegStar />)}</span>

      <span>{value >= 5 ? (<FaStar />) : value >= 4.5 ? (<FaRegStarHalfStroke />) : (<FaRegStar />)}</span>
      <span>{text && text}</span>
    </div>
  )
}

export default Rating

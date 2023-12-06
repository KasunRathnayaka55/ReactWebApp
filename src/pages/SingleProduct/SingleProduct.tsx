import Single from "../../Components/Single/Single"
import { singleProduct } from "../../data"
import "./singleProduct.scss"

const SingleProduct = () => {
  return (
    <div className="singleProduct"><Single {...singleProduct}/></div>
  )
}

export default SingleProduct
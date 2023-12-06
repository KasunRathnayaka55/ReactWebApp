import Single from "../../Components/Single/Single"
import { singleUser } from "../../data"
import "./singleUser.scss"

const SingleUser = () => {
  return (
    <div className="singleUser"><Single {...singleUser}/></div>
  )
}

export default SingleUser
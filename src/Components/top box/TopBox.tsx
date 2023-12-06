import "./topbox.scss"
import { topDealUsers } from "../../data"

const TopBox = () => {
  return (
    <div className="topbox">
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map((item)=>(
                <div className="listItem" key={item.id}>
                    <div className="user">
                        <img src={item.img} />
                        <div className="userText">
                            <span>{item.username}</span>
                        <span className="userEmail">{item.email}</span>
                        </div>
                        
                    </div>
                    <div className="ammount">${item.amount}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox
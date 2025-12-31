import { useContext } from "react"
import { StoreContext } from "./context/StoreContext"
import { LuIndianRupee } from "react-icons/lu"
function ProductList() {
    const{product_list}=useContext(StoreContext)
   // console.log(product_list)
  return (
    <div className="container-fluid">
      <div className="row">
        {
          product_list.map((item,index)=>{
            return(
              <div Key={index} className="col-md-3 mt-5">
                <div className="card">
                  <img src={item.image}class="card-img-top"alt=".."/>
                  
                  <div class="card-body">
                    
                    <p className="card-text fw-bold"><span className="text-sucess">{<LuIndianRupee/>}:</span>{item.price}</p>
                    <button className="btn btn-primary">Add To Cart</button>
                    {/*FaplusCircle className="text-danger fs-1"/>*/}
                  </div>
                </div>
              </div>
            )
          }
        )
        }
      </div>
     
    </div>
  )
}
     
export default ProductList

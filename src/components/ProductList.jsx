import { useContext } from "react"
import { StoreContext } from "./context/StoreContext"
function ProductList() {
    const{product_list}=useContext(StoreContext)
    console.log(product_list)
  return (
    <div>
    {product_list.map((product)=>(
        <img src={product.image} alt="" key={product.id} />
    ))}  
    </div>
  )
}
     
export default ProductList

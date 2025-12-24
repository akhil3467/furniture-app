import { NavLink } from "react-router-dom"

function Banner(){
    return(
        <div className="banner">
            <div className="banner-text">
            <h1>Smart Furniture. Better Living.</h1>
            <h2>Modern, stylish furniture designed for today's and tomorrow's homes.</h2>
            <NavLink to="/products"className="products btn btn-primary">ShopNow</NavLink>
        </div>
        </div>
    );
}
export default Banner; 
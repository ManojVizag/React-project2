import "./index.css";
const Header=()=>{
    return(
        <>
         <nav>
        <div className="header">
        <ul>
            <li><a href="/boloforms">BoloForms</a></li>
            <li><a href="/Products">Products</a></li>
            <li><a href="/Pricing">Pricing</a></li>
            <li><a href="/Guides">Guides</a></li>
            <li><a href="/Templates">Templates</a></li>
        </ul>
        </div>
        <div className="header">
            <button className="light">Install Now</button>
            <button className="dark">BoloForms Premium</button>
        </div>
        </nav>
        </>
    )
}
export default Header;
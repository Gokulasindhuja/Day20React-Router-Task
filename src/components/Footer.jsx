
import { Link } from "react-router-dom";
// import logo from "../assets/clarusway_logo.png"


function Footer() {
    return (
      <div>
        <div className="footer">
          <p>
          Copyrights - Sindhuja {new Date().getFullYear()}
          </p>
          <Link to="#" target="_blank">
        
        </Link>          
        </div>
      </div>
    );
  }
  
  export default Footer;

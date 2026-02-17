import Ikaro from "../assets/ikaro.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div href="#">
            <img className="w-24" src={Ikaro} alt="" />
          </div>
          <Link to="contact">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

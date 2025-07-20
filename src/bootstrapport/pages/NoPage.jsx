import { useLocation, Link } from "react-router-dom";
import { FaArrowLeft, FaSkullCrossbones } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import FuzzyText from "./FuzzyText";
import "./NoPage.css";
import PageNotFoundImage from "../../assets/question.svg";

export default function NoPage() {
  const location = useLocation();

  return (
    <div className="no-page-container">
      <img
        src={PageNotFoundImage}
        alt="Page not found"
        className="no-page-img"
      />

    <FuzzyText baseIntensity={0.2}>
  404
</FuzzyText>


      <h2 className="no-page-subtitle">
        <FaSkullCrossbones style={{ marginRight: "10px" }} />
        Page Not Found
      </h2>

      <p className="no-page-path">
        No page exists at <strong>{location.pathname}</strong>
      </p>

     

      <Link to="/" className="go-home-btn">
        <FaArrowLeft style={{ marginRight: "8px" }} />
        Go Back Home
      </Link>
    </div>
  );
}

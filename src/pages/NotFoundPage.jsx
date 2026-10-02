import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import myError from "../assets/handsomedog.jpg"

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={myError} alt="iro" />
      <Link to="/" className={styles.Homeing}> Okay Doggo! </Link>
    </div>
  );
}

export default NotFoundPage;

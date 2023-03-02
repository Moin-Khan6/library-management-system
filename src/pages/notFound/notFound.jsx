import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import styles from "./style.module.css";
// import { FaLongArrowAltRight } from "react-icons/fa";

function NotFound() {
  return (
    <>
      <div className={styles.notFoundWrapper}>
        <h1>404 Page Not Found</h1>
        <p className={styles.btnWrapper}>
          The page you requested cannot be displayed right now.It may be
          temporarily unavailable, the link you clicked on may <br />
          be broken or expired, or you may not have permission to view this
          page.
        </p>
        <div className={styles.btnWrapper}>
          <Link to={"/"}>
          <Button
                  sx={{ bgcolor: "#3CB1B9" }}
                  title="Back To Login"
                ></Button>          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;

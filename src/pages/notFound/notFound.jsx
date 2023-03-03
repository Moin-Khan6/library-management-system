import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import styles from "./style.module.css";

function NotFound() {
  return (
    <>
      <div className={styles.notFoundWrapper}>
        <h1>404 Page Not Found</h1>
      
        <div className={styles.btnWrapper}>
          <Link to={"/"}>
            <Button title="Back To Login"></Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;

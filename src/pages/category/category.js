import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ItemsCard from "../../components/card/itemCard";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import styles from "./style.module.css";

import Button from "../../components/button/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Category() {
  const storeBooks = useSelector((state) => state.entities.books.books);

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <Paper className={`text-white ${styles.mainDivWrapper}`}>
          <Stack
            direction="column"
            justifyContent="left"
            alignItems="left"
            spacing={4}
          >
            <div className={`${styles.circleCat}`}>
              <MenuBookIcon className="mb-1" />
            </div>
            <Typography variant="h6">Book List</Typography>
            <Stack justifyContent={"space-between"} direction="row">
              <Typography variant="h6" style={{color:'grey'}}>
                Total Book {storeBooks.length}
              </Typography>
              <Link to='/books'>
              <Button title="View Book List"></Button>
              </Link>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </div>
  );
}

export default Category;

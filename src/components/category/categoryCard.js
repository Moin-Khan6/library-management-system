

import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import styles from "./style.module.css";
import Button from "../button/button";
import { Link, useNavigate } from "react-router-dom";

function CategoryCard({title,count,btnTitle,path,icon}) {
  const navigate = useNavigate()
  return (
    <Paper className={`text-white ${styles.mainDivWrapper}`}  onClick ={()=>{navigate(path)}}   >
          <Stack
            direction="column"
            justifyContent="left"
            alignItems="left"
            spacing={4}
          >
            <div className={`${styles.circleCat}`}>
             {icon}
            </div>
            <Typography variant="h6">{title}</Typography>
            <Stack justifyContent={"space-between"} direction="row">
              <Typography variant="h6" style={{color:'grey'}}>
                {count}
              </Typography>
             
            </Stack>
          </Stack>
        </Paper>  )
}

export default CategoryCard
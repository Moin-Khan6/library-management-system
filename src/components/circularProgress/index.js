import React from 'react'
import {  CircularProgress } from '@mui/material'
import styles from './style.module.css'


function ProgressCircular() {
  return (
    <div className={styles.divWrapper}>  
        <CircularProgress />
    </div>
  )
}

export default ProgressCircular
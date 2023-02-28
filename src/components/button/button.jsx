import React from 'react'
import styles from './button.module.css'
function Button(props) {
 const {title,onClick,width} = props;
  return (<button className={`btn   ${width} ${styles.btnApp}`} data-toggle="modal" data-target="#exampleModal"   onClick ={onClick} > {title}</button>
  )
}

export default Button
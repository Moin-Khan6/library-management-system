import { Paper } from '@mui/material'
import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../../store/cartSlice'
import styles from './style.module.css'

function ItemsCard({data}) {
  const dispatch = useDispatch()
  

  return (
    <Paper>
    <div className={styles.cardWrapper}>
      <div className='my-3 w-100 rounded'>
      <img width='100%' height='100%' className='rounded' src={data.image}></img>
      </div>
      <div className='my-2 p-3'>
      <h3 className='text-center'>{data.title}</h3>
      </div>
    </div>
    </Paper>
  )
}

export default ItemsCard
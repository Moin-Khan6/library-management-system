import React from 'react'
import {FundViewOutlined}  from '@ant-design/icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { Table } from "antd";
import { bookDeleted } from '../../store/cartSlice';

function TableCustom({dataSource}) {
  const dispatch = useDispatch()  
  const columns = [
      {
        title: "Title",
        dataIndex: "title",
      },
      // {
      //   title: "Author",
      //   dataIndex: "author",
      // },
      // {
      //   title: "Published Date",
      //   dataIndex: "publishedDate",
      // },
      {
        title: "Status",
        dataIndex: "borrow",
        render:(borrow)=>{
          let color = '';
          if(borrow ==true){
            color="red"
          }
          if(borrow ==false){
            color="#086e85"
          }
          return <span style={{ color:color,fontWeight:"bold" }}>{(borrow == true) ? "borrow" :"library"}</span>;
        }
      },
      {
        title: "Details",
        render: (text,record,index) => (
            <Link to= '/view-books' state ={{record:record,index:index}}
             >
          <Button  variant="contained"  endIcon={<FundViewOutlined />}>
           View More 
        </Button>
            </Link>
        ),
      },
      {
        title: "Delete",
        render: (Details,record) => (
         <Button variant="outlined" onClick={()=>{dispatch(bookDeleted(record._id))}} startIcon={<DeleteIcon />}>
      Delete
    </Button>
        ),
      },
      
    ];
    

  return (
    <Table dataSource={dataSource} columns={columns} className="my-4" />
    )
}

export default TableCustom
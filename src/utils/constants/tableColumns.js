import {FundViewOutlined}  from '@ant-design/icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
  {
    title: "Published Date",
    dataIndex: "publishedDate",
  },
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
    render: (Details,record) => (
        <Link to= '/view-books' state ={record}
         >
      <Button  variant="contained"  endIcon={<FundViewOutlined />}>
       View More 
    </Button>
        </Link>
    ),
  }
  
];

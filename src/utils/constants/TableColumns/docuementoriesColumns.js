import {FundViewOutlined}  from '@ant-design/icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = (handleIconClick,path) => [
      {
        title: "Title",
        dataIndex: "title",
      },
      {
        title: "Director",
        dataIndex: "director",
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
        render: (text,record,index) => (
            <Link to= {`${path}`} state ={{record:record,index:index}}
             >
          <Button  variant="contained"  endIcon={<FundViewOutlined />}>
           View  
        </Button>
            </Link>
        ),
      },
      {
        title: "Delete",
        render: (Details,record) => (
         <Button variant="outlined" onClick={() => handleIconClick(record)} startIcon={<DeleteIcon />}>
      Delete
    </Button>
        ),
      },
      
    ];


export default columns;

import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import ItemsCard from "../../components/card/itemCard";
import Input from "../../components/input/input";
import { newsPaperEdited } from "../../store/newsPaperSlice";


function EditNewsPaper() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.record;
  const index = location.state.index;

  const [booksData, setBooksData] = useState({ ...data });
  const [_id ,title , publishedDate, publisher, language, description, image, price,borrowBy, borrowDate,returnDate,borrow] = Object.keys(data);         
  const [disabled, seDisabled] = useState(true)


  const editHandler = ()=>{
    seDisabled(false)
    dispatch(newsPaperEdited({booksData,index}))
    navigate('/dash-board/news-paper')
  }

  return (
    <div className="w-75 m-auto" >
     <div className="row w-100 p-2">
      <div className="col-12 col-md-4 d-none d-sm-block">
      <ItemsCard data ={data}></ItemsCard>
      </div>
    <div className="col-12 col-md-8">
        <div className="row">   
        <div className="col-12 col-md-4">
              <Input
                value={booksData.title}
                placeholder={title}
                onChange={(e)=>{setBooksData({...booksData, title:e.target.value})}}
                name={"data"}
                title={title}
                disabled ={disabled}
                type="text"
              />
            </div>
        {/* <div className="col-12 col-md-4">
              <Input
                value={booksData.author}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, author:e.target.value})}}
                name={"data"}
                title={author}
                disabled ={disabled}
                type="text"
              />
            </div> */}
        <div className="col-12 col-md-4">
              <Input
                value={booksData.publishedDate}
                placeholder={publishedDate}
                onChange={(e)=>{setBooksData({...booksData, publishedDate:e.target.value})}}
                name={"data"}
                title={publishedDate}
                disabled ={disabled}
                type="date"
              />
            </div>
        {/* <div className="col-12 col-md-4">
              <Input
                value={booksData.genre}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, genre:e.target.value})}}
                name={"data"}
                title={genre}
                disabled ={disabled}
                type="text"
              />
            </div> */}
        <div className=" col-12 col-md-4">
              <Input
                value={booksData.publisher}
                placeholder={publisher}
                onChange={(e)=>{setBooksData({...booksData, publisher:e.target.value})}}
                name={"data"}
                title={publisher}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-12 col-md-4">
              <Input
                value={booksData.language}
                placeholder={language}
                onChange={(e)=>{setBooksData({...booksData, language:e.target.value})}}
                name={"data"}
                title={language}
                disabled ={disabled}
                type="text"
              />
            </div>
         {/* <div className="col-12 col-md-4">
              <Input
                value={booksData.isbn}
                placeholder={isbn}
                onChange={(e)=>{setBooksData({...booksData, isbn:e.target.value})}}
                name={"data"}
                title={isbn}
                disabled ={disabled}
                type="number"
              />
            </div>  */}
        <div className="col-12 col-md-4">
              <Input
                value={booksData.description}
                placeholder={description}
                onChange={(e)=>{setBooksData({...booksData, description:e.target.value})}}
                name={"data"}
                title={description}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-12 col-md-4">
              <Input
                value={booksData.image}
                placeholder={"Image Url"}
                onChange={(e)=>{setBooksData({...booksData, image:e.target.value})}}
                name={"data"}
                title={image}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-12 col-md-4">
              <Input
                value={booksData.price}
                placeholder={price}
                onChange={(e)=>{setBooksData({...booksData, price:e.target.value})}}
                name={"data"}
                title={price}
                disabled ={disabled}
                type="number"
              />
            </div>
         <div className="col-12 col-md-4">
              <Input
                value={booksData.borrowBy}
                placeholder={borrowBy}
                onChange={(e)=>{setBooksData({...booksData, borrowBy:e.target.value})}}
                name={"data"}
                title={borrowBy}
                disabled ={disabled}
                type="text"
              />
            </div> 
         <div className="col-12 col-md-4">
              <Input
                value={booksData.borrowDate}
                placeholder={borrowDate}
                onChange={(e)=>{setBooksData({...booksData, borrowDate:e.target.value})}}
                name={"data"}
                title={borrowDate}
                disabled ={disabled}
                type="date"
              />
            </div> 
         <div className="col-12 col-md-4">
              <Input
                value={booksData.returnDate}
                placeholder={returnDate}
                onChange={(e)=>{setBooksData({...booksData, returnDate:e.target.value})}}
                name={"data"}
                title={returnDate}
                disabled ={disabled}
                type="date"
              />
            </div> 
        <div className="col-12 col-md-2">
          <div className="my-4">
              <label>Borrow</label>
                  <Checkbox
                        disabled ={disabled}
                        checked={booksData.borrow}
                        onChange={(e)=>{setBooksData({...booksData, borrow:e.target.checked})}}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
      </div>
          </div>
           <div className="d-flex justify-content-right align-items-center w-100  my-3">
         <div className="w-25 p-1 "  style={{marginLeft:'auto'}}>
           {(disabled ==true)  ? <Button width='w-100' type="button" title="Edit" onClick = {()=> seDisabled(false)}></Button> :<Button width='w-100' type="button" title="Done" onClick = {()=> editHandler()}></Button>}
        </div>
    </div> 
      </div>
    </div>       
    </div> 
  
            </div>
  );
}

export default EditNewsPaper;

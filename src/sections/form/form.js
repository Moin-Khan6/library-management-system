import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import ItemsCard from "../../components/card/itemCard";
import Input from "../../components/input/input";
import { bookEdited } from "../../store/booksSlice";


function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.record;
  const index = location.state.index;

  const [booksData, setBooksData] = useState({ ...data });
  const [id,title , author, publishedDate, genre, publisher, language, isbn, description, image, price, borrow] = Object.keys(data);
  const [disabled, seDisabled] = useState(true)


  const editHandler = ()=>{
    seDisabled(false)
    dispatch(bookEdited({booksData,index}))
    navigate('/books')
  }

  return (
    <div className="w-100 m-auto" >
    <div className="row w-100 " style={{  margin: "auto" }}>
      <div className="col-12 col-md-3 d-none d-sm-block">
      <ItemsCard data ={data}></ItemsCard>
      </div>
    <div className="col-12 col-md-8">
        <div className="row">   
        <div className="col-6 col-md-4">
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
        <div className="col-6 col-md-4">
              <Input
                value={booksData.author}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, author:e.target.value})}}
                name={"data"}
                title={author}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.publishedDate}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, publishedDate:e.target.value})}}
                name={"data"}
                title={publishedDate}
                disabled ={disabled}
                type="date"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.genre}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, genre:e.target.value})}}
                name={"data"}
                title={genre}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className=" col-6 col-md-4">
              <Input
                value={booksData.publisher}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, publisher:e.target.value})}}
                name={"data"}
                title={publisher}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.language}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, language:e.target.value})}}
                name={"data"}
                title={language}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.isbn}
                placeholder={isbn}
                onChange={(e)=>{setBooksData({...booksData, isbn:e.target.value})}}
                name={"data"}
                title={isbn}
                disabled ={disabled}
                type="number"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.description}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, description:e.target.value})}}
                name={"data"}
                title={description}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.image}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, image:e.target.value})}}
                name={"data"}
                title={image}
                disabled ={disabled}
                type="text"
              />
            </div>
        <div className="col-6 col-md-4">
              <Input
                value={booksData.price}
                placeholder={author}
                onChange={(e)=>{setBooksData({...booksData, price:e.target.value})}}
                name={"data"}
                title={price}
                disabled ={disabled}
                type="number"
              />
            </div>
        <div className="col-6 col-md-2">
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

export default Form;

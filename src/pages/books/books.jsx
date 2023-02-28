import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { bookAdded, bookDeleted } from "../../store/booksSlice";
import { modalField } from "../../utils/constants/modalField";
import { Table } from "antd";
import columns from '../../utils/constants/tableColumns'

function Books() {
  const [modalFields, setModalFields] = useState(modalField)
  const dispatch = useDispatch()
  
  //**********Subscribe data from store *******/
  const storeBooks = useSelector((state) => state.books.books);
  const [books, setBooks] = useState(storeBooks);
  const [selectedValue, setSelectedValue] = useState("");
  
  //******controlled Inputs default value set to empty**********/
  const [booksObj, setBookObj] =useState({ title:"",
  author:"",
  publishedDate:"",
  publisher:"",
  language:"",
  isbn:"",
  description:"",
  image:"",
  price:"",
  borrow:""
 })

  //******** Modal Hooks******/
  const [isModalOpen, setIsModalOpen] = useState(false);

  //******** Modal Functions */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
      // let {author,publishedDate,publisher,language,isbn,description,image,price,borrow} = booksObj;
      // if(author.length < 2 || publishedDate.length < 2 ||publisher.length < 2 ||  language.length < 2 || isbn.length <2 || description.length < 2 || image.length < 2 || price.length <2  ){
      //   return alert("Please Fill All fields")
      // }
      
    //****** validation if any field length less then 2 will not be accepted ************/
      for(let item in booksObj){
        if(booksObj[item].length <2 ){
          return alert("Please Fill All fields")
        }
      }
    dispatch(bookAdded(booksObj))
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //**********Function for DropDown *************/
  const handleDropdownChange = (event) => {
    let filterDropDownValue =  event.target.value =="true" ? true : false; 
    setSelectedValue(event.target.value);
    if (event.target.value == "allbooks") {
      setBooks([...storeBooks]);
      return;
    }
    let filterBooks = storeBooks.filter(
      (item) => item.borrow == filterDropDownValue
    );
    setBooks([...filterBooks]);
  };

  //**********Input Field onChange and save data intt bookObj*******/
  const handleBookOnChange =(value,title,index)=>{
    let valueSet = value;
    if(value =="true" || value =="false"){
       valueSet = (value =="true" ) ? true : false;
    }

    setBookObj({...booksObj,[title]:valueSet})    

    //*******Input Focus Color Change when input length is less than 2 ************/
    if(valueSet.length < 2){
      modalFields[index].status = "error"
      setModalFields([...modalFields])
      return
    }
    modalFields[index].status = ""
    setModalFields([...modalFields])
  }

  useEffect(()=>{
    setBooks([...storeBooks])
  },[storeBooks])

  const handleDeleteClick = (record) => {
    dispatch(bookDeleted(record._id))
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <Button title={"Add Books"} onClick={showModal} />
        </div>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleDropdownChange}
            value={selectedValue}
          >
            <option value="allbooks">All Books</option>
            <option value={true}>Borrow</option>
            <option value={false}>In library</option>
          </select>
        </div>
      </div>
      <Table  dataSource={books} columns ={columns(handleDeleteClick,"view-books")}  className="my-3"  />
      <Modal booksObj ={booksObj} handleBookOnChange ={handleBookOnChange} title ="Add Book"   isModalOpen ={isModalOpen} handleOk ={handleOk} handleCancel ={handleCancel} modalField ={modalFields}/>
    </div>
  );
}

export default Books;
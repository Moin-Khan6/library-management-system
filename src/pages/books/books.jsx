import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { bookAdded, bookDeleted } from "../../store/booksSlice";
import { modalField } from "../../utils/constants/modalField";
import { Table } from "antd";
import columns from '../../utils/constants/TableColumns/booksColumns'
import { ToastContainer, toast } from 'react-toastify';
import { booksDefaultValues } from "../../utils/constants/modalFields/documentoriesModalFields";




function Books() {
  const [modalFields, setModalFields] = useState(modalField)
  const dispatch = useDispatch()
  
  //**********Subscribe data from store *******/
  const storeBooks = useSelector((state) => state.books.books);
  const [books, setBooks] = useState(storeBooks);
  const [selectedValue, setSelectedValue] = useState("");
  
  //******controlled Inputs default value set to empty**********/
  const [booksObj, setBookObj] =useState(booksDefaultValues)

  //**********Toaster Function ***********/
  const notify = () => toast("Book Add Successfully!");
  const isbnNotify = () => toast("Isbn Is same");

  //******** Modal Hooks******/
  const [isModalOpen, setIsModalOpen] = useState(false);

  //******** Modal Functions */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {    
    //****** validation if any field length less then 2 will not be accepted ************/
      for(let item in booksObj){
        if(booksObj[item].length <2 ){
          return alert("Please Fill All fields")
        }
      }
      let findIsbn = storeBooks.find(item => item.isbn == booksObj.isbn)
      if(findIsbn){
        isbnNotify()
        return 
      }
      
    dispatch(bookAdded(booksObj))
    setIsModalOpen(false);
    notify()
    setBookObj(booksDefaultValues)
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
      <div className="logo  d-flex justify-content-left align-items-center ">
            <h3  >BOOKS </h3>
          </div>
      <div className="d-flex justify-content-between my-3">
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
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
      <Table  scroll={{ x: true }}  dataSource={books} columns ={columns(handleDeleteClick,"view-books")}  className="my-3"  />
      <Modal booksObj ={booksObj} handleBookOnChange ={handleBookOnChange} title ="Add Book"   isModalOpen ={isModalOpen} handleOk ={handleOk} handleCancel ={handleCancel} modalField ={modalFields}/>
    </div>
  );
}

export default Books;

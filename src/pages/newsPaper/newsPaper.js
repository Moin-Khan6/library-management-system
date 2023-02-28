import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { newsPaperAdded ,newsPaperDeleted} from "../../store/newsPaperSlice";
import { modalFieldNewsPaper ,newsPaperDefaultValues} from "../../utils/constants/modalField";
import { Table } from "antd";
import columns from '../../utils/constants/tableColumns'

function NewsPaper() {
  const [modalFields, setModalFields] = useState(modalFieldNewsPaper)
  const dispatch = useDispatch()
  
  //**********Subscribe data from store *******/
  const storeBooks = useSelector((state) => state.newsPaper.newsPaper);
  const [books, setBooks] = useState(storeBooks);
  const [selectedValue, setSelectedValue] = useState("");
  
  //******controlled Inputs default value set to empty**********/
  const [booksObj, setBookObj] =useState(newsPaperDefaultValues)

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
    dispatch(newsPaperAdded(booksObj))
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //**********Function for DropDown *************/
  const handleDropdownChange = (event) => {
    let filterDropDownValue =  event.target.value =="true" ? true : false; 
    setSelectedValue(event.target.value);
    if (event.target.value == "allnewspaper") {
      setBooks([...storeBooks]);
      return;
    }
    let filterBooks = storeBooks.filter(
      (item) => item.borrow == filterDropDownValue
    );
    setBooks([...filterBooks]);
  };

  //**********Input Field onChange and save data into bookObj*******/
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
    dispatch(newsPaperDeleted(record._id))
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
            <option value="allnewspaper">All NewsPapers</option>
            <option value={true}>Borrow</option>
            <option value={false}>In library</option>
          </select>
        </div>
      </div>
      <Table  dataSource={books} columns ={columns(handleDeleteClick,'view-news-paper')}  className="my-3"  />
      <Modal booksObj ={booksObj} handleBookOnChange ={handleBookOnChange} title ="Add Book"   isModalOpen ={isModalOpen} handleOk ={handleOk} handleCancel ={handleCancel} modalField ={modalFields}/>
    </div>
  );
}

export default NewsPaper;

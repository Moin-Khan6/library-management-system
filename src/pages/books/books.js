import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { bookAdded, bookDeleted } from "../../store/booksSlice";
import { modalField } from "../../utils/constants/modalFields/booksModalFields";
import { Table } from "antd";
import columns from "../../utils/constants/TableColumns/booksColumns";
import { ToastContainer } from "react-toastify";
import { booksDefaultValues } from "../../utils/constants/defaultValues";
import { toastError, toastSuccess } from "../../utils/helper";
import DropDown from "../../components/dropDown/dropDown";

function Books() {
  const dispatch = useDispatch();

  //**********Subscribe Store Data ***********/
  const storeBooks = useSelector((state) => state.books.books);

  const [modalFields, setModalFields] = useState(modalField);
  const [books, setBooks] = useState(storeBooks);
  const [selectedValue, setSelectedValue] = useState("");

  //******controlled Inputs default value set to empty**********/
  const [booksObj, setBookObj] = useState(booksDefaultValues);

  //******** Modal Hooks******/
  const [isModalOpen, setIsModalOpen] = useState(false);

  //******** Modal Functions */
  const showModal = () => {
    setIsModalOpen(true);
  };

  //*******Add Book *********/
  const handleOk = () => {
    let findIsbn = storeBooks.find((item) => item.isbn == booksObj.isbn);
    if (findIsbn) {
      toastError("Isbn Already Exist");
      return;
    }

    dispatch(bookAdded(booksObj));
    setIsModalOpen(false);
    setBookObj(booksDefaultValues);
    toastSuccess("Book Added");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //**********Function for DropDown *************/
  const handleDropdownChange = (event) => {
    let filterDropDownValue = event.target.value == "true" ? true : false;
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
  const handleBookOnChange = (value, title, index) => {
    let valueSet = value;
    if (value == "true" || value == "false") {
      valueSet = value == "true" ? true : false;
    }

    setBookObj({ ...booksObj, [title]: valueSet });

    //*******Input Focus Color Change when input length is less than 2 ************/
    if (valueSet.length < 2) {
      modalFields[index].status = "error";
      setModalFields([...modalFields]);
      return;
    }
    modalFields[index].status = "";
    setModalFields([...modalFields]);
  };

  const handleDeleteClick = (record) => {
    dispatch(bookDeleted(record._id));
    toastSuccess("Deleted");
  };

  useEffect(() => {
    setBooks([...storeBooks]);
  }, [storeBooks]);

  return (
    <div>
      <div className="logo  d-flex justify-content-left align-items-center ">
        <h3>BOOKS</h3>
      </div>
      <div className="d-flex justify-content-between my-3 ">
        <div>
          <Button title={"Add "} onClick={showModal} />
        </div>
        <div className="ms-2">
          <DropDown
            type={"select"}
            handleDropdownChange={handleDropdownChange}
            selectedValue={selectedValue}
            name={"All "}
            defaultValue={"allbooks"}
          />
        </div>
      </div>

      <Table
        pagination={{ pageSize: 8 }}
        scroll={{ x: true }}
        dataSource={books}
        columns={columns(handleDeleteClick, "view-books")}
        className="my-3"
      />
      <Modal
        inputObj={booksObj}
        handleOnChange={handleBookOnChange}
        title="Add Book"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalField={modalFields}
      />
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
        theme="light"
      />
    </div>
  );
}

export default Books;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { Table } from "antd";
import columns from "../../utils/constants/TableColumns/docuementoriesColumns";
import { documentoriesModalFiedls } from "../../utils/constants/modalFields/documentoriesModalFields";
import {
  documentoriesAdded,
  documentoriesDeleted,
} from "../../store/documentoriesSlice";
import { ToastContainer } from "react-toastify";
import { documentoriesDefaultValues } from "../../utils/constants/defaultValues";
import { toastError, toastSuccess } from "../../utils/helper";
import DropDown from "../../components/dropDown/dropDown";

function Documentories() {
  const dispatch = useDispatch();

  //**********Subscribe Store Data ***********/
  const storeDocumentories = useSelector(
    (state) => state.documentories.documentories
  );

  const [modalFields, setModalFields] = useState(documentoriesModalFiedls);
  const [books, setBooks] = useState(storeDocumentories);
  const [selectedValue, setSelectedValue] = useState("");

  //******controlled Inputs default value set to empty**********/
  const [documentoriesObj, setDocumentoriesObj] = useState(
    documentoriesDefaultValues
  );

  //******** Modal Hooks******/
  const [isModalOpen, setIsModalOpen] = useState(false);

  //******** Modal Functions */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    //****** validation if any field length less then 2 will not be accepted ************/
    for (let item in documentoriesObj) {
      if (documentoriesObj[item].length < 2) {
        return toastError("Please Fill All Fields");
      }
    }
    dispatch(documentoriesAdded(documentoriesObj));
    setIsModalOpen(false);
    setDocumentoriesObj(documentoriesDefaultValues);
    toastSuccess("Documentory Added");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //**********Function for DropDown *************/
  const handleDropdownChange = (event) => {
    let filterDropDownValue = event.target.value == "true" ? true : false;
    setSelectedValue(event.target.value);
    if (event.target.value == "allnewspaper") {
      setBooks([...storeDocumentories]);
      return;
    }
    let filterBooks = storeDocumentories.filter(
      (item) => item.borrow == filterDropDownValue
    );
    setBooks([...filterBooks]);
  };

  //**********Input Field onChange and save data into bookObj*******/
  const handleBookOnChange = (value, title, index) => {
    let valueSet = value;
    if (value == "true" || value == "false") {
      valueSet = value == "true" ? true : false;
    }

    setDocumentoriesObj({ ...documentoriesObj, [title]: valueSet });

    //*******Input Focus Color Change when input length is less than 2 ************/
    if (valueSet.length < 2) {
      modalFields[index].status = "error";
      setModalFields([...modalFields]);
      return;
    }
    modalFields[index].status = "";
    setModalFields([...modalFields]);
  };

  useEffect(() => {
    setBooks([...storeDocumentories]);
  }, [storeDocumentories]);

  const handleDeleteClick = (record) => {
    dispatch(documentoriesDeleted(record._id));
    toastSuccess("Deleted")

  };
  return (
    <div>
      <div className="logo  d-flex justify-content-left align-items-center ">
        <h3>DOCUMENTORIES</h3>
      </div>
      <div className="d-flex justify-content-between w-100 my-3 ">
        <div>
          <Button title={"Add"} onClick={showModal} />
        </div>
        <div>
          <DropDown
            type={"select"}
            handleDropdownChange={handleDropdownChange}
            selectedValue={selectedValue}
            name={"All "}
            defaultValue={"allnewspaper"}
          />
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
        theme="light"
      />
      <Table
        pagination={{ pageSize: 8 }}
        dataSource={books}
        columns={columns(handleDeleteClick, "view-docuementories")}
        className="my-3"
        scroll={{ x: true }}
      />
      <Modal
        inputObj={documentoriesObj}
        handleOnChange={handleBookOnChange}
        title="Add Documentory"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalField={modalFields}
      />
    </div>
  );
}

export default Documentories;

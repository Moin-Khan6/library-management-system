import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import { newsPaperAdded, newsPaperDeleted } from "../../store/newsPaperSlice";
import { modalFieldNewsPaper } from "../../utils/constants/modalFields/newspaperModalFields";
import { Table } from "antd";
import columns from "../../utils/constants/TableColumns/newspaperColumns";
import { ToastContainer, toast } from "react-toastify";
import { toastError, toastSuccess } from "../../utils/helper";
import { newsPaperDefaultValues } from "../../utils/constants/defaultValues";
import DropDown from "../../components/dropDown/dropDown";

function NewsPaper() {
  const dispatch = useDispatch();
  const [modalFields, setModalFields] = useState(modalFieldNewsPaper);

  //**********Subscribe data from store *******/
  const storeNewsPapers = useSelector((state) => state.newsPaper.newsPaper);
  const [newsPaper, setnewsPaper] = useState(storeNewsPapers);
  const [selectedValue, setSelectedValue] = useState("");

  //******controlled Inputs default value set to empty**********/
  const [newsPaperObj, setNewsPaperObj] = useState(newsPaperDefaultValues);

  //******** Modal Hooks******/
  const [isModalOpen, setIsModalOpen] = useState(false);

  //******** Modal Functions */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(newsPaperAdded(newsPaperObj));
    setIsModalOpen(false);
    setNewsPaperObj(newsPaperDefaultValues);
    toastSuccess("NewsPaper Added");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //**********Function for DropDown *************/
  const handleDropdownChange = (event) => {
    let filterDropDownValue = event.target.value == "true" ? true : false;
    setSelectedValue(event.target.value);
    if (event.target.value == "allnewspaper") {
      setnewsPaper([...storeNewsPapers]);
      return;
    }
    let filternewsPaper = storeNewsPapers.filter(
      (item) => item.borrow == filterDropDownValue
    );
    setnewsPaper([...filternewsPaper]);
  };

  //**********Input Field onChange *******/
  const handleNewsPaperOnChange = (value, title, index) => {
    let valueSet = value;
    if (value == "true" || value == "false") {
      valueSet = value == "true" ? true : false;
    }

    setNewsPaperObj({ ...newsPaperObj, [title]: valueSet });

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
    setnewsPaper([...storeNewsPapers]);
  }, [storeNewsPapers]);

  const handleDeleteClick = (record) => {
    dispatch(newsPaperDeleted(record._id));
  };
  return (
    <div>
      <div className="logo d-flex justify-content-left align-items-center ">
        <h3>NEWSPAPERS </h3>
      </div>
      <div className="d-flex justify-content-between w-100 my-3">
        <div>
          <Button title={"Add "} onClick={showModal} />
        </div>

        <div className="ms-2" >

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
        dataSource={newsPaper}
        columns={columns(handleDeleteClick, "view-news-paper")}
        className="my-3"
        scroll={{ x: true }}
      />
      <Modal
        inputObj={newsPaperObj}
        handleOnChange={handleNewsPaperOnChange}
        title="Add Newspaper"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalField={modalFields}
      />
    </div>
  );
}

export default NewsPaper;
